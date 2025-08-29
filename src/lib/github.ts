import { unstable_cache } from "next/cache";

export interface GitHubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
}

async function fetchContributorsFromAPI(): Promise<GitHubContributor[]> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Javaistic-Website",
    };

    // Add GitHub token if available for higher rate limits
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      "https://api.github.com/repos/javaistic/javaistic/contributors",
      {
        headers,
        next: {
          // Revalidate every 24 hours to avoid hitting rate limits
          revalidate: 86400,
        },
      },
    );

    if (!response.ok) {
      console.error(
        "Failed to fetch contributors:",
        response.status,
        response.statusText,
      );
      // Log rate limit headers for debugging
      if (response.status === 403) {
        console.error(
          "Rate limit remaining:",
          response.headers.get("x-ratelimit-remaining"),
        );
        console.error(
          "Rate limit reset:",
          response.headers.get("x-ratelimit-reset"),
        );
      }
      return [];
    }

    const contributors: GitHubContributor[] = await response.json();

    // Filter out bots and return only real contributors
    return contributors.filter(
      (contributor) =>
        contributor.type === "User" && contributor.contributions > 0,
    );
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return [];
  }
}

// Cache the contributors data for 24 hours
export const getContributors = unstable_cache(
  fetchContributorsFromAPI,
  ["github-contributors"],
  {
    revalidate: 86400, // 24 hours
    tags: ["contributors"],
  },
);
