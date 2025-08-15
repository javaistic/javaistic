"use client";
import { motion, easeOut } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Key,
  Database,
  Server,
  AlertTriangle,
  CheckCircle,
  FileText,
  Globe,
  Zap,
  ShieldCheck,
  UserCheck,
  Fingerprint,
  Smartphone,
  Mail,
  Clock,
  Download,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

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
      icon: <UserCheck className="h-6 w-6" />,
      title: "Multi-Factor Authentication",
      description: "Optional 2FA support for enhanced account security",
      status: "Available",
      color: "blue",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Secure Data Storage",
      description: "Personal data encrypted at rest with AES-256 encryption",
      status: "Active",
      color: "purple",
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
      description: "Regular security audits and penetration testing",
      status: "Ongoing",
      color: "orange",
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Identity Protection",
      description: "Advanced fraud detection and account monitoring",
      status: "Active",
      color: "red",
    },
  ];

  const complianceStandards = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU users",
      icon: <Globe className="h-5 w-5" />,
      status: "Compliant",
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 Type II certification",
      icon: <FileText className="h-5 w-5" />,
      status: "Certified",
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System standard",
      icon: <Shield className="h-5 w-5" />,
      status: "Certified",
    },
    {
      name: "OWASP",
      description: "Following OWASP Top 10 security guidelines",
      icon: <CheckCircle className="h-5 w-5" />,
      status: "Implemented",
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
      id: "account",
      label: "Account Security",
      icon: <Lock className="h-4 w-4" />,
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
            className="text-muted-foreground mt-6 max-w-6xl text-lg sm:text-xl"
            variants={itemVariants}
          >
            Your security and privacy are our top priorities. Learn about our
            comprehensive measures to protect your data and ensure a safe
            learning environment.
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
              <span className="font-semibold">Security Audit:</span> Quarterly
              Reviews
            </p>
          </motion.div>
        </motion.div>

        {/* Security Overview Cards */}
        <motion.div
          className="mb-16 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-2xl shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className={`h-12 w-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 mb-4 flex items-center justify-center rounded-xl text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <div
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-${feature.color}-100 text-${feature.color}-800 dark:bg-${feature.color}-500/20 dark:text-${feature.color}-300`}
              >
                <CheckCircle className="mr-1 h-3 w-3" />
                {feature.status}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabbed Content Section */}
        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-2xl shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70">
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
                      Our security framework is built on multiple layers of
                      protection, ensuring your learning experience remains safe
                      and secure at all times.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Lock className="mr-2 h-5 w-5 text-blue-500" />
                          Data Protection
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• AES-256 encryption for data at rest</li>
                          <li>• TLS 1.3 for data in transit</li>
                          <li>• Regular automated backups</li>
                          <li>
                            • Zero-knowledge architecture for sensitive data
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Server className="mr-2 h-5 w-5 text-green-500" />
                          Infrastructure Security
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• DDoS protection and rate limiting</li>
                          <li>• WAF (Web Application Firewall)</li>
                          <li>• Container security scanning</li>
                          <li>• Regular penetration testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-500/20 dark:to-indigo-500/20">
                    <div className="flex items-start">
                      <AlertTriangle className="mt-1 mr-3 h-6 w-6 text-blue-500" />
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                          Incident Response
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          We maintain a 24/7 security operations center with
                          automated threat detection and immediate response
                          protocols. Any security incidents are addressed within
                          minutes, not hours.
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
                      We collect only the minimum data necessary to provide our
                      educational services and never sell your personal
                      information to third parties.
                    </p>

                    <div className="space-y-6">
                      <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-500/20 dark:to-emerald-500/20">
                        <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Eye className="mr-2 h-5 w-5 text-green-500" />
                          What We Collect
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• Account information (email, username)</li>
                          <li>• Learning progress and preferences</li>
                          <li>• Usage analytics (anonymized)</li>
                          <li>• Optional profile information</li>
                        </ul>
                      </div>

                      <div className="rounded-xl bg-gradient-to-r from-red-50 to-pink-50 p-6 dark:from-red-500/20 dark:to-pink-500/20">
                        <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <Shield className="mr-2 h-5 w-5 text-red-500" />
                          What We Don&apos;t Collect
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>
                            • Sensitive personal data (SSN, financial info)
                          </li>
                          <li>• Location data beyond country/region</li>
                          <li>• Browsing behavior outside our platform</li>
                          <li>• Communications content (unless reported)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                      Your Privacy Rights
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        {
                          right: "Access Your Data",
                          description:
                            "Download all your personal data anytime",
                        },
                        {
                          right: "Delete Your Data",
                          description: "Permanent account and data deletion",
                        },
                        {
                          right: "Modify Information",
                          description:
                            "Update or correct your personal details",
                        },
                        {
                          right: "Data Portability",
                          description:
                            "Export your learning progress and achievements",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start rounded-lg bg-gray-50 p-3 dark:bg-gray-800"
                        >
                          <CheckCircle className="mt-0.5 mr-3 h-5 w-5 text-green-500" />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.right}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "account" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                      Secure Your Account
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Take advantage of our security features to keep your
                      learning progress and personal information safe.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-500/20 dark:to-indigo-500/20">
                          <div className="mb-4 flex items-center">
                            <Smartphone className="mr-3 h-8 w-8 text-blue-500" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Two-Factor Authentication
                            </h3>
                          </div>
                          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                            Add an extra layer of security with authenticator
                            apps or SMS verification.
                          </p>
                          <motion.button
                            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Enable 2FA
                          </motion.button>
                        </div>

                        <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-6 dark:from-purple-500/20 dark:to-pink-500/20">
                          <div className="mb-4 flex items-center">
                            <Key className="mr-3 h-8 w-8 text-purple-500" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Strong Passwords
                            </h3>
                          </div>
                          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                            Use a unique, strong password for your Javaistic
                            account.
                          </p>
                          <motion.button
                            className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Change Password
                          </motion.button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-500/20 dark:to-emerald-500/20">
                          <div className="mb-4 flex items-center">
                            <Mail className="mr-3 h-8 w-8 text-green-500" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Email Notifications
                            </h3>
                          </div>
                          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                            Get notified about login attempts and security
                            updates.
                          </p>
                          <motion.button
                            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Manage Alerts
                          </motion.button>
                        </div>

                        <div className="rounded-xl bg-gradient-to-r from-orange-50 to-red-50 p-6 dark:from-orange-500/20 dark:to-red-500/20">
                          <div className="mb-4 flex items-center">
                            <Clock className="mr-3 h-8 w-8 text-orange-500" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Session Management
                            </h3>
                          </div>
                          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                            View and manage your active login sessions across
                            devices.
                          </p>
                          <motion.button
                            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            View Sessions
                          </motion.button>
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
                      Compliance & Certifications
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      We maintain the highest standards of security and
                      compliance to protect your data and ensure regulatory
                      adherence.
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
                              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-500/20 dark:text-green-300">
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
                        <Download className="mr-2 h-5 w-5 text-indigo-500" />
                        Security Documentation
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                        Access our comprehensive security documentation and
                        compliance reports.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: "Security Whitepaper", type: "PDF" },
                          { name: "SOC 2 Report", type: "PDF" },
                          { name: "Privacy Policy", type: "Web" },
                          { name: "Terms of Service", type: "Web" },
                        ].map((doc, index) => (
                          <motion.button
                            key={index}
                            className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {doc.type === "PDF" ? (
                              <Download className="mr-1 h-4 w-4" />
                            ) : (
                              <ExternalLink className="mr-1 h-4 w-4" />
                            )}
                            {doc.name}
                          </motion.button>
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
            className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-2xl shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-gray-700/50 dark:bg-gray-900/70"
            variants={itemVariants}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Security Incident Reporting
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300">
                Found a security vulnerability? We take security seriously and
                appreciate responsible disclosure. Report security issues
                directly to our security team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 p-6 dark:from-red-500/20 dark:to-orange-500/20">
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    <Shield className="mr-2 h-5 w-5 text-red-500" />
                    Bug Bounty Program
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    We reward security researchers who help us identify and fix
                    vulnerabilities. Our bug bounty program covers:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Authentication bypass vulnerabilities</li>
                    <li>• Data exposure and injection attacks</li>
                    <li>• Cross-site scripting (XSS) vulnerabilities</li>
                    <li>• Server-side request forgery (SSRF)</li>
                    <li>• Privilege escalation issues</li>
                  </ul>
                </div>

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
                        Response Time:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        Within 24 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-500/20 dark:to-emerald-500/20">
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    Responsible Disclosure
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Please follow these guidelines when reporting security
                    issues:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Provide detailed steps to reproduce the issue</li>
                    <li>• Don&apos;t access or modify user data</li>
                    <li>• Don&apos;t perform DoS attacks or spam</li>
                    <li>• Give us time to fix before public disclosure</li>
                    <li>• Don&apos;t share findings with others until resolved</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-6 dark:from-purple-500/20 dark:to-pink-500/20">
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    <Zap className="mr-2 h-5 w-5 text-purple-500" />
                    Recognition Program
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Valid security reports may be eligible for:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Public recognition (with permission)</li>
                    <li>• Monetary rewards for critical findings</li>
                    <li>• Javaistic swag and merchandise</li>
                    <li>• Fast-track support for your reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.div className="mt-8 text-center" variants={itemVariants}>
              <motion.button
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:from-red-600 hover:to-pink-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Report Security Issue
              </motion.button>
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
              Trust Center
            </motion.h2>
            <motion.p
              className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Access transparency reports, security updates, and detailed
              information about our security practices.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Security Updates",
                description: "Latest security patches and system updates",
                icon: <Shield className="h-6 w-6" />,
                color: "blue",
                items: [
                  "Monthly security patches",
                  "Vulnerability disclosures",
                  "System maintenance logs",
                ],
              },
              {
                title: "Transparency Reports",
                description:
                  "Regular reports on data requests and security incidents",
                icon: <FileText className="h-6 w-6" />,
                color: "green",
                items: [
                  "Quarterly transparency reports",
                  "Data request statistics",
                  "Incident response summaries",
                ],
              },
              {
                title: "Security Metrics",
                description:
                  "Real-time security monitoring and performance data",
                icon: <Zap className="h-6 w-6" />,
                color: "purple",
                items: [
                  "Uptime statistics",
                  "Response time metrics",
                  "Security scan results",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-500/20 dark:to-${item.color}-600/20 border border-${item.color}-200 dark:border-${item.color}-500/30 rounded-xl p-6 transition-colors duration-300`}
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
              Security is Our Priority
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              We&apos;re committed to maintaining the highest security standards to
              protect your learning journey. Have questions about our security
              practices? We&apos;re here to help.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition-colors duration-200 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Security Team
              </motion.button>
              <motion.a href="/docs">
                <motion.button
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-indigo-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Documentation
                </motion.button>
              </motion.a>
            </div>

            <motion.div
              className="mt-8 text-sm text-white/70"
              variants={itemVariants}
            >
              <p>Secure by design • Transparent practices • Community trust</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default SecurityPage;
