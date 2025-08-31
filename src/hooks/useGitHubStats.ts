"use client";
import { useEffect, useState } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
  issues: number;
  contributors: number;
}

interface UseGitHubStatsReturn {
  stats: GitHubStats;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

// Production-ready GitHub Stats Hook with Smart Rate Limiting
export const useGitHubStats = (): UseGitHubStatsReturn => {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    issues: 0,
    contributors: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Production configuration
  const CACHE_KEY = "github-stats-javaistic";
  const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours - conservative for production
  const STALE_WHILE_REVALIDATE = 24 * 60 * 60 * 1000; // 24 hours - serve stale data if needed

  // Conservative fallback data based on current repo stats
  const PRODUCTION_FALLBACK: GitHubStats = {
    stars: 40,
    forks: 19,
    issues: 4,
    contributors: 15,
  };

  // Enhanced cache management with versioning
  const getCachedData = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const parsed = JSON.parse(cached);
      const now = Date.now();

      // Always return cached data if it exists and is less than 24 hours old
      if (parsed.timestamp && now - parsed.timestamp < STALE_WHILE_REVALIDATE) {
        // Mark if data is fresh or stale
        return {
          ...parsed,
          isFresh: now - parsed.timestamp < CACHE_DURATION,
        };
      }

      return null;
    } catch (err) {
      console.warn("Cache read error:", err);
      return null;
    }
  };

  const setCachedData = (
    data: GitHubStats,
    metadata: { rateLimited?: boolean; source?: string } = {},
  ) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now(),
        version: "1.0",
        metadata: {
          rateLimited: metadata.rateLimited || false,
          source: metadata.source || "github-api",
          userAgent: "javaistic-website",
        },
      };

      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      setLastUpdated(new Date());
    } catch (err) {
      console.warn("Cache write error:", err);
    }
  };

  const fetchWithRateLimitHandling = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first - always prefer cached data in production
      const cachedData = getCachedData();
      if (cachedData?.data) {
        setStats(cachedData.data);

        // If cache is fresh, don't make API call
        if (cachedData.isFresh) {
          setLoading(false);
          return;
        }
      }

      // Make conservative API call - single endpoint only
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

      const response = await fetch(
        "https://api.github.com/repos/javaistic/javaistic",
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
          signal: controller.signal,
        },
      );

      clearTimeout(timeoutId);

      // Check rate limit headers proactively
      const remaining = response.headers.get("X-RateLimit-Remaining");
      const resetTime = response.headers.get("X-RateLimit-Reset");

      if (remaining && parseInt(remaining) < 5) {
        console.warn(
          `GitHub API rate limit low: ${remaining} requests remaining`,
        );
      }

      if (response.status === 403 || response.status === 429) {
        console.warn("GitHub API rate limited, using cached/fallback data");

        if (cachedData?.data) {
          setStats(cachedData.data);
          setCachedData(cachedData.data, {
            rateLimited: true,
            source: "cache-fallback",
          });
        } else {
          setStats(PRODUCTION_FALLBACK);
          setCachedData(PRODUCTION_FALLBACK, {
            rateLimited: true,
            source: "production-fallback",
          });
        }

        setError(null); // Don't show error for rate limiting in production
        return;
      }

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const repoData = await response.json();

      // Conservative contributor count estimation (avoid second API call)
      const estimatedContributors = Math.max(
        Math.floor((repoData.stargazers_count || 0) / 3), // Rough heuristic
        PRODUCTION_FALLBACK.contributors,
      );

      const freshStats: GitHubStats = {
        stars: repoData.stargazers_count || PRODUCTION_FALLBACK.stars,
        forks: repoData.forks_count || PRODUCTION_FALLBACK.forks,
        issues: repoData.open_issues_count || PRODUCTION_FALLBACK.issues,
        contributors: estimatedContributors,
      };

      setStats(freshStats);
      setCachedData(freshStats, { source: "github-api-success" });
    } catch (err) {
      console.warn("GitHub stats fetch error:", err);

      // Graceful degradation - use cached data or fallback
      const cachedData = getCachedData();
      if (cachedData?.data) {
        setStats(cachedData.data);
        setError(null); // Don't show error if we have cached data
      } else {
        setStats(PRODUCTION_FALLBACK);
        setCachedData(PRODUCTION_FALLBACK, { source: "error-fallback" });
        setError(null); // Silent fallback in production
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial load
    fetchWithRateLimitHandling();

    // Conservative refresh interval - 4 hours in production
    const refreshInterval = 4 * 60 * 60 * 1000;
    const interval = setInterval(fetchWithRateLimitHandling, refreshInterval);

    return () => clearInterval(interval);
  }, []);

  return {
    stats,
    loading,
    error,
    lastUpdated,
  };
};
