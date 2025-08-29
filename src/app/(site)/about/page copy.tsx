import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpenIcon,
  DollarSignIcon,
  GlobeIcon,
  UsersIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Javaistic - Our Mission to Make Java Learning Accessible",
  description:
    "Learn about Javaistic's mission to provide free, high-quality Java education for everyone. Discover our story, values, and commitment to the Java community.",
  openGraph: {
    title: "About Javaistic - Our Mission to Make Java Learning Accessible",
    description:
      "Learn about Javaistic's mission to provide free, high-quality Java education for everyone. Discover our story, values, and commitment to the Java community.",
    images: [
      {
        url: "https://javaistic.vercel.app/og.png",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="font-funnel-display text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          About{" "}
          <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Javaistic
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-xl">
          We&apos;re on a mission to make Java programming accessible,
          enjoyable, and completely free for learners worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-funnel-display text-foreground mb-6 text-3xl font-bold">
            Our Mission
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Javaistic was born from a simple belief: everyone deserves access to
            high-quality programming education, regardless of their background
            or financial situation. We&apos;re building a comprehensive, free
            platform that makes learning Java programming intuitive, engaging,
            and effective.
          </p>
          <p className="text-muted-foreground mb-6 text-lg">
            Our goal is to bridge the gap between complex programming concepts
            and practical, real-world application. We believe that when learning
            is enjoyable and accessible, students can achieve remarkable
            results.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/docs">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning Java
              </Button>
            </Link>
            <Link href="https://github.com/javaistic/javaistic" target="_blank">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <GitHubIcon className="mr-1 h-4 w-4" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/home/docs.svg"
            alt="Javaistic Learning Platform"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          Our Values
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-card rounded-2xl border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
              <BookOpenIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              Quality Education
            </h3>
            <p className="text-muted-foreground">
              Every piece of content is carefully crafted, reviewed, and tested
              to ensure the highest educational standards.
            </p>
          </div>

          <div className="bg-card rounded-2xl border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
              <DollarSignIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              Always Free
            </h3>
            <p className="text-muted-foreground">
              Education should be accessible to everyone. Our platform is
              completely free, with no hidden costs or premium tiers.
            </p>
          </div>

          <div className="bg-card rounded-2xl border p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
              <UsersIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              Community Driven
            </h3>
            <p className="text-muted-foreground">
              Built by the community, for the community. We welcome
              contributions and feedback from learners and educators alike.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-20 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 dark:from-blue-950 dark:to-indigo-950">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold">
          Impact & Growth
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
              100%
            </div>
            <div className="text-muted-foreground">Open Source</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
              30+
            </div>
            <div className="text-muted-foreground">Java Topics</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
              22+
            </div>
            <div className="text-muted-foreground">Programs</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
              0
            </div>
            <div className="text-muted-foreground">Cost (Forever)</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          Meet Our Team
        </h2>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center">
            <img
              src="https://github.com/uiuxarghya.png"
              alt="Arghya Ghosh"
              className="mb-2 h-40 w-40 rounded-full object-cover shadow-lg"
            />
            <h3 className="text-foreground font-funnel-display mb-2 text-3xl font-bold">
              Arghya Ghosh
            </h3>
            <p className="text-muted-foreground mb-4">
              Founder & Lead Developer
            </p>
            <p className="text-muted-foreground max-w-xl">
              Passionate about making programming education accessible to
              everyone. Building Javaistic to democratize Java learning
              worldwide.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://github.com/uiuxarghya"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://arghya.dev"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <GlobeIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold">
          Built With Modern Technology
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Next.js 15",
              description: "React framework for production",
            },
            { name: "TypeScript", description: "Type-safe JavaScript" },
            {
              name: "Tailwind CSS",
              description: "Utility-first CSS framework",
            },
            { name: "Fumadocs", description: "Documentation framework" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-card rounded-lg border p-4 text-center"
            >
              <h4 className="text-foreground mb-2 font-semibold">
                {tech.name}
              </h4>
              <p className="text-muted-foreground text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-900 to-sky-700 p-12 text-center text-white">
        <h2 className="font-funnel-display mb-4 text-3xl font-bold">
          Join Our Mission
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Help us make Java programming accessible to everyone. Whether
          you&apos;re a learner, educator, or developer, there&apos;s a place
          for you in our community.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/docs">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-100"
            >
              Start Learning Today
            </Button>
          </Link>
          <Link href="https://github.com/javaistic/javaistic" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <GitHubIcon className="mr-2 h-4 w-4" />
              Contribute
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
