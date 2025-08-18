"use client";
import { motion, easeOut } from "framer-motion";
import {
  Github,
  GitFork,
  Star,
  Code,
  Users,
  Heart,
  ExternalLink,
  BookOpen,
  Zap,
  Shield,
  Coffee,
  Terminal,
  Bug,
  Lightbulb,
} from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

const OpenSourcePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;

        const hasDarkClass =
          document.documentElement.classList.contains("dark");

        const dataTheme = document.documentElement.getAttribute("data-theme");

        setIsDarkMode(
          systemPrefersDark || hasDarkClass || dataTheme === "dark",
        );
      }
    };

    checkDarkMode();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkDarkMode);

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => {
      mediaQuery.removeEventListener("change", checkDarkMode);
      observer.disconnect();
    };
  }, []);

  const particleConfig = isDarkMode
    ? {
        particleColors: ["#00FFFF", "#FF00FF", "#00BFFF"],
        particleCount: 500,
        particleSpread: 10,
        speed: 0.4,
        particleBaseSize: 100,
        moveParticlesOnHover: false,
        alphaParticles: false,
        disableRotation: true,
        particleHoverFactor: 2,
        sizeRandomness: 1.0,
        cameraDistance: 18,
      }
    : {
        particleColors: ["#1E3A8A", "#4B0082", "#4a4a4a"],
        particleCount: 500,
        particleSpread: 10,
        speed: 0.4,
        particleBaseSize: 100,
        moveParticlesOnHover: false,
        alphaParticles: false,
        disableRotation: true,
        particleHoverFactor: 1.5,
        sizeRandomness: 1.0,
        cameraDistance: 15,
      };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2, ease: easeOut },
    },
  };

  // Repository stats (you can replace these with real API data)
  const repoStats = {
    stars: "36",
    forks: "19",
    issues: "5",
    contributors: "15",
  };

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Interactive Learning",
      description:
        "Hands-on Java programming exercises with instant feedback and code execution.",
      color: "blue",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Modern Architecture",
      description:
        "Built with Next.js, TypeScript, and modern web technologies for optimal performance.",
      color: "yellow",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description:
        "Open collaboration with developers worldwide contributing to Java education.",
      color: "green",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Focused",
      description:
        "Comprehensive testing, code reviews, and continuous integration workflows.",
      color: "purple",
    },
  ];

  const contributionAreas = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Code Contributions",
      description:
        "Help build new features, fix bugs, and improve the platform architecture.",
      skills: ["TypeScript", "Next.js"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Educational Content",
      description:
        "Create Java tutorials, exercises, and learning materials for the community.",
      skills: ["Java", "Technical Writing", "Curriculum Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Testing & QA",
      description:
        "Identify issues, test new features, and help maintain code quality.",
      skills: ["Testing", "Bug Reporting", "QA Processes"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
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
      value: repoStats.stars,
      icon: <Star className="h-5 w-5" />,
    },
    {
      label: "Forks",
      value: repoStats.forks,
      icon: <GitFork className="h-5 w-5" />,
    },
    {
      label: "Contributors",
      value: repoStats.contributors,
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Open Issues",
      value: repoStats.issues,
      icon: <Bug className="h-5 w-5" />,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={particleConfig.particleColors}
          particleCount={particleConfig.particleCount}
          particleSpread={particleConfig.particleSpread}
          speed={particleConfig.speed}
          particleBaseSize={particleConfig.particleBaseSize}
          moveParticlesOnHover={particleConfig.moveParticlesOnHover}
          alphaParticles={particleConfig.alphaParticles}
          disableRotation={particleConfig.disableRotation}
          particleHoverFactor={particleConfig.particleHoverFactor}
          sizeRandomness={particleConfig.sizeRandomness}
          cameraDistance={particleConfig.cameraDistance}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="pt-20 pb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Github className="mx-auto h-20 w-20 text-gray-800 dark:text-white" />
          </motion.div>

          <motion.h1
            className="font-funnel-display max-w-6xl text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-[80px] dark:text-white"
            variants={itemVariants}
          >
            Open{" "}
            <span className="bg-gradient-to-br from-blue-400 via-purple-500 to-green-500 bg-clip-text text-transparent">
              Source{" "}
            </span>
            Java Learning
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto mt-6 max-w-4xl text-lg sm:text-xl"
            variants={itemVariants}
          >
            Javaistic is a free, open-source platform that makes Java
            programming accessible to everyone. Join our community of developers
            building the future of programming education.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </motion.a>

            <motion.a
              href="https://github.com/javaistic/javaistic/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-gray-900 px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitFork className="mr-2 h-5 w-5" />
              Fork Repository
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div className="mb-3 flex justify-center text-blue-500 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Open Source */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Why Open Source?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              We believe that education should be free, transparent, and
              collaborative. Open source enables us to build something truly
              special together.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div
                  className={`h-12 w-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color === "blue" ? "cyan" : feature.color === "yellow" ? "orange" : feature.color === "green" ? "emerald" : "pink"}-500 mb-4 flex items-center justify-center rounded-xl text-white`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contribution Areas */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              How You Can Contribute
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Whether you&apos;re a developer, educator, designer, or enthusiast,
              there&apos;s a place for you in our community. Here&apos;s how you can help
              shape the future of Java education.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {contributionAreas.map((area, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div
                  className={`h-16 w-16 bg-gradient-to-br ${area.color} mb-6 flex items-center justify-center rounded-2xl text-white`}
                >
                  {area.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Getting Started */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Getting Started
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Ready to contribute? Here&apos;s your quick start guide to joining the
              Javaistic community.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
            variants={itemVariants}
          >
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Terminal className="mr-3 h-6 w-6 text-green-500" />
                  Quick Setup
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Fork the Repository
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Click the fork button on our GitHub repository to create
                        your own copy.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Clone Locally
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <code className="rounded bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700">
                          git clone https://github.com/javaistic/javaistic.git
                        </code>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start rounded-xl bg-gray-50 p-4 dark:bg-gray-800/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 font-bold text-white">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Install Dependencies
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <code className="rounded bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700">
                          npm install && npm run dev
                        </code>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Coffee className="mr-3 h-6 w-6 text-orange-500" />
                  Community Guidelines
                </h3>
                <div className="space-y-4">
                  <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/30 dark:bg-blue-500/20">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      📋 Read Our Contributing Guide
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Check our CONTRIBUTING.md for detailed guidelines on code
                      style, commit messages, and pull request process.
                    </p>
                  </div>

                  <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-500/30 dark:bg-green-500/20">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      🤝 Join Our Discord
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Connect with other contributors, ask questions, and
                      collaborate on new features.
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-500/30 dark:bg-purple-500/20">
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      🎯 Pick Your First Issue
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Look for issues labeled &quot;good first issue&quot; or &quot;help
                      wanted&quot; to get started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="pb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className={`mx-auto max-w-5xl rounded-3xl ${
              isDarkMode
                ? "border border-purple-400/30 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
                : "border border-purple-300 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600"
            } px-8 py-16 text-center text-white shadow-2xl transition-colors duration-300`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            >
              <Heart className="mx-auto h-16 w-16 text-red-400" />
            </motion.div>

            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Join the Movement
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">
              Help us democratize Java programming education. Together, we can
              build something that empowers millions of learners worldwide to
              master programming.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="https://github.com/javaistic/javaistic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg transition-colors duration-200 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" />
                Contribute Now
              </motion.a>

              <motion.a
                href="https://github.com/javaistic/javaistic/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="mr-2 h-5 w-5" />
                Star on GitHub
              </motion.a>
            </div>

            <motion.div
              className="mt-12 text-sm text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p>Made with ❤️ by developers, for developers</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default OpenSourcePage;
