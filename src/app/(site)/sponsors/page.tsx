import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Support Javaistic",
  description:
    "Support Javaistic and help us keep Java education free and accessible for everyone. Your sponsorship enables us to create high-quality content and maintain the platform.",
  keywords: [
    "Javaistic",
    "support",
    "sponsor",
    "donate",
    "Java education",
    "open source",
  ],
  openGraph: {
    title: "Support Javaistic",
    description: "Help us keep Java education free and accessible for everyone",
    type: "website",
    url: "https://javaistic.vercel.app/sponsors",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Support Javaistic - Java Education for Everyone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Javaistic",
    description: "Help us keep Java education free and accessible for everyone",
    images: ["/og.png"],
  },
};

function OpenCollectiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        d="M7.538 9.385a.848.848 0 0 1 .923-.923h4.923a.846.846 0 0 1 .615.308l1.077 1.077h8.308a.846.846 0 0 1 .846.846v10.769a.846.846 0 0 1-.846.846H8.46a.846.846 0 0 1-.923-.923z"
        fill="#90AECB"
      />
      <path
        fillRule="evenodd"
        d="M3.077 13.846c0-1.175.953-2.05 2.128-2.128l11.82-1.332a3.001 3.001 0 0 1 .359-.021h9.693c1.175 0 2.128.953 2.128 2.128v10.045c0 1.175-.953 2.128-2.128 2.128H6.97a1.62 1.62 0 0 1-1.615-1.615zm21.154 1.692c.468 0 .846.378.846.846v5.539c0 .468-.378.846-.846.846H6.77a.846.846 0 0 1-.846-.846v-5.539c0-.468.378-.846.846-.846z"
        fill="#7496BB"
      />
      <path
        d="M10.615 18.77a1.077 1.077 0 1 0 0-2.154 1.077 1.077 0 0 0 0 2.154m4.616 0a1.077 1.077 0 1 0 0-2.154 1.077 1.077 0 0 0 0 2.154m4.615 0a1.077 1.077 0 1 0 0-2.154 1.077 1.077 0 0 0 0 2.154"
        fill="#FFF"
      />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0c6.623 0 12 5.377 12 12 0 5.302-3.438 9.8-8.205 11.385-.6-.09-1.05-.263-1.05-.263l-.015-2.61c0-.859-.263-1.425-.563-1.712 1.837-.195 3.77-.9 3.77-4.048 0-.902-.315-1.635-.855-2.208.09-.195.375-.975-.075-2.032 0 0-.675-.21-2.205.825-.638-.188-1.313-.262-1.988-.262-.675 0-1.35.074-1.988.262-1.53-1.035-2.205-.825-2.205-.825-.45 1.057-.165 1.837-.075 2.032-.54.573-.855 1.306-.855 2.208 0 3.138 1.933 3.853 3.77 4.048-.225.195-.45.563-.525 1.035-.48.21-1.665.585-2.4-.675 0 0-.435-.795-1.275-.855 0 0-.825-.015-.06.525 0 0 .54.255.915 1.215 0 0 .495 1.5 2.805 1.035l.015 1.62s-.45.173-1.05.263C3.438 21.8 0 17.302 0 12 0 5.377 5.377 0 12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SponsorsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="font-funnel-display text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Support{" "}
          <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Javaistic
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-xl">
          Help us keep Java education free and accessible for everyone. Your
          support enables us to create high-quality content, maintain the
          platform, and reach more learners worldwide.
        </p>
      </div>
      {/* Support Options */}
      <div className="mb-20 grid gap-8 md:grid-cols-2">
        <div className="bg-card rounded-2xl border p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
            <OpenCollectiveIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="font-funnel-display text-foreground mb-4 text-2xl font-bold">
            Monthly Sponsorship
          </h2>
          <p className="text-muted-foreground mb-6">
            Become a recurring sponsor and help us maintain consistent
            development and content creation. All sponsors get recognition and
            exclusive updates.
          </p>
          <div className="mb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">☕ Coffee Supporter</span>
              <span className="font-medium">$5/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">🚀 Growth Supporter</span>
              <span className="font-medium">$25/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">💎 Premium Sponsor</span>
              <span className="font-medium">$100/month</span>
            </div>
          </div>
          <Button asChild className="w-full">
            <Link href="https://opencollective.com/javaistic" target="_blank">
              <OpenCollectiveIcon className="mr-2 h-4 w-4" /> Become a Sponsor
            </Link>
          </Button>
        </div>
        <div className="bg-card rounded-2xl border p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
            <svg
              className="h-6 w-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="font-funnel-display text-foreground mb-4 text-2xl font-bold">
            One-Time Donation
          </h2>
          <p className="text-muted-foreground mb-6">
            Make a one-time contribution to support our mission. Every amount
            helps us improve the platform and create better learning
            experiences.
          </p>
          <div className="mb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">🙏 Thank You</span>
              <span className="font-medium">$10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">💖 Generous</span>
              <span className="font-medium">$50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">🌟 Amazing</span>
              <span className="font-medium">Custom</span>
            </div>
          </div>
          <Button variant="outline" asChild className="w-full">
            <Link href="https://opencollective.com/javaistic" target="_blank">
              Make a Donation
            </Link>
          </Button>
        </div>
      </div>
      {/* Current Sponsors */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold">
          Our Amazing Sponsors
        </h2>
        <div className="text-center">
          <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-12 dark:from-blue-950 dark:to-indigo-950">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-800">
              <svg
                className="h-10 w-10 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="text-foreground mb-4 text-2xl font-bold">
              Be Our First Sponsor!
            </h3>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              We&apos;re just getting started and looking for amazing
              individuals and companies who believe in making education
              accessible. Your logo and link could be here, supporting thousands
              of Java learners.
            </p>
          </div>
          <p className="text-muted-foreground">
            Want to see your company here?
            <Link
              href="/contact"
              className="ml-1 text-blue-600 hover:underline dark:text-blue-400"
            >
              Contact us about sponsorship opportunities
            </Link>
          </p>
        </div>
      </div>
      {/* Why Support Us */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold">
          Why Support Javaistic?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg
                className="h-8 w-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              Free Education
            </h3>
            <p className="text-muted-foreground">
              We believe education should be free and accessible to everyone,
              regardless of their financial situation.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              Quality Content
            </h3>
            <p className="text-muted-foreground">
              Every dollar goes toward creating better content, maintaining the
              platform, and improving user experience.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <svg
                className="h-8 w-8 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              Global Impact
            </h3>
            <p className="text-muted-foreground">
              Help us reach more learners worldwide and make a lasting impact on
              Java education globally.
            </p>
          </div>
        </div>
      </div>
      {/* Other Ways to Support */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold">
          Other Ways to Support Us
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card rounded-lg border p-6 text-center">
            <GitHubIcon className="text-foreground mx-auto mb-4 h-8 w-8" />
            <h3 className="text-foreground mb-2 font-semibold">
              Star on GitHub
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Give us a star on GitHub to help increase our visibility
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/javaistic/javaistic"
                target="_blank"
              >
                Star Repository
              </Link>
            </Button>
          </div>
          <div className="bg-card rounded-lg border p-6 text-center">
            <svg
              className="text-foreground mx-auto mb-4 h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <h3 className="text-foreground mb-2 font-semibold">
              Spread the Word
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Share Javaistic with friends and on social media
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://x.com/intent/tweet?text=Learning%20Java%20for%20free%20at%20@javaistic!%20🚀&url=https://javaistic.vercel.app"
                target="_blank"
              >
                Share on X
              </Link>
            </Button>
          </div>
          <div className="bg-card rounded-lg border p-6 text-center">
            <svg
              className="text-foreground mx-auto mb-4 h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <h3 className="text-foreground mb-2 font-semibold">
              Contribute Code
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Help us improve by contributing to our open-source project
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/javaistic/javaistic/blob/main/CONTRIBUTING.md"
                target="_blank"
              >
                Start Contributing
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-900 to-sky-700 p-12 text-center text-white">
        <h2 className="font-funnel-display mb-4 text-3xl font-bold">
          Ready to Make a Difference?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Your support, no matter the size, helps us maintain and improve
          Javaistic for thousands of learners worldwide. Together, we can make
          Java education accessible to everyone.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-100"
            asChild
          >
            <Link href="https://opencollective.com/javaistic" target="_blank">
              <OpenCollectiveIcon className="mr-2 h-4 w-4" />
              Support Javaistic
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black"
            asChild
          >
            <Link href="/contact">Contact About Sponsorship</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
