import { fetchGitHubReleases } from "@/lib/github";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 86400; // Revalidate every 24 hours

export async function GET(request: NextRequest) {
  try {
    // Check if this is a cache-busting request from the client refresh button
    const url = new URL(request.url);
    const bypassCache =
      url.searchParams.has("t") ||
      request.headers.get("cache-control") === "no-cache" ||
      request.headers.get("pragma") === "no-cache";

    const releases = await fetchGitHubReleases();

    // If cache bypass requested, return with no-cache headers
    if (bypassCache) {
      return NextResponse.json(releases, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Content-Type": "application/json",
        },
      });
    }

    // Otherwise use standard cache headers (24 hours)
    return NextResponse.json(releases, {
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400", // 24 hours
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in releases API:", error);
    return NextResponse.json(
      { error: "Failed to fetch releases" },
      { status: 500 },
    );
  }
}
