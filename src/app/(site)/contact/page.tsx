"use client";
import { motion, easeOut } from "framer-motion";
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Users, 
  MapPin, 
  Clock, 
  Send, 
  Phone, 
  Globe,
  BookOpen,
  Bug,
  Lightbulb,
  Heart,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

interface FormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

const ContactUsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const contactMethods = [
    { 
      title: "General Inquiries", 
      url: "#general", 
      icon: <Mail className="w-4 h-4" />,
      description: "Questions about Javaistic platform"
    },
    { 
      title: "Technical Support", 
      url: "#support", 
      icon: <Bug className="w-4 h-4" />,
      description: "Issues with learning platform"
    },
    { 
      title: "Community", 
      url: "#community", 
      icon: <Users className="w-4 h-4" />,
      description: "Join our programming community"
    },
    { 
      title: "Contributions", 
      url: "#contribute", 
      icon: <Github className="w-4 h-4" />,
      description: "Contribute to open source"
    },
    { 
      title: "Partnerships", 
      url: "#partnerships", 
      icon: <Heart className="w-4 h-4" />,
      description: "Collaborate with us"
    },
    { 
      title: "Feedback", 
      url: "#feedback", 
      icon: <Lightbulb className="w-4 h-4" />,
      description: "Share your suggestions"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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
            Contact{" "}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground mt-6 max-w-6xl text-lg sm:text-xl"
            variants={itemVariants}
          >
            We'd love to hear from you! Whether you have questions, feedback, or want to contribute to our open-source Java learning platform.
          </motion.p>
          
          <motion.div
            className={`mt-8 text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            } space-y-1 transition-colors duration-300`}
            variants={itemVariants}
          >
            <p><span className="font-semibold">Response Time:</span> Usually within 24 hours</p>
            <p><span className="font-semibold">Support Hours:</span> Monday - Friday, 9 AM - 6 PM UTC</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Methods Sidebar */}
          <motion.div
            className="lg:w-1/3"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-8 space-y-6">
              <motion.div 
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 shadow-2xl transition-colors duration-300"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  How can we help?
                </h3>
                <nav className="space-y-3">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.url}
                      className="block p-4 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-500/10 transition-all duration-200 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start">
                        <span className="mr-3 text-blue-500 group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors mt-1">
                          {method.icon}
                        </span>
                        <div>
                          <div className="font-semibold mb-1">{method.title}</div>
                          <div className="text-xs opacity-70">{method.description}</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Quick Contact Info */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-6 shadow-2xl transition-colors duration-300"
                variants={itemVariants}
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Email</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">uiuxarghya@gmail.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Github className="w-5 h-5 text-purple-500 dark:text-purple-400 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">github.com/javaistic</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Users className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Community</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">Join our Discord</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg dark:bg-gray-900/70 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl transition-colors duration-300">
              
              {/* Form Header */}
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    Send us a Message
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Fill out the form below and we'll get back to you as soon as possible. We value your feedback and are here to help!
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} className="transition-transform">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} className="transition-transform">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} className="transition-transform">
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="contribution">Contribution</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} className="transition-transform">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Brief description of your inquiry"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ y: -2 }} className="transition-transform">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please provide as much detail as possible about your inquiry..."
                  />
                </motion.div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-xl"
                  >
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 rounded-xl"
                  >
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Contact Sections */}
        <motion.div
          className="mt-20 space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* General Inquiries */}
          <motion.section id="general" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                General Inquiries
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-200 dark:border-blue-500/30 rounded-xl p-6 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Platform Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Have questions about Javaistic's features, learning paths, or how to get started? We're here to help you navigate your Java learning journey.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Course structure and learning paths</li>
                  <li>• Platform features and tools</li>
                  <li>• Account setup and management</li>
                  <li>• General platform usage</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl p-6 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Educational Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Need guidance on your Java learning path or have questions about programming concepts? Our education team is ready to assist.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Learning path recommendations</li>
                  <li>• Study tips and strategies</li>
                  <li>• Career guidance in Java development</li>
                  <li>• Resource recommendations</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Technical Support */}
          <motion.section id="support" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Technical Support
              </h2>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-500/20 dark:to-red-500/20 border border-orange-200 dark:border-orange-500/30 rounded-xl p-8 transition-colors duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Bug Reports
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Found a bug? Help us improve by reporting issues you encounter.
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-xs">
                    <li>• Detailed error descriptions</li>
                    <li>• Browser and device info</li>
                    <li>• Steps to reproduce</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Platform Issues
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Experiencing technical difficulties with the learning platform?
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-xs">
                    <li>• Login and access issues</li>
                    <li>• Code editor problems</li>
                    <li>• Progress tracking errors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Platform running slow or not performing as expected?
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-xs">
                    <li>• Slow loading times</li>
                    <li>• Compilation issues</li>
                    <li>• Browser compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Community & Contributions */}
          <motion.section id="community" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Community & Open Source
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-200 dark:border-green-500/30 rounded-xl p-6 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-green-500 dark:text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Join Our Community
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Connect with fellow Java learners, share knowledge, and get help from our vibrant community.
                </p>
                <div className="space-y-3">
                  <motion.a 
                    href="#"
                    className="flex items-center p-3 bg-white dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <MessageSquare className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Discord Server</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Real-time chat and discussions</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-500" />
                  </motion.a>
                  
                  <motion.a 
                    href="https://github.com/orgs/javaistic/discussions"
                    className="flex items-center p-3 bg-white dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <BookOpen className="w-5 h-5 text-purple-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub Discussions</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Q&A and knowledge sharing</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-purple-500" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl p-6 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <Github className="w-8 h-8 text-purple-500 dark:text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Contribute to Open Source
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Help improve Javaistic by contributing code, documentation, or educational content.
                </p>
                <div className="space-y-3">
                  <motion.a 
                    href="https://github.com/javaistic/javaistic"
                    className="flex items-center p-3 bg-white dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">GitHub Repository</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">View source code and contribute</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                  </motion.a>
                  
                  <motion.a 
                    href="https://github.com/javaistic/javaistic/blob/main/CONTRIBUTING.md"
                    className="flex items-center p-3 bg-white dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <BookOpen className="w-5 h-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Contributor Guidelines</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Learn how to contribute</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-orange-500" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Office Information */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Our Information
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/20 dark:to-blue-500/20 border border-indigo-200 dark:border-indigo-500/30 rounded-xl p-6 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Support Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM UTC</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM UTC</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    Community support available 24/7 through our Discord server
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-200 dark:border-green-500/30 rounded-xl p-6 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-green-500 dark:text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Global Reach
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-semibold">Headquarters:</span> Remote-First</p>
                  <p><span className="font-semibold">Team Location:</span> India</p>
                  <p><span className="font-semibold">Languages:</span> English (Primary)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    Our distributed team serves learners globally
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-500/30 rounded-xl p-6 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-purple-500 dark:text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p className="text-sm">
                    Making quality Java programming education accessible to everyone, regardless of background or economic circumstances.
                  </p>
                  <p className="text-sm">
                    Building a supportive community where learners can grow and succeed together.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "How quickly do you respond to inquiries?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, we aim to respond within a few hours.",
                  color: "blue"
                },
                {
                  question: "Is Javaistic really completely free?",
                  answer: "Yes! Our core educational content and platform features are completely free. We believe in making quality programming education accessible to everyone.",
                  color: "green"
                },
                {
                  question: "How can I contribute to the project?",
                  answer: "You can contribute code, documentation, educational content, or translations. Check our GitHub repository for open issues and contribution guidelines.",
                  color: "purple"
                },
                {
                  question: "Do you offer personalized learning support?",
                  answer: "While we don't offer one-on-one tutoring, our community forum and Discord server provide excellent peer support and guidance from experienced developers.",
                  color: "orange"
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r from-${faq.color}-50 to-${faq.color === 'blue' ? 'cyan' : faq.color === 'green' ? 'emerald' : faq.color === 'purple' ? 'pink' : 'red'}-50 dark:from-${faq.color}-500/20 dark:to-${faq.color === 'blue' ? 'cyan' : faq.color === 'green' ? 'emerald' : faq.color === 'purple' ? 'pink' : 'red'}-500/20 border border-${faq.color}-200 dark:border-${faq.color}-500/30 rounded-xl p-6 transition-colors duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

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
              <Mail className="w-16 h-16 mx-auto text-white/90" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're here to help! Don't hesitate to reach out through any of our contact methods. Our team and community are always ready to assist you on your Java learning journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Join Discord Community
              </motion.a>
              
              <motion.a
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Documentation
              </motion.a>
            </div>

            <motion.div 
              className="mt-8 text-white/70 text-sm"
              variants={itemVariants}
            >
              <p>Quick response • Friendly support • Active community</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactUsPage;