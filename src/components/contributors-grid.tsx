import Link from "next/link";
import { GitHubContributor } from "@/lib/github";

interface ContributorsGridProps {
  contributors: GitHubContributor[];
}

export function ContributorsGrid({ contributors }: ContributorsGridProps) {
  if (contributors.length === 0) {
    return (
      <div className="text-muted-foreground text-center">
        <p>Unable to load contributors at the moment.</p>
        <p className="mt-2">
          View all contributors on{" "}
          <Link
            href="https://github.com/javaistic/javaistic/graphs/contributors"
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
      {contributors.map((contributor) => (
        <div
          key={contributor.id}
          className="group hover:bg-muted flex flex-col items-center rounded-2xl p-4 transition-colors"
        >
          <img
            src={contributor.avatar_url}
            alt={`${contributor.login}'s avatar`}
            className="h-16 w-16 rounded-full object-cover shadow-md transition-transform group-hover:scale-105"
            loading="lazy"
          />
          <h4 className="text-foreground group-hover:text-primary mt-3 text-sm font-medium">
            {contributor.login}
          </h4>
          <p className="text-muted-foreground text-xs">
            {contributor.contributions} contribution
            {contributor.contributions !== 1 ? "s" : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
