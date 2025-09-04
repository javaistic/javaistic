"use client";
import { ANIMATION_VARIANTS } from "@/components/home/animation-variants";
import { GitHubIcon } from "@/components/icons";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import {
  BookOpen,
  Bug,
  CheckCircle,
  CircleDotIcon,
  Code,
  Coffee,
  ExternalLink,
  GitFork,
  Heart,
  Lightbulb,
  Loader2,
  ScrollText,
  Shield,
  Star,
  StarIcon,
  Terminal,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { easeOut, motion } from "motion/react";

const OpenSourcePage = () => {
  const { isDarkMode, mounted } = useDarkMode();
  const { stats, loading, error, lastUpdated } = useGitHubStats();

  const features = [
    {
      icon: (
        <BookOpen className="h-6 w-6 transition-colors duration-300 group-hover:text-blue-500" />
      ),
      title: "Interactive Learning",
      description:
        "Hands-on Java programming exercises with instant feedback and code execution.",
      color: "blue",
    },
    {
      icon: (
        <Zap className="h-6 w-6 transition-colors duration-300 group-hover:text-yellow-500" />
      ),
      title: "Modern Architecture",
      description:
        "Built with Next.js, TypeScript, and modern web technologies for optimal performance.",
      color: "yellow",
    },
    {
      icon: (
        <Users className="h-6 w-6 transition-colors duration-300 group-hover:text-green-500" />
      ),
      title: "Community Driven",
      description:
        "Open collaboration with developers worldwide contributing to Java education.",
      color: "green",
    },
    {
      icon: (
        <Shield className="h-6 w-6 transition-colors duration-300 group-hover:text-purple-500" />
      ),
      title: "Quality Focused",
      description:
        "Comprehensive testing, code reviews, and continuous integration workflows.",
      color: "purple",
    },
  ];

  const contributionAreas = [
    {
      icon: (
        <Code className="h-8 w-8 transition-colors duration-300 group-hover:text-blue-500" />
      ),
      title: "Code Contributions",
      description:
        "Help build new features, fix bugs, and improve the platform architecture.",
      skills: ["TypeScript", "Next.js"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <BookOpen className="h-8 w-8 transition-colors duration-300 group-hover:text-green-500" />
      ),
      title: "Educational Content",
      description:
        "Create Java tutorials, exercises, and learning materials for the community.",
      skills: ["Java", "Technical Writing", "Curriculum Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <Bug className="h-8 w-8 transition-colors duration-300 group-hover:text-red-500" />
      ),
      title: "Testing & QA",
      description:
        "Identify issues, test new features, and help maintain code quality.",
      skills: ["Testing", "Bug Reporting", "QA Processes"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: (
        <Lightbulb className="h-8 w-8 transition-colors duration-300 group-hover:text-yellow-500" />
      ),
      title: "Ideas & Design",
      description:
        "Contribute UX/UI improvements and innovative feature suggestions.",
      skills: ["UI/UX Design", "User Research", "Product Strategy"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const quickStats = [
    {
      label: "GitHub Stars",
      value: stats.stars,
      icon: (
        <Star className="h-5 w-5 transition-colors duration-300 group-hover:text-yellow-500" />
      ),
      isLoading: loading,
    },
    {
      label: "Forks",
      value: stats.forks,
      icon: (
        <GitFork className="h-5 w-5 transition-colors duration-300 group-hover:text-blue-500" />
      ),
      isLoading: loading,
    },
    {
      label: "Contributors",
      value: stats.contributors,
      icon: (
        <Users className="h-5 w-5 transition-colors duration-300 group-hover:text-green-500" />
      ),
      isLoading: loading,
    },
    {
      label: "Open Issues",
      value: stats.issues,
      icon: (
        <CircleDotIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-purple-500" />
      ),
      isLoading: loading,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Development theme indicator */}
      {process.env.NODE_ENV === "development" && mounted && (
        <div className="fixed top-4 right-4 z-50 rounded-lg bg-black/80 px-3 py-2 text-xs text-white">
          Theme: {isDarkMode ? "Dark" : "Light"}
        </div>
      )}

      <main className="relative mx-auto flex max-w-5xl flex-col">
        {/* Hero Section */}
        <motion.div
          className="flex flex-col items-center justify-center pt-36 pb-14"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-8"
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 0.6,
              rotate: { duration: 0.5 },
            }}
          >
            <svg
              className="mx-auto h-20 w-20 text-neutral-800 dark:text-white"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open Source Initiative</title>
              <path
                fill="currentColor"
                d="M11.959.447A11.938 11.938 0 000 12.407c0 5.576 3.874 10.097 7.783 11.114.193.05.392-.05.467-.234l2.771-6.822a.396.396 0 00-.246-.528C9.365 15.47 8.53 14.32 8.48 12.4c-.024-1.828 1.5-3.45 3.561-3.447 1.931.003 3.479 1.632 3.479 3.453 0 .966-.203 1.687-.575 2.238-.371.552-.922.951-1.695 1.239a.396.396 0 00-.23.515l2.685 6.903a.396.396 0 00.465.24C20.163 22.534 24 18.062 24 12.406 24 5.804 18.603.447 11.959.447zm0 .791c6.22 0 11.25 4.997 11.25 11.168 0 5.138-3.423 9.208-6.895 10.272L13.9 16.47c.703-.308 1.302-.79 1.702-1.384.477-.708.709-1.602.709-2.68 0-2.266-1.898-4.24-4.27-4.244-2.48-.004-4.382 1.976-4.352 4.25.023 1.995.934 3.492 2.451 4.13L7.648 22.66C4.251 21.592.791 17.458.791 12.406A11.13 11.13 0 0111.959 1.238zm10.617 20.149a1.03 1.03 0 000 2.058 1.03 1.03 0 000-2.058zm0 .162c.48 0 .865.388.865.867a.856.856 0 01-.271.623l-.172-.342a.847.847 0 00-.111-.178.263.263 0 00-.114-.084.301.301 0 00.17-.117.356.356 0 00.061-.21c0-.13-.038-.227-.113-.292-.076-.064-.192-.095-.346-.095h-.41v1.343h.181v-.568h.2c.072 0 .128.015.17.045a.48.48 0 01.129.18l.171.343.157.001a.878.878 0 01-.567.216.865.865 0 010-1.732zm-.26.322h.229c.088 0 .155.018.2.059.044.04.066.099.066.177 0 .079-.022.14-.067.18-.044.04-.111.06-.2.06h-.228z"
              />
            </svg>
          </motion.div>

          <motion.h1
            className="font-funnel-display text-foreground max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl"
            variants={ANIMATION_VARIANTS.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            Open Source Java Learning
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-6 max-w-4xl text-lg font-medium sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our community of developers building the future of Java
            programming education.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              variants={ANIMATION_VARIANTS.title}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="cursor-pointer rounded-lg py-6 text-lg font-semibold duration-200 ease-in-out active:scale-105 dark:hover:bg-white/80"
                aria-label="View Javaistic project on GitHub"
              >
                <GitHubIcon className="mr-2 h-4 w-4" />
                View on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.a>
            <motion.a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              variants={ANIMATION_VARIANTS.title}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer rounded-lg py-6 text-lg font-semibold duration-200 ease-in-out active:scale-105"
                aria-label="Star Javaistic repository"
              >
                <StarIcon className="mr-2 h-4 w-4" />
                Star on Github
              </Button>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="text-muted-foreground mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: <CheckCircle className="h-4 w-4" />,
                text: "100% Free & Open Source",
                link: null,
              },
              {
                icon: <Users className="h-4 w-4" />,
                text: "Community Driven",
                link: null,
              },
              {
                icon: <ScrollText className="h-4 w-4" />,
                text: "Dual Licensed (AGPL & CC)",
                link: "https://github.com/javaistic/javaistic/blob/main/LICENSE.md",
              },
            ].map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-500">{indicator.icon}</span>
                {indicator.link ? (
                  <a
                    href={indicator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span>{indicator.text}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span>{indicator.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Quick Stats */}
        <motion.section
          className="py-24"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-16 text-center">
            <h2 className="font-funnel-display text-foreground max-w-5xl text-3xl font-bold tracking-tight sm:text-4xl">
              Community Impact
            </h2>
            <p className="text-muted-foreground mt-6 text-lg font-medium sm:text-xl">
              Real numbers from our growing open-source ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="group bg-card border-border flex h-48 flex-col items-center justify-center rounded-2xl border p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <motion.div
                  className="text-muted-foreground mb-3 flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    stat.icon
                  )}
                </motion.div>
                <motion.div
                  className="text-foreground mb-1 text-6xl font-extrabold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {stat.isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                  ) : (
                    <AnimatedCounter value={stat.value} />
                  )}
                </motion.div>
                <motion.div
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {error && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2 flex items-center justify-center gap-2">
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Using cached data due to API limits
                </p>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Statistics refresh automatically every 4 hours
                {lastUpdated &&
                  ` • Last updated: ${lastUpdated.toLocaleTimeString()}`}
              </p>
            </motion.div>
          )}

          {!error && !loading && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="flex items-center justify-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <TrendingUp className="h-3 w-3" />
                Live data from GitHub • Auto-updates every 4 hours
                {lastUpdated &&
                  ` • Last updated: ${lastUpdated.toLocaleTimeString()}`}
              </p>
            </motion.div>
          )}
        </motion.section>
        {/* Why Open Source */}
        <motion.section
          className="py-24"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-16 text-center">
            <h2 className="font-funnel-display text-foreground max-w-5xl text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Open Source?
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-4xl text-lg font-medium sm:text-xl">
              Open source isn&apos;t just about free software—it&apos;s about
              building
              <span className="text-primary font-semibold">
                {" "}
                better solutions together
              </span>
              . Here&apos;s why our community-driven approach creates
              exceptional learning experiences.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card group border-border relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-muted rounded-lg p-3">{feature.icon}</div>
                </motion.div>
                <motion.h3
                  className="font-funnel-display text-foreground mb-3 text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Contribution Areas */}
        <motion.section
          className="py-24"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            variants={ANIMATION_VARIANTS.item}
          >
            <h2 className="font-funnel-display text-foreground max-w-5xl text-3xl font-bold tracking-tight sm:text-4xl">
              Ways to Contribute
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-4xl text-lg font-medium sm:text-xl">
              Every contribution matters, regardless of your background or
              experience level.
              <br />
              <span className="text-primary font-medium">
                Find your perfect role in our diverse community.
              </span>
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {contributionAreas.map((area, index) => (
              <motion.div
                key={index}
                className="group border-border bg-card rounded-2xl border p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-muted rounded-lg p-3">{area.icon}</div>
                </motion.div>
                <motion.h3
                  className="font-funnel-display text-foreground mb-3 text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  {area.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground mb-4 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {area.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {area.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs font-medium"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>{" "}
        {/* Getting Started */}
        <motion.section
          className="py-24"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-16 text-center"
            variants={ANIMATION_VARIANTS.item}
          >
            <h2 className="font-funnel-display text-foreground max-w-5xl text-3xl font-bold tracking-tight sm:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-4xl text-lg font-medium sm:text-xl">
              Ready to join our community? Follow these simple steps to start
              contributing to Javaistic and make an impact on programming
              education worldwide.
            </p>
          </motion.div>

          <motion.div
            className="border-border bg-card rounded-2xl border p-8 shadow-sm"
            variants={ANIMATION_VARIANTS.item}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group">
                <h3 className="font-funnel-display text-foreground mb-6 flex items-center text-xl font-semibold">
                  <Terminal className="text-muted-foreground mr-3 h-5 w-5 transition-colors duration-300 group-hover:text-blue-500" />
                  Quick Setup
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-funnel-display text-foreground font-medium">
                        Fork & Clone
                      </h4>
                      <p className="text-muted-foreground text-sm font-medium">
                        Fork the repository and clone it locally.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-funnel-display text-foreground font-medium">
                        Install Dependencies
                      </h4>
                      <p className="text-muted-foreground text-sm font-medium">
                        Run npm install to set up the project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-funnel-display text-foreground font-medium">
                        Start Contributing
                      </h4>
                      <p className="text-muted-foreground text-sm font-medium">
                        Explore issues and start making contributions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <h3 className="font-funnel-display text-foreground mb-6 flex items-center text-xl font-semibold">
                  <Coffee className="text-muted-foreground mr-3 h-5 w-5 transition-colors duration-300 group-hover:text-orange-500" />
                  Guidelines
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/javaistic/javaistic/blob/main/CODE_OF_CONDUCT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-muted hover:bg-muted/80 block rounded-md border p-4 transition-colors"
                  >
                    <h4 className="font-funnel-display text-foreground flex items-center font-medium">
                      Code of Conduct
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium">
                      Be respectful and collaborative in our community.
                    </p>
                  </a>

                  <a
                    href="https://github.com/javaistic/javaistic/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-muted hover:bg-muted/80 block rounded-md border p-4 transition-colors"
                  >
                    <h4 className="font-funnel-display text-foreground flex items-center font-medium">
                      Contributing Guide
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </h4>
                    <p className="text-muted-foreground text-sm font-medium">
                      Follow our guidelines for code style and PR process.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
        {/* Call to Action */}
        <motion.section
          className="py-24"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="bg-primary text-primary-foreground mx-auto rounded-2xl px-8 py-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -4,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
            >
              <Heart className="mx-auto h-12 w-12 fill-red-500 text-red-500" />
            </motion.div>

            <motion.h2
              className="font-funnel-display mb-4 text-2xl font-bold sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join the Community
            </motion.h2>
            <motion.p
              className="text-primary-foreground/80 mx-auto mb-8 max-w-4xl text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Help us build the future of Java programming education. Every
              contribution makes a difference.
            </motion.p>

            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="https://github.com/javaistic/javaistic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground hover:bg-background/90 flex items-center rounded-lg px-6 py-3 text-base font-medium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <GitHubIcon className="mr-2 h-4 w-4" />
                Start Contributing
              </motion.a>

              <motion.a
                href="https://github.com/javaistic/javaistic/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 flex items-center rounded-lg border px-6 py-3 text-base font-medium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="mr-2 h-4 w-4" />
                Show Support
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      {/* OSI Logo Disclaimer */}
      <div className="border-border bg-muted/20 border-t py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-center text-xs">
            * The OSI logo trademark is the trademark of Open Source Initiative
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenSourcePage;
