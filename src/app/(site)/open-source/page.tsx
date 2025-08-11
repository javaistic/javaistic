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
  Download, 
  BookOpen,
  Zap,
  Shield,
  Globe,
  Coffee,
  Terminal,
  Eye,
  GitBranch,
  Bug,
  Lightbulb
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
      transition: { duration: 0.2, ease: easeOut }
    }
  };

  // Repository stats (you can replace these with real API data)
  const repoStats = {
    stars: "36",
    forks: "19",
    issues: "5",
    contributors: "15"
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Hands-on Java programming exercises with instant feedback and code execution.",
      color: "blue"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Modern Architecture",
      description: "Built with Next.js, TypeScript, and modern web technologies for optimal performance.",
      color: "yellow"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Open collaboration with developers worldwide contributing to Java education.",
      color: "green"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Focused",
      description: "Comprehensive testing, code reviews, and continuous integration workflows.",
      color: "purple"
    }
  ];

  const contributionAreas = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Contributions",
      description: "Help build new features, fix bugs, and improve the platform architecture.",
      skills: ["TypeScript","Next.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Content",
      description: "Create Java tutorials, exercises, and learning materials for the community.",
      skills: ["Java", "Technical Writing", "Curriculum Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Testing & QA",
      description: "Identify issues, test new features, and help maintain code quality.",
      skills: ["Testing", "Bug Reporting", "QA Processes"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ideas & Design",
      description: "Contribute UX/UI improvements and innovative feature suggestions.",
      skills: ["UI/UX Design", "User Research", "Product Strategy"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const quickStats = [
    { label: "GitHub Stars", value: repoStats.stars, icon: <Star className="w-5 h-5" /> },
    { label: "Forks", value: repoStats.forks, icon: <GitFork className="w-5 h-5" /> },
    { label: "Contributors", value: repoStats.contributors, icon: <Users className="w-5 h-5" /> },
    { label: "Open Issues", value: repoStats.issues, icon: <Bug className="w-5 h-5" /> }
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
            <Github className="w-20 h-20 mx-auto text-gray-800 dark:text-white" />
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
            className="text-muted-foreground mt-6 max-w-4xl mx-auto text-lg sm:text-xl"
            variants={itemVariants}
          >
            Javaistic is a free, open-source platform that makes Java programming accessible to everyone. 
            Join our community of developers building the future of programming education.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </motion.a>
            
            <motion.a
              href="https://github.com/javaistic/javaistic/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitFork className="w-5 h-5 mr-2" />
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 text-center shadow-lg transition-colors duration-300"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div className="text-blue-500 dark:text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
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
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Open Source?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe that education should be free, transparent, and collaborative. 
              Open source enables us to build something truly special together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg transition-colors duration-300"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500 to-${feature.color === 'blue' ? 'cyan' : feature.color === 'yellow' ? 'orange' : feature.color === 'green' ? 'emerald' : 'pink'}-500 rounded-xl flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
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
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How You Can Contribute
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you're a developer, educator, designer, or enthusiast, there's a place for you 
              in our community. Here's how you can help shape the future of Java education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contributionAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg transition-colors duration-300"
                variants={itemVariants}
                whileHover={cardHoverVariants.hover}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
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
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to contribute? Here's your quick start guide to joining the Javaistic community.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Terminal className="w-6 h-6 mr-3 text-green-500" />
                  Quick Setup
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Fork the Repository</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Click the fork button on our GitHub repository to create your own copy.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Clone Locally</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                          git clone https://github.com/javaistic/javaistic.git
                        </code>
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Install Dependencies</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                          npm install && npm run dev
                        </code>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Coffee className="w-6 h-6 mr-3 text-orange-500" />
                  Community Guidelines
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      📋 Read Our Contributing Guide
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Check our CONTRIBUTING.md for detailed guidelines on code style, commit messages, and pull request process.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      🤝 Join Our Discord
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Connect with other contributors, ask questions, and collaborate on new features.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      🎯 Pick Your First Issue
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Look for issues labeled "good first issue" or "help wanted" to get started.
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
                ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border border-purple-400/30' 
                : 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 border border-purple-300'
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
              <Heart className="w-16 h-16 mx-auto text-red-400" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Help us democratize Java programming education. Together, we can build something 
              that empowers millions of learners worldwide to master programming.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/javaistic/javaistic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 mr-2" />
                Contribute Now
              </motion.a>
              
              <motion.a
                href="https://github.com/javaistic/javaistic/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-5 h-5 mr-2" />
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