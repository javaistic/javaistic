import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { AwardIcon, GlobeIcon, HeartIcon, UsersIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Javaistic - Free Java Programming Education Platform",
  description:
    "Learn about Javaistic's mission, values, roadmap, and community. Discover our free Java learning platform, get answers to FAQs, and find ways to contribute to the project.",
  keywords: [
    "Java programming",
    "learn Java",
    "Java tutorials",
    "free programming courses",
    "Java education",
    "coding bootcamp",
    "Java development",
  ],
  openGraph: {
    title: "About Javaistic - Free Java Programming Education Platform",
    description:
      "Learn about Javaistic's mission, values, roadmap, and community. Discover our free Java learning platform, get answers to FAQs, and find ways to contribute to the project.",
    images: [
      {
        url: "https://javaistic.vercel.app/og.png",
      },
    ],
  },
};

export default async function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl py-24">
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
      <div className="mb-20 flex flex-col-reverse items-center sm:flex-row">
        <div className="sm:w-2/3 sm:pr-10">
          <h2 className="font-funnel-display text-foreground mb-6 text-3xl font-bold">
            Our Mission
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Javaistic was born from a simple belief: everyone deserves access to
            high-quality programming education, regardless of background or
            budget. We&apos;re building a comprehensive, free platform that
            makes learning Java intuitive and effective for all skill levels.
          </p>
          <p className="text-muted-foreground mb-6 text-lg">
            Our platform bridges complex Java concepts with real-world
            application through interactive tutorials, hands-on exercises, and
            structured learning paths. Whether you're a complete beginner or
            experienced developer, our community-driven approach ensures
            accessible, practical learning for everyone.
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
        <div className="mb-8 sm:mb-0 sm:w-1/3">
          <img
            src="/mission.svg"
            alt="Javaistic Learning Platform - Free Java Programming Education"
            className="w-full rounded-full border bg-white shadow-lg dark:bg-white"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          Our Values
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-blue-50/60 p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-700 shadow-lg shadow-neutral-500/25">
                <AwardIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-foreground mb-4 text-xl font-bold">
                Quality Education
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece of content is carefully crafted, reviewed, and
                tested to ensure the highest educational standards.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-indigo-50/60 p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg shadow-indigo-500/25">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-foreground mb-4 text-xl font-bold">
                Always Free
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Education should be accessible to everyone. Our platform is
                completely free with no hidden costs or premium tiers.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-sky-50/60 p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-sky-700 shadow-lg shadow-sky-500/25">
                <UsersIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-foreground mb-4 text-xl font-bold">
                Community Driven
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built by the community, for the community. We welcome
                contributions and feedback from learners and educators alike.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative mb-20 overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-indigo-50/40 p-10 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-neutral-500/5"></div>
        <div className="relative">
          <h2 className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold">
            Impact & Growth
          </h2>
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="group">
              <div className="mb-3 bg-gradient-to-br from-neutral-600 to-neutral-700 bg-clip-text text-5xl font-bold text-transparent">
                100%
              </div>
              <div className="text-muted-foreground font-medium">
                Open Source
              </div>
            </div>
            <div className="group">
              <div className="mb-3 bg-gradient-to-br from-indigo-600 to-indigo-700 bg-clip-text text-5xl font-bold text-transparent">
                30+
              </div>
              <div className="text-muted-foreground font-medium">
                Java Programming Topics
              </div>
            </div>
            <div className="group">
              <div className="mb-3 bg-gradient-to-br from-sky-600 to-sky-700 bg-clip-text text-5xl font-bold text-transparent">
                22+
              </div>
              <div className="text-muted-foreground font-medium">
                Java Code Examples
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          Our Roadmap
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-green-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-foreground text-lg font-bold">
                    Completed
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Comprehensive Java tutorials and documentation</li>
                  <li>• Interactive code playground and examples</li>
                  <li>• Open source platform with community contributions</li>
                  <li>• Mobile-responsive design and accessibility</li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-blue-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                    <span className="text-sm font-bold">🚧</span>
                  </div>
                  <h3 className="text-foreground text-lg font-bold">
                    In Progress
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Advanced Java frameworks and libraries coverage</li>
                  <li>• Video tutorials and interactive screencasts</li>
                  <li>• Certification and skill assessment tools</li>
                  <li>• Multi-language documentation support</li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-purple-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 md:col-span-2 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
                    <span className="text-sm font-bold">🔮</span>
                  </div>
                  <h3 className="text-foreground text-lg font-bold">
                    Coming Soon
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Enhanced learning analytics and progress tracking</li>
                    <li>• Collaborative coding features</li>
                    <li>• Mobile-optimized experience improvements</li>
                    <li>• Integration with popular development tools</li>
                  </ul>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Advanced project templates and boilerplates</li>
                    <li>• Career guidance and interview preparation</li>
                    <li>• Offline learning capabilities</li>
                    <li>• Community events and workshops</li>
                  </ul>
                </div>
              </div>
            </div>
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
              everyone. Building Javaistic to democratize learning worldwide
              through comprehensive tutorials and community-driven content.
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

      {/* What We Offer */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          What We Offer
        </h2>
        <div className="mx-auto max-w-4xl">
          <p className="text-muted-foreground mb-8 text-center text-lg">
            Everything you need to master Java programming, completely free.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-blue-50/60 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  Comprehensive Tutorials
                </h3>
                <p className="text-muted-foreground text-sm">
                  Step-by-step guides from Java basics to advanced frameworks,
                  with practical examples and real-world applications.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-green-50/60 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/25">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  Interactive Code Playground
                </h3>
                <p className="text-muted-foreground text-sm">
                  Practice coding directly in your browser with instant
                  feedback, error highlighting, and guided exercises.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-purple-50/60 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 md:col-span-2 lg:col-span-1 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  Community Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  Join thousands of learners worldwide. Get help, share
                  knowledge, and grow together in our supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-blue-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <h3 className="text-foreground mb-3 text-lg font-bold">
                Is Javaistic really free?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! Javaistic is completely free and always will be. We believe
                quality programming education should be accessible to everyone,
                regardless of their financial situation. No premium tiers, no
                hidden costs, no paywalls.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-green-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <h3 className="text-foreground mb-3 text-lg font-bold">
                Do I need prior programming experience?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Not at all! Our tutorials are designed for complete beginners.
                We start with the absolute basics and gradually build up to
                advanced concepts. Whether you're a student, career changer, or
                just curious about programming, we have content for you.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-orange-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <h3 className="text-foreground mb-3 text-lg font-bold">
                What makes Javaistic different from other learning platforms?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Javaistic is specifically focused on Java programming with
                hands-on, practical examples. Unlike generic coding platforms,
                we provide deep, comprehensive Java education that's completely
                free and community-driven. Our content is created by experienced
                Java developers for real-world application.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-purple-50/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <h3 className="text-foreground mb-3 text-lg font-bold">
                How can I contribute to Javaistic?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We welcome contributions from everyone! You can help by writing
                tutorials, fixing bugs, improving documentation, translating
                content, or spreading the word. Visit our GitHub repository to
                see open issues, submit pull requests, or join our contributor
                community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Support */}
      <div className="mb-20">
        <h2 className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-4xl">
          <p className="text-muted-foreground mb-8 text-center text-lg">
            Have questions, feedback, or want to contribute? We'd love to hear
            from you!
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-red-50/60 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/25">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  Community Support
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Join our Discord community for help, discussions, and
                  networking with fellow learners.
                </p>
                <Link href="https://discord.gg/javaistic" target="_blank">
                  <Button variant="outline" size="sm" className="w-full">
                    Join Discord
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-blue-50/60 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  Documentation
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Browse our comprehensive documentation and tutorials to find
                  answers to common questions.
                </p>
                <Link href="/docs">
                  <Button variant="outline" size="sm" className="w-full">
                    View Docs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/80 to-green-50/60 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/40 md:col-span-2 lg:col-span-1 dark:border-neutral-700/60 dark:from-neutral-800/50 dark:to-neutral-900/60 dark:hover:shadow-neutral-700/40">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-neutral-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/25">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground mb-2 text-lg font-bold">
                  Email Support
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  For technical issues, partnerships, or general inquiries,
                  reach out to our team.
                </p>
                <Link href="mailto:support@javaistic.com">
                  <Button variant="outline" size="sm" className="w-full">
                    Send Email
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-900 to-sky-700 p-12 text-center text-white">
        <h2 className="font-funnel-display mb-4 text-3xl font-bold">
          Join Our Mission
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Help us make programming accessible to everyone. Whether you&apos;re a
          learner, educator, or developer - there&apos;s a place for you in our
          community.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/docs">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-100"
            >
              Start Learning Java Today
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
