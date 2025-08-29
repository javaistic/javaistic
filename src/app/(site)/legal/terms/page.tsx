"use client";
import { motion, easeOut } from "motion/react";
import {
  Shield,
  Users,
  Code,
  FileText,
  AlertTriangle,
  Scale,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

const TermsOfServicePage = () => {
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
        // Dark mode properties - enhanced for better visibility
        particleColors: ["#00FFFF", " #FF00FF", "#00BFFF"],
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
        // Light mode properties
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

  const sectionVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const tableOfContents = [
    {
      title: "Acceptance of Terms",
      url: "#acceptance",
      icon: <Scale className="h-4 w-4" />,
    },
    {
      title: "Description of Service",
      url: "#service-description",
      icon: <Code className="h-4 w-4" />,
    },
    {
      title: "User Accounts",
      url: "#user-accounts",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Acceptable Use",
      url: "#acceptable-use",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: "Content and Intellectual Property",
      url: "#content-ip",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Community Guidelines",
      url: "#community-guidelines",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Privacy and Data",
      url: "#privacy-data",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: "Disclaimers and Limitations",
      url: "#disclaimers",
      icon: <AlertTriangle className="h-4 w-4" />,
    },
    {
      title: "Termination",
      url: "#termination",
      icon: <AlertTriangle className="h-4 w-4" />,
    },
    {
      title: "Changes to Terms",
      url: "#changes",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Contact Information",
      url: "#contact",
      icon: <Mail className="h-4 w-4" />,
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
        {/* Header */}
        <motion.div
          className="pt-20 pb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-funnel-display max-w-6xl text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-[80px] dark:text-white"
            variants={titleVariants}
          >
            Terms of{" "}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Service{" "}
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-6 max-w-6xl text-lg sm:text-xl"
            variants={itemVariants}
          >
            These terms govern your use of Javaistic, our free and open-source
            Java programming learning platform.
          </motion.p>

          <motion.div
            className={`mt-8 text-sm ${
              isDarkMode ? "text-neutral-400" : "text-neutral-500"
            } space-y-1 transition-colors duration-300`}
            variants={itemVariants}
          >
            <p>
              <span className="font-semibold">Effective Date:</span> August 2025
            </p>
            <p>
              <span className="font-semibold">Last Updated:</span> August 2025
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Table of Contents */}
          <motion.div
            className="lg:w-1/4"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-8">
              <motion.div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-neutral-700/50 dark:bg-neutral-900/70">
                <h3 className="mb-6 text-lg font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.url}
                      className="group flex items-center rounded-xl p-3 text-sm text-neutral-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-neutral-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                    >
                      <span className="mr-3 text-blue-500 transition-colors group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300">
                        {item.icon}
                      </span>
                      {item.title}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-3/4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-neutral-700/50 dark:bg-neutral-900/70">
              {/* Introduction */}
              <motion.div className="mb-12" variants={itemVariants}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Welcome to Javaistic! These Terms of Service govern your use
                  of our free and open-source Java programming learning
                  platform. By accessing or using Javaistic, you agree to be
                  bound by these Terms and our Privacy Policy.
                </p>
              </motion.div>

              {/* Acceptance of Terms */}
              <motion.section
                id="acceptance"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Acceptance of Terms
                  </h2>
                </div>

                <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 transition-colors duration-300 dark:border-blue-500/30 dark:from-blue-500/20 dark:to-indigo-500/20 dark:backdrop-blur-sm">
                  <p className="mb-4 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    By accessing, browsing, or using Javaistic, you acknowledge
                    that you have read, understood, and agree to be bound by
                    these Terms. If you do not agree with any part of these
                    Terms, you may not use our platform.
                  </p>
                  <p className="text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    These Terms constitute a legally binding agreement between
                    you and Javaistic. If you are using our platform on behalf
                    of an organization, you represent that you have the
                    authority to bind that organization to these Terms.
                  </p>
                </div>
              </motion.section>

              {/* Description of Service */}
              <motion.section
                id="service-description"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-600">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Description of Service
                  </h2>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 transition-colors duration-300 dark:border-green-500/30 dark:from-green-500/20 dark:to-emerald-500/20 dark:backdrop-blur-sm"
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      Educational Platform
                    </h3>
                    <p className="mb-4 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                      Javaistic is a free, interactive learning platform
                      designed to help users master Java programming
                      efficiently. Our platform provides:
                    </p>
                    <ul className="space-y-2 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
                        Interactive Java programming lessons and tutorials
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
                        Coding exercises, quizzes, and practical projects
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
                        Community forums and discussion spaces
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
                        Progress tracking and learning analytics
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
                        Code compilation and execution environments
                      </li>
                    </ul>
                  </motion.div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 transition-colors duration-300 dark:border-purple-500/30 dark:from-purple-500/20 dark:to-pink-500/20 dark:backdrop-blur-sm"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        Open Source Nature
                      </h3>
                      <p className="text-sm text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                        Javaistic is an open-source project, meaning our source
                        code is publicly available and the community can
                        contribute to its development. We are committed to
                        transparency and collaborative improvement.
                      </p>
                    </motion.div>

                    <motion.div
                      className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-colors duration-300 dark:border-blue-500/30 dark:from-blue-500/20 dark:to-cyan-500/20 dark:backdrop-blur-sm"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        Free Service
                      </h3>
                      <p className="text-sm text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                        Our core educational content and features are provided
                        free of charge. We believe in making quality programming
                        education accessible to everyone, regardless of economic
                        circumstances.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              {/* User Accounts */}
              <motion.section
                id="user-accounts"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    User Accounts
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 p-6 transition-colors duration-300 dark:border-orange-500/30 dark:from-orange-500/20 dark:to-red-500/20 dark:backdrop-blur-sm">
                    <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      Account Creation
                    </h3>
                    <ul className="space-y-3 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500 dark:bg-orange-400"></span>
                        You must provide accurate and complete information when
                        creating an account
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500 dark:bg-orange-400"></span>
                        You are responsible for maintaining the security of your
                        account credentials
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500 dark:bg-orange-400"></span>
                        You must notify us immediately of any unauthorized use
                        of your account
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500 dark:bg-orange-400"></span>
                        One person may not maintain multiple accounts without
                        our permission
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6 transition-colors duration-300 dark:border-purple-500/30 dark:from-purple-500/20 dark:to-pink-500/20 dark:backdrop-blur-sm">
                    <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      Account Responsibility
                    </h3>
                    <ul className="space-y-3 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                        You are fully responsible for all activities that occur
                        under your account
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                        You must not share your account credentials with others
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                        You must keep your contact information up to date
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                        You may delete your account at any time through your
                        account settings
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Acceptable Use */}
              <motion.section
                id="acceptable-use"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Acceptable Use
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6 transition-colors duration-300 dark:border-green-500/30 dark:from-green-500/20 dark:to-emerald-500/20 dark:backdrop-blur-sm">
                    <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      Permitted Uses
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Learning Java programming through our educational content",
                        "Participating constructively in community discussions",
                        "Sharing code examples and solutions for educational purposes",
                        "Contributing to the open-source project through proper channels",
                        "Using our platform for personal or educational projects",
                      ].map((use, index) => (
                        <div key={index} className="flex items-start">
                          <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400"></span>
                          <span className="text-sm text-neutral-600 dark:text-neutral-300">
                            {use}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-pink-50 p-6 transition-colors duration-300 dark:border-red-500/30 dark:from-red-500/20 dark:to-pink-500/20 dark:backdrop-blur-sm">
                    <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      Prohibited Uses
                    </h3>
                    <p className="mb-4 text-neutral-600 dark:text-neutral-300">
                      You may not use Javaistic to:
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Violate any applicable laws or regulations",
                        "Harass, abuse, or harm other users",
                        "Post spam, malicious code, or inappropriate content",
                        "Attempt to gain unauthorized access to our systems",
                        "Interfere with or disrupt the platform's functionality",
                        "Use automated tools to scrape or download content without permission",
                        "Impersonate others or provide false information",
                        "Use the platform for commercial purposes without authorization",
                      ].map((prohibition, index) => (
                        <div key={index} className="flex items-start">
                          <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 dark:bg-red-400"></span>
                          <span className="text-sm text-neutral-600 dark:text-neutral-300">
                            {prohibition}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Content and IP */}
              <motion.section
                id="content-ip"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Content and Intellectual Property
                  </h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Javaistic Content",
                      content:
                        "Our educational content, including lessons, exercises, and platform features, is protected by intellectual property laws. As an open-source project, much of our content is available under open-source licenses, but you should respect the specific license terms.",
                      color: "cyan",
                    },
                    {
                      title: "User-Generated Content",
                      content: [
                        "You retain ownership of the original content you create and post",
                        "By posting content, you grant us a license to use, display, and distribute it on our platform",
                        "You represent that you have the right to post the content you share",
                        "You may not post content that infringes on others' intellectual property rights",
                      ],
                      color: "blue",
                    },
                    {
                      title: "Code and Solutions",
                      content: [
                        "Code examples and solutions you post may be used by other learners for educational purposes",
                        "We encourage sharing knowledge while respecting academic integrity",
                        "Do not post solutions to ongoing assessments or assignments from educational institutions",
                      ],
                      color: "purple",
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r from-${section.color}-50 to-${section.color === "cyan" ? "blue" : section.color === "blue" ? "indigo" : "pink"}-50 dark:from-${section.color}-500/20 dark:to-${section.color === "cyan" ? "blue" : section.color === "blue" ? "indigo" : "pink"}-500/20 border border-${section.color}-200 dark:border-${section.color}-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm`}
                    >
                      <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        {section.title}
                      </h3>
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-2">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span
                                className={`h-2 w-2 bg-${section.color}-500 dark:bg-${section.color}-400 mt-2 mr-3 flex-shrink-0 rounded-full`}
                              ></span>
                              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-neutral-600 dark:text-neutral-300">
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Community Guidelines */}
              <motion.section
                id="community-guidelines"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Community Guidelines
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    <motion.div
                      className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-6 transition-colors duration-300 dark:border-emerald-500/30 dark:from-emerald-500/20 dark:to-green-500/20 dark:backdrop-blur-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        Respectful Interaction
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                        <li>
                          • Treat all community members with respect and
                          kindness
                        </li>
                        <li>
                          • Provide constructive feedback and assistance to
                          fellow learners
                        </li>
                        <li>• Avoid discriminatory language or behavior</li>
                        <li>
                          • Respect different skill levels and learning paces
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-colors duration-300 dark:border-blue-500/30 dark:from-blue-500/20 dark:to-cyan-500/20 dark:backdrop-blur-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        Quality Contributions
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                        <li>
                          • Post relevant, helpful, and accurate information
                        </li>
                        <li>
                          • Use clear and descriptive titles for forum posts
                        </li>
                        <li>
                          • Search existing discussions before posting
                          duplicates
                        </li>
                        <li>
                          • Provide context and details when asking for help
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 transition-colors duration-300 dark:border-purple-500/30 dark:from-purple-500/20 dark:to-pink-500/20 dark:backdrop-blur-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="mb-4 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        Moderation
                      </h3>
                      <ul className="space-y-2 text-sm text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                        <li>
                          • We reserve the right to moderate or remove content
                        </li>
                        <li>
                          • Repeated violations may result in account suspension
                        </li>
                        <li>
                          • Appeals for moderation decisions can be submitted
                        </li>
                        <li>• Community reporting helps maintain quality</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              {/* Privacy and Data */}
              <motion.section
                id="privacy-data"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Privacy and Data
                  </h2>
                </div>

                <div className="rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 transition-colors duration-300 dark:border-indigo-500/30 dark:from-indigo-500/20 dark:to-purple-500/20 dark:backdrop-blur-sm">
                  <p className="mb-4 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    Your privacy is important to us. Our Privacy Policy, which
                    is incorporated into these Terms by reference, explains how
                    we collect, use, and protect your personal information.
                  </p>
                  <ul className="space-y-3 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                      We collect only the information necessary to provide our
                      educational services
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                      We do not sell your personal information to third parties
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                      You have rights regarding your personal data as outlined
                      in our Privacy Policy
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                      We implement security measures to protect your information
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* Disclaimers and Limitations */}
              <motion.section
                id="disclaimers"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Disclaimers and Limitations
                  </h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Educational Purpose",
                      content:
                        "Javaistic is designed for educational purposes. While we strive to provide accurate and up-to-date content, we cannot guarantee that our materials are error-free or suitable for all learning needs.",
                      color: "yellow",
                    },
                    {
                      title: "No Warranty",
                      content:
                        'Our platform is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or that the platform will meet your specific requirements.',
                      color: "orange",
                    },
                    {
                      title: "Limitation of Liability",
                      content:
                        "To the maximum extent permitted by law, Javaistic shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform.",
                      color: "red",
                    },
                  ].map((disclaimer, index) => (
                    <motion.div
                      key={index}
                      className={`border-l-4 border-${disclaimer.color}-500 dark:border-${disclaimer.color}-400 pl-6 transition-colors duration-300`}
                      whileHover={{ x: 5 }}
                    >
                      <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                        {disclaimer.title}
                      </h3>
                      <p className="text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                        {disclaimer.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Termination */}
              <motion.section
                id="termination"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Termination
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 transition-colors duration-300 dark:border-blue-500/30 dark:from-blue-500/20 dark:to-cyan-500/20 dark:backdrop-blur-sm">
                    <h3 className="mb-4 flex items-center text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      <Users className="mr-2 h-5 w-5 text-blue-500 transition-colors duration-300 dark:text-blue-400" />
                      By You
                    </h3>
                    <ul className="space-y-3 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                        You may terminate your account at any time by deleting
                        it through your account settings
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                        You may stop using our platform at any time without
                        notice
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                        Termination does not relieve you of obligations incurred
                        before termination
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-pink-50 p-6 transition-colors duration-300 dark:border-red-500/30 dark:from-red-500/20 dark:to-pink-500/20 dark:backdrop-blur-sm">
                    <h3 className="mb-4 flex items-center text-xl font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                      <Shield className="mr-2 h-5 w-5 text-red-500 transition-colors duration-300 dark:text-red-400" />
                      By Us
                    </h3>
                    <ul className="space-y-3 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 dark:bg-red-400"></span>
                        We may suspend or terminate accounts that violate these
                        Terms
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 dark:bg-red-400"></span>
                        We may discontinue or modify our services with
                        reasonable notice
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 dark:bg-red-400"></span>
                        We reserve the right to refuse service to anyone for any
                        lawful reason
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Changes to Terms */}
              <motion.section
                id="changes"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-green-600">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Changes to These Terms
                  </h2>
                </div>

                <div className="rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-green-50 p-6 transition-colors duration-300 dark:border-teal-500/30 dark:from-teal-500/20 dark:to-green-500/20 dark:backdrop-blur-sm">
                  <p className="mb-4 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    We may update these Terms from time to time to reflect
                    changes in our practices, legal requirements, or platform
                    features. When we make significant changes, we will:
                  </p>
                  <ul className="mb-4 space-y-3 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                      Notify users through email or platform announcements
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                      Update the Last Updated date at the top of these Terms
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                      Provide a reasonable notice period before changes take
                      effect
                    </li>
                  </ul>
                  <p className="text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    Continued use of Javaistic after changes take effect
                    constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </motion.section>

              {/* Additional Legal Sections */}
              <motion.section className="mb-12" variants={itemVariants}>
                <h2 className="mb-4 text-2xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                  Governing Law
                </h2>
                <div className="rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 transition-colors duration-300 dark:border-indigo-500/30 dark:from-indigo-500/20 dark:to-blue-500/20 dark:backdrop-blur-sm">
                  <p className="text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    These Terms shall be governed by and construed in accordance
                    with applicable laws. Any disputes arising from these Terms
                    or your use of Javaistic shall be resolved through
                    appropriate legal channels.
                  </p>
                </div>
              </motion.section>

              <motion.section className="mb-12" variants={itemVariants}>
                <h2 className="mb-4 text-2xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                  Severability
                </h2>
                <div className="rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6 transition-colors duration-300 dark:border-green-500/30 dark:from-green-500/20 dark:to-emerald-500/20 dark:backdrop-blur-sm">
                  <p className="text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    If any provision of these Terms is found to be unenforceable
                    or invalid, the remaining provisions shall remain in full
                    force and effect.
                  </p>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                id="contact"
                className="mb-12"
                variants={itemVariants}
              >
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 transition-colors duration-300 dark:text-white">
                    Contact Information
                  </h2>
                </div>

                <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6 transition-colors duration-300 dark:border-blue-500/30 dark:from-blue-500/20 dark:to-purple-500/20 dark:backdrop-blur-sm">
                  <p className="mb-4 text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
                    If you have questions about these Terms of Service, please
                    contact us:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <motion.div
                      className="flex items-center rounded-lg border border-neutral-200 bg-white p-3 transition-colors duration-300 dark:border-neutral-600/50 dark:bg-neutral-800/50 dark:backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Mail className="mr-3 h-5 w-5 text-blue-500 transition-colors duration-300 dark:text-blue-400" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                          Email
                        </p>
                        <p className="text-xs text-neutral-500 transition-colors duration-300 dark:text-neutral-400">
                          legal@javaistic.com
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center rounded-lg border border-neutral-200 bg-white p-3 transition-colors duration-300 dark:border-neutral-600/50 dark:bg-neutral-800/50 dark:backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Code className="mr-3 h-5 w-5 text-purple-500 transition-colors duration-300 dark:text-purple-400" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                          GitHub Issues
                        </p>
                        <p className="text-xs text-neutral-500 transition-colors duration-300 dark:text-neutral-400">
                          Open source repository
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center rounded-lg border border-neutral-200 bg-white p-3 transition-colors duration-300 dark:border-neutral-600/50 dark:bg-neutral-800/50 dark:backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Users className="mr-3 h-5 w-5 text-green-500 transition-colors duration-300 dark:text-green-400" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 transition-colors duration-300 dark:text-white">
                          Community Forum
                        </p>
                        <p className="text-xs text-neutral-500 transition-colors duration-300 dark:text-neutral-400">
                          Discuss with moderators
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              {/* Footer */}
              <motion.div
                className={`border-t ${
                  isDarkMode ? "border-neutral-600" : "border-neutral-300"
                } pt-8 transition-colors duration-300`}
                variants={itemVariants}
              >
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-neutral-400" : "text-neutral-500"
                  } text-center italic transition-colors duration-300`}
                >
                  Thank you for being part of the Javaistic community. Together,
                  we are making Java programming education accessible and
                  enjoyable for everyone.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.section
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className={`mx-auto max-w-4xl rounded-3xl ${
              isDarkMode
                ? "border border-indigo-400/30 bg-gradient-to-br from-indigo-900 to-sky-700"
                : "border border-indigo-300 bg-gradient-to-br from-indigo-600 to-sky-600"
            } px-8 py-16 text-center text-white transition-colors duration-300`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <Scale className="mx-auto h-16 w-16 text-white/90" />
            </motion.div>

            <h2 className="mb-4 text-4xl font-bold">
              Ready to Start Learning?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              By using Javaistic, you agree to these terms and join our
              community of Java programming enthusiasts. Let us build something
              amazing together!
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="/docs"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition-colors duration-200 hover:bg-neutral-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="mr-2 h-5 w-5" />
                Start Learning Java
              </motion.a>

              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Support
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
