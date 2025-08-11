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
  Users, 
  Globe, 
  Zap,
  ShieldCheck,
  UserCheck,
  Fingerprint,
  Smartphone,
  Mail,
  Clock,
  Download,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

const SecurityPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All data transmission is protected with industry-standard TLS 1.3 encryption",
      status: "Active",
      color: "green"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Multi-Factor Authentication",
      description: "Optional 2FA support for enhanced account security",
      status: "Available",
      color: "blue"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Secure Data Storage",
      description: "Personal data encrypted at rest with AES-256 encryption",
      status: "Active",
      color: "purple"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Privacy by Design",
      description: "Minimal data collection with transparent privacy practices",
      status: "Built-in",
      color: "indigo"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Secure Infrastructure",
      description: "Regular security audits and penetration testing",
      status: "Ongoing",
      color: "orange"
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Identity Protection",
      description: "Advanced fraud detection and account monitoring",
      status: "Active",
      color: "red"
    }
  ];

  const complianceStandards = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU users",
      icon: <Globe className="w-5 h-5" />,
      status: "Compliant"
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 Type II certification",
      icon: <FileText className="w-5 h-5" />,
      status: "Certified"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System standard",
      icon: <Shield className="w-5 h-5" />,
      status: "Certified"
    },
    {
      name: "OWASP",
      description: "Following OWASP Top 10 security guidelines",
      icon: <CheckCircle className="w-5 h-5" />,
      status: "Implemented"
    }
  ];

  const tabsData = [
    { id: 'overview', label: 'Security Overview', icon: <Shield className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <Eye className="w-4 h-4" /> },
    { id: 'account', label: 'Account Security', icon: <Lock className="w-4 h-4" /> },
    { id: 'compliance', label: 'Compliance', icon: <FileText className="w-4 h-4" /> }
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Shield className="w-20 h-20 mx-auto text-blue-500 dark:text-blue-400" />
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
            Your security and privacy are our top priorities. Learn about our comprehensive measures to protect your data and ensure a safe learning environment.
          </motion.p>
          
          <motion.div
            className={`mt-8 text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } space-y-1 transition-colors duration-300`}
            variants={itemVariants}
          >
            <p><span className="font-semibold">Last Updated:</span> January 2025</p>
            <p><span className="font-semibold">Security Audit:</span> Quarterly Reviews</p>
          </motion.div>
        </motion.div>

        {/* Security Overview Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 shadow-2xl transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mb-4 text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {feature.description}
              </p>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${feature.color}-100 text-${feature.color}-800 dark:bg-${feature.color}-500/20 dark:text-${feature.color}-300`}>
                <CheckCircle className="w-3 h-3 mr-1" />
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
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl transition-colors duration-300">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
              {tabsData.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 rounded-t-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
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
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Platform Security Architecture
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Our security framework is built on multiple layers of protection, ensuring your learning experience remains safe and secure at all times.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                          <Lock className="w-5 h-5 mr-2 text-blue-500" />
                          Data Protection
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• AES-256 encryption for data at rest</li>
                          <li>• TLS 1.3 for data in transit</li>
                          <li>• Regular automated backups</li>
                          <li>• Zero-knowledge architecture for sensitive data</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                          <Server className="w-5 h-5 mr-2 text-green-500" />
                          Infrastructure Security
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• DDoS protection and rate limiting</li>
                          <li>• WAF (Web Application Firewall)</li>
                          <li>• Container security scanning</li>
                          <li>• Regular penetration testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-xl p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Incident Response
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          We maintain a 24/7 security operations center with automated threat detection and immediate response protocols. Any security incidents are addressed within minutes, not hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'privacy' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Privacy-First Approach
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We collect only the minimum data necessary to provide our educational services and never sell your personal information to third parties.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Eye className="w-5 h-5 mr-2 text-green-500" />
                          What We Collect
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Account information (email, username)</li>
                          <li>• Learning progress and preferences</li>
                          <li>• Usage analytics (anonymized)</li>
                          <li>• Optional profile information</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-500/20 dark:to-pink-500/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-red-500" />
                          What We Don't Collect
                        </h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Sensitive personal data (SSN, financial info)</li>
                          <li>• Location data beyond country/region</li>
                          <li>• Browsing behavior outside our platform</li>
                          <li>• Communications content (unless reported)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Your Privacy Rights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { right: "Access Your Data", description: "Download all your personal data anytime" },
                        { right: "Delete Your Data", description: "Permanent account and data deletion" },
                        { right: "Modify Information", description: "Update or correct your personal details" },
                        { right: "Data Portability", description: "Export your learning progress and achievements" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">{item.right}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-xs">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'account' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Secure Your Account
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Take advantage of our security features to keep your learning progress and personal information safe.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Smartphone className="w-8 h-8 text-blue-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Two-Factor Authentication
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Add an extra layer of security with authenticator apps or SMS verification.
                          </p>
                          <motion.button 
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Enable 2FA
                          </motion.button>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Key className="w-8 h-8 text-purple-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Strong Passwords
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Use a unique, strong password for your Javaistic account.
                          </p>
                          <motion.button 
                            className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Change Password
                          </motion.button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Mail className="w-8 h-8 text-green-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Email Notifications
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Get notified about login attempts and security updates.
                          </p>
                          <motion.button 
                            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Manage Alerts
                          </motion.button>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-500/20 dark:to-red-500/20 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <Clock className="w-8 h-8 text-orange-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              Session Management
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            View and manage your active login sessions across devices.
                          </p>
                          <motion.button 
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
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

              {activeTab === 'compliance' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Compliance & Certifications
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {complianceStandards.map((standard, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4 text-white">
                              {standard.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {standard.name}
                              </h3>
                              <span className="text-xs bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300 px-2 py-1 rounded-full">
                                {standard.status}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {standard.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Download className="w-5 h-5 mr-2 text-indigo-500" />
                        Security Documentation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Access our comprehensive security documentation and compliance reports.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: "Security Whitepaper", type: "PDF" },
                          { name: "SOC 2 Report", type: "PDF" },
                          { name: "Privacy Policy", type: "Web" },
                          { name: "Terms of Service", type: "Web" }
                        ].map((doc, index) => (
                          <motion.button
                            key={index}
                            className="flex items-center px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {doc.type === 'PDF' ? <Download className="w-4 h-4 mr-1" /> : <ExternalLink className="w-4 h-4 mr-1" />}
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
            className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Security Incident Reporting
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Found a security vulnerability? We take security seriously and appreciate responsible disclosure. 
                Report security issues directly to our security team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-500/20 dark:to-orange-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-500" />
                    Bug Bounty Program
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    We reward security researchers who help us identify and fix vulnerabilities. Our bug bounty program covers:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Authentication bypass vulnerabilities</li>
                    <li>• Data exposure and injection attacks</li>
                    <li>• Cross-site scripting (XSS) vulnerabilities</li>
                    <li>• Server-side request forgery (SSRF)</li>
                    <li>• Privilege escalation issues</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-500" />
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900 dark:text-white mr-2">Email:</span>
                      <span className="text-blue-600 dark:text-blue-400">uiuxarghya@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900 dark:text-white mr-2">Response Time:</span>
                      <span className="text-gray-600 dark:text-gray-300">Within 24 hours</span>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Responsible Disclosure
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Please follow these guidelines when reporting security issues:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Provide detailed steps to reproduce the issue</li>
                    <li>• Don't access or modify user data</li>
                    <li>• Don't perform DoS attacks or spam</li>
                    <li>• Give us time to fix before public disclosure</li>
                    <li>• Don't share findings with others until resolved</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" />
                    Recognition Program
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Valid security reports may be eligible for:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>• Public recognition (with permission)</li>
                    <li>• Monetary rewards for critical findings</li>
                    <li>• Javaistic swag and merchandise</li>
                    <li>• Fast-track support for your reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.div 
              className="mt-8 text-center"
              variants={itemVariants}
            >
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
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
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              variants={titleVariants}
            >
              Trust Center
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Access transparency reports, security updates, and detailed information about our security practices.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Security Updates",
                description: "Latest security patches and system updates",
                icon: <Shield className="w-6 h-6" />,
                color: "blue",
                items: ["Monthly security patches", "Vulnerability disclosures", "System maintenance logs"]
              },
              {
                title: "Transparency Reports",
                description: "Regular reports on data requests and security incidents",
                icon: <FileText className="w-6 h-6" />,
                color: "green",
                items: ["Quarterly transparency reports", "Data request statistics", "Incident response summaries"]
              },
              {
                title: "Security Metrics",
                description: "Real-time security monitoring and performance data",
                icon: <Zap className="w-6 h-6" />,
                color: "purple",
                items: ["Uptime statistics", "Response time metrics", "Security scan results"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-500/20 dark:to-${item.color}-600/20 border border-${item.color}-200 dark:border-${item.color}-500/30 rounded-xl p-6 transition-colors duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <CheckCircle className={`w-4 h-4 text-${item.color}-500 mr-2`} />
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
                ? 'bg-gradient-to-br from-indigo-900 to-purple-700 border border-indigo-400/30' 
                : 'bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-300'
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
              <ShieldCheck className="w-16 h-16 mx-auto text-white/90" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4">
              Security is Our Priority
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're committed to maintaining the highest security standards to protect your learning journey. 
              Have questions about our security practices? We're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Security Team
              </motion.button>
              <motion.a href="/docs" > 
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5 mr-2" />
                View Documentation
              </motion.button>
              </motion.a>
            </div>

            <motion.div 
              className="mt-8 text-white/70 text-sm"
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