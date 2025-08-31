"use client";

import { Badge, CTASection, FAQSection } from "@/components/home";
import { ANIMATION_VARIANTS } from "@/components/home/animation-variants";
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  AwardIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CodeIcon,
  UsersIcon as CommunityIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartIcon,
  StarIcon,
  UsersIcon
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

// Reusable SectionBadge component
const SectionBadge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
    variants={ANIMATION_VARIANTS.item}
  >
    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-current opacity-60" />
    {children}
  </motion.div>
);

export default function AboutPage() {
  return (
    <motion.div
      className="mx-auto max-w-5xl py-24"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="relative my-12 text-center"
        variants={ANIMATION_VARIANTS.container}
      >
        <motion.div
          className="mx-auto max-w-4xl"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.h1
            className="font-funnel-display bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300"
            variants={ANIMATION_VARIANTS.title}
          >
            About{" "}
            <span className="bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Javaistic
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl"
            variants={ANIMATION_VARIANTS.item}
          >
            We&apos;re on a mission to make Java programming{" "}
            <span className="text-foreground font-semibold">accessible</span>,{" "}
            <span className="text-foreground font-semibold">enjoyable</span>,
            and{" "}
            <span className="text-foreground font-semibold">
              completely free
            </span>{" "}
            for learners worldwide.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
            variants={ANIMATION_VARIANTS.container}
          >
            <Badge
              icon={CheckCircleIcon}
              text="100% Free & Open Source"
              colorClass="border-green-500/20 bg-green-50 text-green-700 hover:border-green-500/40 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
            />

            <Badge
              icon={CommunityIcon}
              text="Community Driven"
              colorClass="border-blue-500/20 bg-blue-50 text-blue-700 hover:border-blue-500/40 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400"
            />

            <Badge
              icon={StarIcon}
              text="Quality First"
              colorClass="border-purple-500/20 bg-purple-50 text-purple-700 hover:border-purple-500/40 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="mb-32 grid gap-16 lg:grid-cols-3 lg:items-center"
        variants={ANIMATION_VARIANTS.container}
      >
        <motion.div
          className="col-span-1 sm:col-span-2"
          variants={ANIMATION_VARIANTS.textFromRight}
        >
          <SectionBadge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
            Our Mission
          </SectionBadge>

          <motion.h2
            className="font-funnel-display text-foreground mt-6 text-3xl leading-tight font-bold sm:text-4xl"
            variants={ANIMATION_VARIANTS.title}
          >
            Transforming Java Education for{" "}
            <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </motion.h2>

          <div className="mt-8 space-y-6">
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              variants={ANIMATION_VARIANTS.item}
            >
              Javaistic was born from a simple belief: everyone deserves access
              to high-quality programming education, regardless of background or
              budget. We&apos;re building a comprehensive, free platform that
              makes learning Java intuitive and effective for all skill levels.
            </motion.p>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              variants={ANIMATION_VARIANTS.item}
            >
              Our platform bridges complex Java concepts with real-world
              application through interactive tutorials, hands-on exercises, and
              structured learning paths. Whether you're a complete beginner or
              experienced developer, our community-driven approach ensures
              accessible, practical learning for everyone.
            </motion.p>
          </div>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={ANIMATION_VARIANTS.container}
          >
            <motion.div variants={ANIMATION_VARIANTS.item}>
              <Link href="/docs">
                <Button
                  size="lg"
                  className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl sm:w-auto"
                >
                  <GraduationCapIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Start Learning Java
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={ANIMATION_VARIANTS.item}>
              <Link
                href="https://github.com/javaistic/javaistic"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full border-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-neutral-50 hover:to-neutral-100 sm:w-auto dark:hover:from-neutral-800 dark:hover:to-neutral-700"
                >
                  <GitHubIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View on GitHub
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center col-span-1"
          variants={ANIMATION_VARIANTS.imageFromLeft}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/mission.svg"
              alt="Javaistic Learning Platform - Free Java Programming Education"
              className="relative z-10 h-80 w-80 aspect-square rounded-full border-2 border-white/20 bg-white object-cover shadow-2xl transition-transform duration-300 dark:border-neutral-800 dark:bg-neutral-900"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section className="mb-32" variants={ANIMATION_VARIANTS.container}>
        <motion.div
          className="text-center"
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionBadge className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400">
            Our Core Values
          </SectionBadge>

          <motion.h2
            className="font-funnel-display text-foreground mt-6 text-3xl leading-tight font-bold sm:text-4xl"
            variants={ANIMATION_VARIANTS.title}
          >
            What Drives Us{" "}
            <span className="bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Forward
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            variants={ANIMATION_VARIANTS.item}
          >
            Our values shape every decision we make and guide us in building the
            best possible learning experience for our community.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 p-8 text-center shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-blue-950/20 dark:to-indigo-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <AwardIcon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-foreground mb-4 text-xl font-bold">
                Quality Education
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Every piece of content is carefully crafted, reviewed, and
                tested to ensure the highest educational standards and
                real-world relevance.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-red-50/50 to-pink-50/50 p-8 text-center shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-red-950/20 dark:to-pink-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <HeartIcon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-foreground mb-4 text-xl font-bold">
                Always Free
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Education should be accessible to everyone. Our platform is
                completely free with no hidden costs, premium tiers, or
                paywalls.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 p-8 text-center shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-green-950/20 dark:to-emerald-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <UsersIcon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-foreground mb-4 text-xl font-bold">
                Community Driven
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Built by the community, for the community. We welcome
                contributions and feedback from learners and educators
                worldwide.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative mb-32 overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/50 p-12 shadow-xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-slate-950/50 dark:to-blue-950/50"
        variants={ANIMATION_VARIANTS.container}
        whileHover={{ scale: 1.01 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-500/5 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-indigo-500/5 to-transparent" />
        </div>

        <div className="relative">
          <motion.div
            className="text-center"
            variants={ANIMATION_VARIANTS.container}
          >
            <SectionBadge className="bg-slate-50 text-slate-700 dark:bg-slate-900/20 dark:text-slate-400">
              Platform Impact
            </SectionBadge>

            <motion.h2
              className="font-funnel-display text-foreground mt-6 text-3xl leading-tight font-bold sm:text-4xl"
              variants={ANIMATION_VARIANTS.title}
            >
              Growing Impact &{" "}
              <span className="bg-gradient-to-br from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Community
              </span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
              variants={ANIMATION_VARIANTS.item}
            >
              Our commitment to free, quality education continues to grow and
              impact learners worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-16 grid gap-12 text-center md:grid-cols-3"
            variants={ANIMATION_VARIANTS.container}
          >
            <motion.div
              className="group relative"
              variants={ANIMATION_VARIANTS.item}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative rounded-2xl p-6">
                <motion.div
                  className="mb-4 bg-gradient-to-br from-emerald-600 to-green-700 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl"
                  whileHover={{ scale: 1.1 }}
                >
                  100%
                </motion.div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Open Source
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Completely transparent and community-driven development
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              variants={ANIMATION_VARIANTS.item}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative rounded-2xl p-6">
                <motion.div
                  className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl"
                  whileHover={{ scale: 1.1 }}
                >
                  30+
                </motion.div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Programming Topics
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive coverage from basics to advanced concepts
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              variants={ANIMATION_VARIANTS.item}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative rounded-2xl p-6">
                <motion.div
                  className="mb-4 bg-gradient-to-br from-purple-600 to-pink-700 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl"
                  whileHover={{ scale: 1.1 }}
                >
                  22+
                </motion.div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  Code Examples
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Practical, real-world examples for hands-on learning
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section className="mb-32" variants={ANIMATION_VARIANTS.container}>
        <motion.div
          className="text-center"
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionBadge className="bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400">
            Our Team
          </SectionBadge>

          <motion.h2
            className="font-funnel-display text-foreground mt-6 text-3xl leading-tight font-bold sm:text-4xl"
            variants={ANIMATION_VARIANTS.title}
          >
            Meet the{" "}
            <span className="bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            variants={ANIMATION_VARIANTS.item}
          >
            Passionate about advancing education and building tools that empower
            learners worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-md"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-orange-950/20 dark:to-red-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="relative mx-auto mb-6 h-32 w-32"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src="https://github.com/uiuxarghya.png"
                  alt="Arghya Ghosh - Founder & Lead Developer"
                  className="h-full w-full rounded-full object-cover shadow-lg ring-4 ring-orange-500/20"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>{" "}
              <h3 className="text-foreground font-funnel-display mb-2 text-2xl font-bold">
                Arghya Ghosh
              </h3>
              <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1 text-sm font-medium text-orange-800 dark:from-orange-900/30 dark:to-red-900/30 dark:text-orange-300">
                Founder & Lead Developer
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Passionate about making programming education accessible to
                everyone. Building Javaistic to transform learning worldwide
                through comprehensive tutorials and community-driven content.
              </p>
              <div className="flex justify-center space-x-6">
                <Link
                  href="https://github.com/uiuxarghya"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground group/link transition-colors"
                >
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-neutral-100 to-neutral-200 shadow-lg transition-all group-hover/link:shadow-xl dark:from-neutral-800 dark:to-neutral-700"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </motion.div>
                </Link>

                <Link
                  href="https://arghya.dev"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground group/link transition-colors"
                >
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg transition-all group-hover/link:shadow-xl dark:from-blue-900/50 dark:to-indigo-800/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <GlobeIcon className="h-5 w-5" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What We Offer */}
      <motion.section className="mb-32" variants={ANIMATION_VARIANTS.container}>
        <motion.div
          className="text-center"
          variants={ANIMATION_VARIANTS.container}
        >
          <SectionBadge className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
            Our Offering
          </SectionBadge>

          <motion.h2
            className="font-funnel-display text-foreground mt-6 text-3xl leading-tight font-bold sm:text-4xl"
            variants={ANIMATION_VARIANTS.title}
          >
            What We{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Provide
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            variants={ANIMATION_VARIANTS.item}
          >
            Everything you need to master Java programming, completely free and
            accessible to all learners worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-blue-950/20 dark:to-indigo-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <BookOpenIcon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-foreground font-funnel-display mb-4 text-xl font-bold">
                Comprehensive Tutorials
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Step-by-step guides from Java basics to advanced frameworks,
                with practical examples and real-world applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl dark:border-neutral-700/60 dark:from-neutral-900 dark:via-green-950/20 dark:to-emerald-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <CodeIcon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-foreground font-funnel-display mb-4 text-xl font-bold">
                Interactive Code Playground
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Practice coding directly in your browser with instant feedback,
                error highlighting, and guided exercises.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl md:col-span-2 lg:col-span-1 dark:border-neutral-700/60 dark:from-neutral-900 dark:via-purple-950/20 dark:to-pink-950/20"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <UsersIcon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-foreground font-funnel-display mb-4 text-xl font-bold">
                Community Support
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Join thousands of learners worldwide. Get help, share knowledge,
                and grow together in our supportive community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <CTASection />
    </motion.div>
  );
}
