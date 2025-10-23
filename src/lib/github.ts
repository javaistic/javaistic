import { unstable_cache } from "next/cache";

// ==================== Types ====================

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  author: {
    login: string;
    avatar_url: string;
  };
}

export interface ChangelogEntry {
  version: string;
  date: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

// ==================== Constants ====================

const GITHUB_OWNER = "javaistic";
const GITHUB_REPO = "javaistic";
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

// Cache releases and contributors for 24 hours (86400 seconds)
const CACHE_DURATION = 86400;

// ==================== Releases ====================

/**
 * Fetch releases from GitHub with caching
 * Cached for 24 hours to minimize API hits
 */
export const fetchGitHubReleases = unstable_cache(
  async (): Promise<ChangelogEntry[]> => {
    try {
      const response = await fetch(`${GITHUB_API_URL}/releases`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        // Add timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        console.error(
          `GitHub API error: ${response.status} ${response.statusText}`,
        );
        return [];
      }

      const releases: GitHubRelease[] = await response.json();

      // Convert GitHub releases to changelog entries
      return releases
        .filter((release) => !release.draft) // Exclude drafts
        .map((release) => ({
          version: release.tag_name,
          date: new Date(release.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          body: release.body || "No description provided",
          draft: release.draft,
          prerelease: release.prerelease,
          author: {
            name: release.author.login,
            avatar: release.author.avatar_url,
          },
        }));
    } catch (error) {
      console.error("Failed to fetch GitHub releases:", error);
      return [];
    }
  },
  [`github-releases-${GITHUB_OWNER}-${GITHUB_REPO}`],
  {
    revalidate: CACHE_DURATION,
    tags: ["github-releases"],
  },
);

/**
 * Extracts and formats the "What’s New" section from MDX content
 * while preserving links, inline code, bold/italic, emojis, and nested lists.
 */
export function extractWhatsNew(body: string): string {
  if (!body) return "";

  const lines = body.split("\n");
  const whatsNew: string[] = [];
  let insideSection = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect start of "What’s New" section (supports both apostrophe types)
    if (/^##\s*what[’']?s new/i.test(trimmed)) {
      insideSection = true;
      continue;
    }

    // Stop at the next section header
    if (insideSection && /^##\s+/.test(trimmed)) break;

    if (insideSection) {
      // Collect bullet points or nested bullets
      if (/^(\*|-|\d+\.)\s+/.test(trimmed)) {
        // Remove bullet prefix but keep content formatting
        const content = trimmed.replace(/^(\*|-|\d+\.)\s+/, "");
        whatsNew.push(content);
      }
      // Collect indented nested lists
      else if (/^\s{2,}(\*|-|\d+\.)\s+/.test(line)) {
        const content = trimmed.replace(/^(\*|-|\d+\.)\s+/, "  - "); // preserve nesting
        whatsNew.push(content);
      }
    }
  }

  if (whatsNew.length === 0) return "";

  // Number top-level items and keep nested lists indented
  let counter = 1;
  const formatted = whatsNew.map((line) => {
    if (/^\s{2}- /.test(line)) {
      return line; // nested item
    } else {
      return `${counter++}. ${line}`;
    }
  });

  return formatted.join("\n");
}
