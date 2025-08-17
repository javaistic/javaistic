"use client";
import { motion, easeOut } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  AlertTriangle,
  CheckCircle,
  FileText,
  Globe,
  Zap,
  ShieldCheck,
  Github,
  ExternalLink,
  Mail,
  Activity,
  Code,
} from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";
import Link from "next/link";

const SecurityPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

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
        particleCount: 400,
        particleSpread: 8,
        speed: 0.3,
        particleBaseSize: 80,
        moveParticlesOnHover: false,
        alphaParticles: false,
        disableRotation: true,
        particleHoverFactor: 2,
        sizeRandomness: 1.0,
        cameraDistance: 20,
      }
    : {
        particleColors: ["#1E3A8A", "#4B0082", "#4a4a4a"],
        particleCount: 400,
        particleSpread: 8,
        speed: 0.3,
        particleBaseSize: 80,
        moveParticlesOnHover: false,
        alphaParticles: false,
        disableRotation: true,
        particleHoverFactor: 1.5,
        sizeRandomness: 1.0,
        cameraDistance: 18,
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

  const securityFeatures = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description:
        "All data transmission is protected with industry-standard TLS 1.3 encryption",
      status: "Active",
      color: "green",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Privacy by Design",
      description: "Minimal data collection with transparent privacy practices",
      status: "Built-in",
      color: "indigo",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Secure Infrastructure",
      description: "Hosted on trusted platforms with enterprise-grade security",
      status: "Active",
      color: "orange",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Open Source",
      description: "Our code is publicly available for security review",
      status: "Transparent",
      color: "purple",
    },
  ];

  const complianceStandards = [
    {
      name: "Vercel Security",
      description: "Following Vercel's enterprise security standards",
      icon: <Globe className="h-5 w-5" />,
      status: "Provider Standard",
    },
    {
      name: "GitHub Security",
      description:
        "Code security scanning and dependency management via GitHub",
      icon: <Github className="h-5 w-5" />,
      status: "Provider Standard",
    },
    {
      name: "Google Analytics",
      description: "Privacy-compliant analytics following Google's standards",
      icon: <Shield className="h-5 w-5" />,
      status: "Provider Standard",
    },
    {
      name: "Open Source",
      description: "Transparent security through public code repository",
      icon: <CheckCircle className="h-5 w-5" />,
      status: "Public",
    },
  ];

  const tabsData = [
    {
      id: "overview",
      label: "Security Overview",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      id: "compliance",
      label: "Compliance",
      icon: <FileText className="h-4 w-4" />,
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
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <Shield className="mx-auto h-20 w-20 text-blue-500 dark:text-blue-400" />
          </motion.div>

          <motion.h1
            className="font-funnel-display max-w-6xl text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-[80px] dark:text-white"
            variants={titleVariants}
          >
            Security &{" "}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Privacy
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mt-6 max-w-6xl text-lg text-gray-600 sm:text-xl dark:text-gray-300"
            variants={itemVariants}
          >
            Your security and privacy are our top priorities. Learn about our
            approach to protecting your data in our minimal-data learning
            environment.
          </motion.p>

          <motion.div
            className={`mt-8 text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            } space-y-1 transition-colors duration-300`}
            variants={itemVariants}
          >
            <p>
              <span className="font-semibold">Last Updated:</span> January 2025
            </p>
            <p>
              <span className="font-semibold">Open Source:</span> Publicly
              Auditable
            </p>
          </motion.div>
        </motion.div>

        {/* Tabbed Content Section */}
        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70">
            {/* Tab Navigation */}
            <div className="mb-8 flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
              {tabsData.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center rounded-t-lg px-4 py-3 font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-b-2 border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Platform Security Architecture
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Our security approach is built on simplicity and
                      transparency. We minimize data collection and rely on
                      trusted infrastructure providers for enterprise-grade
                      security.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Lock className="mr-2 h-5 w-5 text-blue-500" />
                          Data Protection
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• Minimal data collection approach</li>
                          <li>• No sensitive data storage</li>
                          <li>• Analytics data anonymization</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Server className="mr-2 h-5 w-5 text-green-500" />
                          Infrastructure Security
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• Vercel's enterprise security platform</li>
                          <li>• GitHub's security scanning and monitoring</li>
                          <li>• Automated dependency updates</li>
                          <li>• Open source code for transparency</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-500/20 dark:to-indigo-500/20">
                    <div className="flex items-start">
                      <Code className="mt-1 mr-3 h-6 w-6 text-blue-500" />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                          Open Source Security
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Our entire codebase is publicly available on GitHub,
                          allowing the community to review, audit, and
                          contribute to our security practices. This
                          transparency ensures accountability and continuous
                          improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "privacy" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Privacy-First Approach
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      We believe in privacy by design. Our platform collects
                      minimal data and operates without storing personal user
                      information.
                    </p>

                    <div className="space-y-6">
                      <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-500/20 dark:to-emerald-500/20">
                        <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Eye className="mr-2 h-5 w-5 text-green-500" />
                          What We Collect
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>
                            • Anonymous usage analytics via Google Analytics
                          </li>
                          <li>• Basic performance metrics</li>
                          <li>• Error logs for debugging (no personal data)</li>
                          <li>• No user accounts or personal information</li>
                        </ul>
                      </div>

                      <div className="rounded-xl bg-gradient-to-r from-red-50 to-pink-50 p-6 dark:from-red-500/20 dark:to-pink-500/20">
                        <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Shield className="mr-2 h-5 w-5 text-red-500" />
                          What We Don&apos;t Collect
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• No personal identification information</li>
                          <li>• No email addresses or contact details</li>
                          <li>• No user accounts or authentication data</li>
                          <li>
                            • No learning progress or personal data storage
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                      Your Privacy Rights
                    </h3>
                    <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-500/20 dark:to-indigo-500/20">
                      <div className="flex items-start">
                        <CheckCircle className="mt-0.5 mr-3 h-5 w-5 text-blue-500" />
                        <div>
                          <p className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            No Data Collection Means Maximum Privacy
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">
                            Since we don't store personal data, there's nothing
                            to access, delete, or modify. Your privacy is
                            protected by design through our minimal data
                            collection approach.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "compliance" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Compliance Through Trusted Providers
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      We leverage the security standards and compliance
                      certifications of our trusted infrastructure providers to
                      ensure enterprise-grade protection.
                    </p>

                    <div className="mb-8 grid gap-6 md:grid-cols-2">
                      {complianceStandards.map((standard, index) => (
                        <motion.div
                          key={index}
                          className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-700"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="mb-4 flex items-center">
                            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
                              {standard.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {standard.name}
                              </h3>
                              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-500/20 dark:text-blue-300">
                                {standard.status}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {standard.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-6 dark:from-indigo-500/20 dark:to-purple-500/20">
                      <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                        <Github className="mr-2 h-5 w-5 text-indigo-500" />
                        Open Source Documentation
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                        All our security practices are transparent through our
                        open source code and documentation.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {[
                          {
                            name: "Source Code",
                            type: "GitHub",
                            url: "https://github.com/javaistic/javaistic",
                          },
                          { name: "Security Policy", type: "GitHub", url: "#" },
                          {
                            name: "Privacy Policy",
                            type: "Web",
                            url: "/legal/privacy",
                          },
                          {
                            name: "Terms of Service",
                            type: "Web",
                            url: "/legal/terms",
                          },
                        ].map((doc, index) => (
                          <motion.a
                            key={index}
                            href={doc.url}
                            target={doc.type === "GitHub" ? "_blank" : "_self"}
                            rel={
                              doc.type === "GitHub"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {doc.type === "GitHub" ? (
                              <Github className="mr-1 h-4 w-4" />
                            ) : (
                              <ExternalLink className="mr-1 h-4 w-4" />
                            )}
                            {doc.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Security Contact Section */}
        <motion.section
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
            variants={itemVariants}
            id="contact"
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Security Issue Reporting
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300">
                Found a security issue? We appreciate responsible disclosure.
                Report security concerns directly to our development team.
              </p>
            </div>

            <div className="mx-auto max-w-2xl">
              <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-500/20 dark:to-indigo-500/20">
                <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <Mail className="mr-2 h-5 w-5 text-blue-500" />
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <span className="mr-2 font-medium text-gray-900 dark:text-white">
                      Email:
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      uiuxarghya@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-medium text-gray-900 dark:text-white">
                      GitHub Issues:
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      <Link href="https://github.com/javaistic/javaistic/issues">
                        Report Issue
                      </Link>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 font-medium text-gray-900 dark:text-white">
                      Response Time:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Within 48 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div className="mt-8 text-center" variants={itemVariants}>
              <Link href="https://github.com/javaistic/javaistic/issues">
                <motion.button
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:from-red-600 hover:to-pink-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Report Security Issue
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Trust Center */}
        <motion.section
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="mb-12 text-center">
            <motion.h2
              className="mb-4 text-3xl font-bold text-gray-900 dark:text-white"
              variants={titleVariants}
            >
              Transparency Center
            </motion.h2>
            <motion.p
              className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Access our open source code, uptime monitoring, and transparency
              reports about our security practices.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Open Source Code",
                description:
                  "Full transparency through publicly available source code",
                icon: <Github className="h-6 w-6" />,
                color: "blue",
                items: [
                  "Complete codebase on GitHub",
                  "Security policy documentation",
                  "Community contributions welcome",
                ],
              },
              {
                title: "Uptime Monitoring",
                description:
                  "Real-time service availability and performance metrics",
                icon: <Activity className="h-6 w-6" />,
                color: "green",
                items: [
                  "Real-time uptime statistics",
                  "Performance monitoring",
                  "Service incident reports",
                ],
              },
              {
                title: "Security Updates",
                description:
                  "Regular updates on security improvements and patches",
                icon: <Shield className="h-6 w-6" />,
                color: "purple",
                items: [
                  "Dependency update logs",
                  "Security patch notifications",
                  "Vulnerability disclosures",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-6 transition-colors duration-300 dark:border-gray-600 dark:from-gray-800 dark:to-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={`h-12 w-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 mb-4 flex items-center justify-center rounded-xl text-white`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.items.map((listItem, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle
                        className={`h-4 w-4 text-${item.color}-500 mr-2`}
                      />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
                ? "border border-indigo-400/30 bg-gradient-to-br from-indigo-900 to-purple-700"
                : "border border-indigo-300 bg-gradient-to-br from-indigo-600 to-purple-600"
            } px-8 py-16 text-center text-white shadow-2xl transition-colors duration-300`}
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
              <ShieldCheck className="mx-auto h-16 w-16 text-white/90" />
            </motion.div>

            <h2 className="mb-4 text-4xl font-bold">
              Transparency is Our Foundation
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              We believe in open, transparent security practices. Our open
              source approach ensures accountability and community trust. Have
              questions? We&apos;re here to help.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#contact">
                <motion.button
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition-colors duration-200 hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </motion.button>
              </Link>
              <Link href="https://github.com/javaistic/javaistic">
                <motion.button
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-indigo-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Source Code
                </motion.button>
              </Link>
            </div>

            <motion.div
              className="mt-8 text-sm text-white/70"
              variants={itemVariants}
            >
              <p>Open Source • Minimal Data • Community Trust</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default SecurityPage;
