"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  AlertCircle,
  RotateCcw,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import { extractWhatsNew } from "@/lib/github";

interface ChangelogEntry {
  version: string;
  date: string;
  body: string;
  prerelease: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

export default function ChangelogPage() {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filter, setFilter] = useState<"all" | "stable" | "prerelease">("all");

  const fetchReleases = async (skipCache = false) => {
    try {
      setLoading(true);
      const url = skipCache ? `/api/releases?t=${Date.now()}` : "/api/releases";
      const response = await fetch(url, {
        cache: skipCache ? "no-store" : "default",
        headers: skipCache
          ? { Pragma: "no-cache", "Cache-Control": "no-cache" }
          : {},
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch releases: ${response.statusText}`);
      }

      const data = await response.json();
      setEntries(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching releases:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch changelog",
      );
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchReleases(true); // Skip cache on manual refresh
  };

  useEffect(() => {
    fetchReleases();
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-36 pb-14">
      <div className="mb-12 text-center">
        <h1 className="font-funnel-display bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Latest releases and updates from Javaistic
        </p>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="border-primary/20 bg-primary/10 text-primary hover:border-primary/40 hover:bg-primary/20 mt-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCcw
            className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
          />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className="mb-12 flex justify-center gap-4">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
            filter === "all"
              ? "border-primary/20 bg-primary/10 text-primary"
              : "border-border bg-background text-foreground hover:bg-accent"
          }`}
        >
          All Releases
        </button>
        <button
          onClick={() => setFilter("stable")}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
            filter === "stable"
              ? "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
              : "border-border bg-background text-foreground hover:bg-accent"
          }`}
        >
          Stable
        </button>
        <button
          onClick={() => setFilter("prerelease")}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
            filter === "prerelease"
              ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
              : "border-border bg-background text-foreground hover:bg-accent"
          }`}
        >
          Prerelease
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {loading && (
        <div className="relative">
          <div className="bg-muted absolute top-0 bottom-0 left-4 w-px sm:left-6 sm:w-0.5"></div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative mb-12">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-muted-foreground mt-2 h-4 w-4 animate-pulse rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-muted-foreground mb-2 h-6 w-32 animate-pulse rounded"></div>
                  <div className="mb-4 flex gap-4">
                    <div className="bg-muted-foreground h-4 w-20 animate-pulse rounded"></div>
                    <div className="bg-muted-foreground h-4 w-24 animate-pulse rounded"></div>
                    <div className="bg-muted-foreground h-4 w-16 animate-pulse rounded"></div>
                  </div>
                  <div className="bg-muted animate-pulse rounded-lg p-6">
                    <div className="bg-muted-foreground mb-4 h-32 rounded"></div>
                    <div className="bg-muted-foreground mb-2 h-4 w-full rounded"></div>
                    <div className="bg-muted-foreground mb-2 h-4 w-3/4 rounded"></div>
                    <div className="bg-muted-foreground h-4 w-1/2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="border-destructive/20 bg-destructive/10 mb-8 rounded-lg border p-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-destructive h-5 w-5" />
            <div className="flex-1">
              <h3 className="text-destructive font-semibold">
                Error Loading Changelog
              </h3>
              <p className="text-destructive/80 text-sm">{error}</p>
            </div>
            <button
              onClick={() => fetchReleases()}
              className="border-destructive/20 bg-destructive/10 text-destructive hover:border-destructive/40 hover:bg-destructive/20 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {!loading && entries.length === 0 && !error && (
        <div className="border-border bg-card rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">
            No releases found. Check back soon!
          </p>
        </div>
      )}

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-sky-400 to-sky-600 sm:left-6 sm:w-0.5 dark:from-sky-500 dark:to-sky-700"></div>
        {(() => {
          const filteredEntries = entries.filter(
            (entry) =>
              filter === "all" ||
              (filter === "prerelease" ? entry.prerelease : !entry.prerelease),
          );
          return filteredEntries.map((entry, index) => (
            <div
              key={entry.version}
              className="fade-in-up relative mb-10 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="mr-6 flex-shrink-0 sm:mr-10">
                  <div
                    className={`mt-2 h-4 w-4 cursor-pointer rounded-full border-4 border-white shadow-sm transition-colors duration-200 hover:bg-sky-600 dark:border-neutral-900 ${index === 0 ? "bg-green-500" : "bg-sky-500"}`}
                  ></div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-300">
                      {entry.version}
                    </h3>
                    {entry.prerelease && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-200 px-2 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300">
                        <AlertTriangle className="h-3 w-3" /> PRE-RELEASE
                      </span>
                    )}
                    {index === 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-200 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-800 dark:text-green-300">
                        LATEST
                      </span>
                    )}
                  </div>
                  <div className="mb-4 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {entry.date}
                    </div>
                    {entry.author && (
                      <div className="flex items-center gap-2">
                        <img
                          src={entry.author.avatar}
                          alt={entry.author.name}
                          className="h-5 w-5 rounded-full"
                        />
                        <span>
                          by <strong>{entry.author.name}</strong>
                        </span>
                      </div>
                    )}
                    <a
                      href={`https://github.com/javaistic/javaistic/releases/tag/${entry.version}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      View on GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <div className="bg-card border-border hover:border-border/80 rounded-xl border p-6 transition-all duration-200 hover:shadow-lg">
                      <img
                        src={`https://og-javaistic.vercel.app/og?title=${entry.version} Release`}
                        alt="Javaistic Badge"
                        className="border-border mt-0 mb-4 w-full rounded-xl border"
                        loading="lazy"
                      />
                      <h4 className="text-card-foreground mb-3 text-lg font-bold">
                        What's New
                      </h4>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {extractWhatsNew(entry.body)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ));
        })()}
      </div>

      <div className="border-border bg-card mt-16 rounded-lg border p-6">
        <h2 className="text-card-foreground mb-2 font-semibold">
          About This Changelog
        </h2>
        <p className="text-muted-foreground text-sm">
          This changelog is automatically synced with{" "}
          <a
            href="https://github.com/javaistic/javaistic/releases"
            className="text-primary hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Releases
          </a>{" "}
          and cached for optimal performance. Updates appear within 24 hours.
        </p>
      </div>
    </div>
  );
}
