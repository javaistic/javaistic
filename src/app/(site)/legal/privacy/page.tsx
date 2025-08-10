"use client";
import { motion, easeOut } from "framer-motion";
import { Shield, Lock, Eye, Users, Mail, FileText, AlertCircle, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";
const PrivacyPage = () => {
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
        ease: easeOut, // use imported easing function
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
        ease: easeOut, // use imported easing function
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
    { title: "Information We Collect", url: "#information-we-collect", icon: <FileText className="w-4 h-4" /> },
    { title: "How We Use Your Information", url: "#how-we-use-your-information", icon: <Eye className="w-4 h-4" /> },
    { title: "Information Sharing and Disclosure", url: "#information-sharing", icon: <Users className="w-4 h-4" /> },
    { title: "Data Security and Storage", url: "#data-security", icon: <Lock className="w-4 h-4" /> },
    { title: "Your Rights and Choices", url: "#your-rights", icon: <Shield className="w-4 h-4" /> },
    { title: "Cookies and Tracking", url: "#cookies", icon: <AlertCircle className="w-4 h-4" /> },
    { title: "Children Privacy", url: "#childrens-privacy", icon: <Users className="w-4 h-4" /> },
    { title: "Contact Information", url: "#contact", icon: <Mail className="w-4 h-4" /> },
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
     
          
          <motion.h1
            className="font-funnel-display max-w-6xl text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-[80px] dark:text-white"
            variants={titleVariants}
          >
            Privacy{" "}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Policy{" "}
            </span>
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground mt-6 max-w-6xl text-lg sm:text-xl"
            variants={itemVariants}
          >
            Interactive, fast-paced learning for absolute beginners to advanced
            learners. A free and open-source platform to learn Java programming.
          </motion.p>
          
          <motion.div
            className={`mt-8 text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } space-y-1 transition-colors duration-300`}
            variants={itemVariants}
          >
            <p><span className="font-semibold">Effective Date:</span> August 2025</p>
            <p><span className="font-semibold">Last Updated:</span> August 2025</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents */}
          <motion.div
            className="lg:w-1/4"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-8">
              <motion.div 
               className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 shadow-2xl transition-colors duration-300"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.url}
                     className="flex items-center p-3 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-500/10 transition-all duration-200 group"
                    >
                      <span className="mr-3 text-blue-500 group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors">
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
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 shadow-2xl transition-colors duration-300"
>
              
              {/* Introduction */}
              <motion.div className="mb-12" variants={itemVariants}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Javaistic, we are committed to protecting your privacy and ensuring transparency about how we handle your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our free and open-source Java programming learning platform.
                </p>
              </motion.div>

{/* Information We Collect */}
<motion.section id="information-we-collect" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
      <FileText className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      Information We Collect
    </h2>
  </div>

  <div className="space-y-8">
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-indigo-500/20 border border-blue-200 dark:border-blue-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Information You Provide Directly
      </h3>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Account Information:
            </strong> When you create an account, we collect your name, email address, and chosen username
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Profile Information:
            </strong> Optional profile details such as learning goals, programming experience level, and bio
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              User Content:
            </strong> Code submissions, comments, forum posts, and other content you create on our platform
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Communication:
            </strong> Messages you send to us through contact forms, support requests, or community interactions
          </span>
        </li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Information We Collect Automatically
      </h3>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
        <li className="flex items-start">
          <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Usage Analytics:
            </strong> How you interact with our lessons, exercises, and features to improve your learning experience
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Technical Information:
            </strong> Browser type, device information, IP address, and operating system for platform optimization
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Performance Data:
            </strong> Loading times, error reports, and feature usage to enhance platform reliability
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span>
            <strong className="text-gray-900 dark:text-white transition-colors duration-300">
              Learning Progress:
            </strong> Your completion status, quiz results, and coding exercise submissions to track your Java programming journey
          </span>
        </li>
      </ul>
    </div>
  </div>
</motion.section>

{/* How We Use Your Information */}
<motion.section id="how-we-use-your-information" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
      <Eye className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      How We Use Your Information
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    <motion.div 
      className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-200 dark:border-green-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Educational Services
      </h3>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
        <li>• Provide personalized Java programming lessons</li>
        <li>• Generate coding exercises tailored to your skill level</li>
        <li>• Enable interactive features like code compilation</li>
        <li>• Facilitate community discussions</li>
      </ul>
    </motion.div>

    <motion.div 
      className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-200 dark:border-blue-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Platform Improvement
      </h3>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
        <li>• Analyze usage patterns to enhance curriculum</li>
        <li>• Identify and fix technical issues</li>
        <li>• Develop new features based on feedback</li>
        <li>• Optimize platform performance</li>
      </ul>
    </motion.div>

    <motion.div 
      className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        Communication
      </h3>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
        <li>• Send important account updates</li>
        <li>• Notify about new Java content</li>
        <li>• Respond to support requests</li>
        <li>• Share community highlights</li>
      </ul>
    </motion.div>
  </div>
</motion.section>

{/* Information Sharing */}
<motion.section id="information-sharing" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
      <Users className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      Information Sharing and Disclosure
    </h2>
  </div>

  <div className="space-y-6">
    <div className="border-l-4 border-orange-500 dark:border-orange-400 pl-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
        Public Content
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
        Your forum posts, comments, and shared code examples may be visible to other learners. Your profile information (excluding email) may be publicly displayed, and leaderboards may show your username and progress.
      </p>
    </div>

    <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
        Service Providers
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
        We may share information with trusted third-party services:
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600/50 shadow-sm rounded-lg p-4 transition-colors duration-300 dark:backdrop-blur-sm">
          <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
            Hosting Providers
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            For reliable platform infrastructure
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600/50 shadow-sm rounded-lg p-4 transition-colors duration-300 dark:backdrop-blur-sm">
          <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
            Analytics Services
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            To understand platform usage
          </p>
        </div>
      </div>
    </div>

    <div className="border-l-4 border-red-500 dark:border-red-400 pl-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
        Legal Requirements
      </h3>
      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
        We may disclose information when required by law, to protect our rights, or to ensure the safety of our learning community.
      </p>
    </div>
  </div>
</motion.section>

{/* Data Security */}
<motion.section id="data-security" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
      <Lock className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      Data Security and Storage
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
        Security Measures
      </h3>
      <div className="space-y-3">
        {[
          "Industry-standard encryption for data transmission and storage",
          "Regular security audits and vulnerability assessments", 
          "Secure authentication systems with optional 2FA",
          "Limited access to personal data on need-to-know basis"
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center p-3 bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 rounded-lg transition-colors duration-300 dark:backdrop-blur-sm"
            whileHover={{ x: 5 }}
          >
            <Lock className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mr-3 flex-shrink-0 transition-colors duration-300" />
            <span className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
        Data Retention
      </h3>
      <div className="space-y-3">
        {[
          "Account information retained while active",
          "Learning progress preserved for continuity",
          "Community contributions help other learners",
          "Inactive accounts archived after extended non-use"
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center p-3 bg-purple-50 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 rounded-lg transition-colors duration-300 dark:backdrop-blur-sm"
            whileHover={{ x: 5 }}
          >
            <FileText className="w-4 h-4 text-purple-500 dark:text-purple-400 mr-3 flex-shrink-0 transition-colors duration-300" />
            <span className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.section>

   {/* Your Rights */}
<motion.section id="your-rights" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
      <Shield className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      Your Rights and Choices
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    <motion.div 
      className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-500/20 dark:to-green-500/20 border border-emerald-200 dark:border-emerald-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
        <Shield className="w-5 h-5 mr-2 text-emerald-500 dark:text-emerald-400 transition-colors duration-300" />
        Account Control
      </h3>
      <div className="space-y-3">
        {[
          { label: "Access", desc: "View and download your personal information" },
          { label: "Update", desc: "Modify your profile and account settings" },
          { label: "Delete", desc: "Request deletion of your account" },
          { label: "Export", desc: "Download your coding projects and progress" }
        ].map((right, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></div>
            <div>
              <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                {right.label}:
              </span>
              <span className="text-gray-600 dark:text-gray-300 ml-1 transition-colors duration-300">
                {right.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div 
      className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-200 dark:border-blue-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
        <Eye className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400 transition-colors duration-300" />
        Privacy Preferences
      </h3>
      <div className="space-y-3">
        {[
          { label: "Email Communications", desc: "Opt out of non-essential notifications" },
          { label: "Profile Visibility", desc: "Control what information is public" },
          { label: "Analytics", desc: "Understand how usage data helps" },
          { label: "Community Participation", desc: "Choose engagement level" }
        ].map((pref, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></div>
            <div>
              <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">
                {pref.label}:
              </span>
              <span className="text-gray-600 dark:text-gray-300 ml-1 transition-colors duration-300">
                {pref.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.section>

{/* Cookies */}
<motion.section id="cookies" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
      <AlertCircle className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      Cookies and Tracking Technologies
    </h2>
  </div>
  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-500/20 dark:to-orange-500/20 border border-yellow-200 dark:border-yellow-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
    <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
      We use cookies and similar technologies to:
    </p>
    <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <li className="flex items-start">
        <span className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
        Remember your login status and preferences
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
        Analyze platform usage to improve educational content
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
        Provide personalized learning recommendations
      </li>
      <li className="flex items-start">
        <span className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"></span>
        Ensure proper functionality of interactive coding features
      </li>
    </ul>
    <p className="text-gray-600 dark:text-gray-300 mt-4 transition-colors duration-300">
      You can control cookie preferences through your browser settings, though some features may require certain cookies to function properly.
    </p>
  </div>
</motion.section>

<motion.section id="childrens-privacy" className="mb-12" variants={itemVariants}>
  <div className="flex items-center mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mr-4">
      <Users className="w-6 h-6 text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
      Children&apos;s Privacy
    </h2>
  </div>
  <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-500/20 dark:to-rose-500/20 border border-pink-200 dark:border-pink-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
      Javaistic welcomes learners of all ages to explore Java programming. For users under 13, we require parental consent and take additional measures to protect young learners&apos; privacy in accordance with applicable laws.
    </p>
  </div>
</motion.section>

{/* Additional sections */}
<motion.section className="mb-12" variants={itemVariants}>
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
    International Data Transfers
  </h2>
  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/20 dark:to-blue-500/20 border border-indigo-200 dark:border-indigo-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
      As a global learning platform, your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your data during such transfers.
    </p>
  </div>
</motion.section>

<motion.section className="mb-12" variants={itemVariants}>
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
    Open Source Commitment
  </h2>
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-200 dark:border-green-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
      As an open-source project, Javaistic is transparent about our practices. Our source code is publicly available, allowing the community to review how we handle data and contribute to privacy improvements.
    </p>
  </div>
</motion.section>

<motion.section className="mb-12" variants={itemVariants}>
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
    Changes to This Privacy Policy
  </h2>
  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl p-6 transition-colors duration-300 dark:backdrop-blur-sm">
    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
      We may update this Privacy Policy to reflect changes in our practices or legal requirements. We&apos;ll notify you of significant changes through email or platform announcements. Continued use of Javaistic constitutes acceptance of the updated policy.
    </p>
  </div>
</motion.section>

              {/* Footer */}
              <motion.div 
                className={`border-t ${
                  isDarkMode ? 'border-gray-600' : 'border-gray-300'
                } pt-8 transition-colors duration-300`}
                variants={itemVariants}
              >
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                } italic text-center transition-colors duration-300`}>
                  This Privacy Policy is part of our commitment to creating a safe, transparent, and effective learning environment for Java programming enthusiasts worldwide.
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
                ? 'bg-gradient-to-br from-indigo-900 to-sky-700 border border-indigo-400/30' 
                : 'bg-gradient-to-br from-indigo-600 to-sky-600 border border-indigo-300'
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
              <Shield className="w-16 h-16 mx-auto text-white/90" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4">
              Your Privacy is Our Priority
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We&apos;re committed to protecting your data while you master Java programming. Ready to start your secure learning journey?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning Java
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default PrivacyPage;