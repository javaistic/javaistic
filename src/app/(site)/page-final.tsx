"use client";
import { GitHubIcon } from "@/components/icons";
import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import { easeOut, motion } from "motion/react";
import {
  ArrowRightIcon,
  CodeIcon,
  ExternalLinkIcon,
  FlameIcon,
  HeartIcon,
  RocketIcon,
  SearchIcon,
  SparklesIcon,
  TargetIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after component mounts
    setMounted(true);

    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        // Check for explicit dark class first (most reliable)
        const hasDarkClass =
          document.documentElement.classList.contains("dark");

        // Check for data-theme attribute
        const dataTheme = document.documentElement.getAttribute("data-theme");

        // Check system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;

        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem("theme");

        // Priority: saved theme > data-theme > class > system preference
        const isDark =
          savedTheme === "dark" ||
          dataTheme === "dark" ||
          hasDarkClass ||
          (savedTheme !== "light" &&
            dataTheme !== "light" &&
            systemPrefersDark);

        setIsDarkMode(isDark);
      }
    };

    // Initial check
    checkDarkMode();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => checkDarkMode();
    mediaQuery.addEventListener("change", handleMediaChange);

    // Listen for DOM changes (theme switcher changes)
    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // Listen for localStorage changes (cross-tab theme changes)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        checkDarkMode();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Define particle properties based on theme
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
        duration: 0.4,
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
        duration: 0.4,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Debug indicator for dark mode (remove in production) */}
      {process.env.NODE_ENV === "development" && mounted && (
        <div className="fixed top-4 right-4 z-50 rounded-lg bg-black/80 px-3 py-2 text-xs text-white">
          Theme: {isDarkMode ? "Dark" : "Light"}
        </div>
      )}

      {/* Particles Background */}
      {/* <div
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
      </div> */}
      <div
        className="absolute z-10 w-full opacity-20 sm:h-[1000px] dark:opacity-100"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
      <main className="relative z-20 mx-auto flex max-w-7xl flex-col px-4 text-center sm:px-6 lg:px-10">
        {/* Hero Section */}
        <motion.section
          className="flex flex-col items-center justify-center pt-36 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-funnel-display text-foreground max-w-5xl text-5xl font-bold tracking-tighter sm:text-7xl"
            variants={titleVariants}
          >
            Master{" "}
            {/* <span className="bg-gradient-to-br from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Java{" "}
            </span> */}
            Java Programming efficiently with{" "}
            {/* <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Javaistic{" "}
            </span> */}
            Javaistic
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl text-lg font-medium text-neutral-700 sm:text-xl dark:text-neutral-300"
            variants={itemVariants}
          >
            Interactive, fast-paced learning for absolute beginners to advanced
            learners. <br /> A free and open-source platform to learn Java
            programming.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a href="/docs" variants={titleVariants}>
              <Button
                size="lg"
                className="rounded-lg py-6 text-lg font-semibold duration-200 ease-in-out active:scale-105 dark:hover:bg-white/80"
              >
                Start Learning Now
              </Button>
            </motion.a>

            <motion.a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              variants={titleVariants}
            >
              <Button
                size="lg"
                variant="outline"
                className="dark:text-foreground border-blue rounded-lg py-6 text-lg font-semibold"
              >
                <GitHubIcon className="!size-5" />
                Star on GitHub
              </Button>
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.section>
          <img
            src={
              mounted
                ? isDarkMode
                  ? "/img/docs-dark.png"
                  : "/img/docs-light.png"
                : "/img/docs-dark.png"
            }
            alt="Javaistic Documentation Interface"
            className="mx-auto h-full w-full max-w-7xl rounded-2xl border-4 border-black/5 object-cover object-center transition-opacity duration-300 dark:border-white/5"
            style={{
              mask: "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
            }}
            loading="lazy"
          />
        </motion.section>
        {/* Features Section */}
        <motion.section
          className="flex flex-col items-center justify-center py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="font-funnel-display text-foreground max-w-5xl text-5xl font-bold tracking-tight"
            variants={titleVariants}
          >
            Built for Learners
          </motion.h2>
          <motion.p
            className="mt-4 mb-16 max-w-3xl text-lg font-medium text-neutral-700 dark:text-neutral-300"
            variants={itemVariants}
          >
            Crafted with learners in mind, Javaistic offers a seamless and
            engaging learning experience.
          </motion.p>
          <motion.div
            className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:h-[370px] sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="dark:bg-card group relative cursor-pointer overflow-clip rounded-2xl bg-neutral-100 px-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -8,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/docs")}
            >
              <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.img
                src={
                  mounted && isDarkMode
                    ? "/img/ui-dark.png"
                    : "/img/ui-light.png"
                }
                className="group-hover:rotate-0.5 relative z-10 object-cover px-4 pt-10 pb-4 transition-all duration-300 ease-in-out group-hover:scale-105"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                alt="Beautiful design interface"
                loading="lazy"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.p
                className="relative z-10 mb-6 text-lg font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-blue-400"
                whileHover={{ scale: 1.02 }}
              >
                Beautiful out of the box
              </motion.p>
              <motion.div
                className="absolute right-3 bottom-5 left-3 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                initial={false}
              >
                <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-400">
                  Explore Design →
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="dark:bg-card group relative cursor-pointer overflow-clip rounded-2xl bg-neutral-100 px-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -8,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/programs")}
            >
              <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.img
                src={
                  mounted && isDarkMode
                    ? "/img/playground-dark.png"
                    : "/img/playground-light.png"
                }
                className="group-hover:-rotate-0.5 relative z-10 object-cover px-4 pt-10 pb-6 transition-all duration-300 ease-in-out group-hover:scale-105"
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                alt="Interactive coding playground"
                loading="lazy"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.h3 className="relative z-10 mb-3 text-lg font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-green-600 dark:text-neutral-300 dark:group-hover:text-green-400">
                Interactive coding playgrounds
              </motion.h3>
              <motion.div
                className="absolute right-3 bottom-5 left-3 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                initial={false}
              >
                <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:border-green-400/30 dark:bg-green-400/10 dark:text-green-400">
                  Try Coding →
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="dark:bg-card group relative cursor-pointer overflow-clip rounded-2xl bg-neutral-100 px-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -8,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                window.open("https://github.com/javaistic/javaistic", "_blank")
              }
            >
              <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.img
                src={
                  mounted && isDarkMode
                    ? "/img/os-dark.png"
                    : "/img/os-light.png"
                }
                className="group-hover:rotate-0.5 relative z-10 object-cover px-4 pt-10 pb-4 transition-all duration-300 ease-in-out group-hover:scale-105"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                alt="Open source and free platform"
                loading="lazy"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.p
                className="relative z-10 mb-6 text-lg font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-purple-600 dark:text-neutral-300 dark:group-hover:text-purple-400"
                whileHover={{ scale: 1.02 }}
              >
                Fully open source and free
              </motion.p>
              <motion.div
                className="absolute right-3 bottom-5 left-3 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                initial={false}
              >
                <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-400">
                  View GitHub →
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
        <motion.section
          className="group mx-auto flex w-full max-w-5xl cursor-pointer flex-col items-center justify-center rounded-2xl border transition-all duration-300 hover:border-blue-500/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.02,
          }}
          onClick={() => (window.location.href = "/docs")}
        >
          <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
            <motion.h2
              className="font-funnel-display text-foreground relative z-10 text-center text-4xl font-bold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              variants={titleVariants}
              whileHover={{ scale: 1.05 }}
            >
              Loved by learners. <br />
              Built for everyone.
            </motion.h2>
            <motion.div className="relative z-10 mt-4 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-400">
                Join the Community →
              </span>
            </motion.div>
            <Ripple className="fill-blue-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </motion.section>

        <motion.section
          className="mx-auto my-16 grid w-full max-w-5xl grid-cols-1 gap-4 sm:h-[700px] sm:grid-cols-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 flex cursor-pointer flex-col justify-between gap-2 overflow-hidden rounded-2xl p-6 sm:col-span-5"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <motion.div
              className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex flex-col gap-4 text-left sm:flex-1"
                variants={textVariants}
              >
                <motion.h2
                  className="font-funnel-display text-foreground text-3xl leading-tight font-bold transition-colors duration-300 group-hover:text-violet-600"
                  variants={titleVariants}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  Built with Passion.
                </motion.h2>
                <motion.p
                  className="text-muted-foreground group-hover:text-foreground/80 text-base leading-relaxed transition-colors duration-300"
                  variants={itemVariants}
                >
                  Javaistic is built with the love and dedication of our
                  community. We are committed to providing the best possible
                  learning experience for our users.
                </motion.p>
              </motion.div>
              <motion.div
                className="flex-shrink-0"
                variants={imageVariants}
                whileHover={{
                  scale: 1.02,
                  rotate: 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {mounted && (
                  <img
                    src={
                      isDarkMode
                        ? "/img/guides-dark.svg"
                        : "/img/guides-light.svg"
                    }
                    alt="Community-Driven Learning Platform"
                    className="h-[200px] w-auto rounded-lg object-contain transition-all duration-300 group-hover:shadow-lg sm:h-[270px]"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to single image if theme-specific images don't exist
                      (e.target as HTMLImageElement).src =
                        "/img/home/docs-n.svg";
                    }}
                  />
                )}
                {!mounted && (
                  <div className="bg-muted/50 h-[180px] w-[220px] animate-pulse rounded-lg sm:h-[220px] sm:w-[260px]" />
                )}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative z-10 flex w-full flex-row items-center gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-flex items-center rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-600 transition-all duration-300 hover:border-rose-500/40 hover:bg-rose-500/20 hover:shadow-lg dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-400"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: "0 10px 20px rgba(225, 29, 72, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <TargetIcon className="mr-1 h-4 w-4" />
                </motion.div>
                Quality Focused
              </motion.span>
              <motion.span
                className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-600 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/20 hover:shadow-lg dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-400"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{
                    y: [0, -5, 0],
                    transition: { duration: 0.6, repeat: Infinity },
                  }}
                >
                  <RocketIcon className="mr-1 h-4 w-4" />
                </motion.div>
                Always Improving
              </motion.span>
              <motion.span
                className="inline-flex items-center rounded-full border border-violet-500/20 bg-purple-500/10 via-transparent px-3 py-1.5 text-xs font-semibold text-purple-600 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/20 hover:shadow-lg dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-400"
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: "0 10px 20px rgba(147, 51, 234, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.5 },
                  }}
                >
                  <HeartIcon className="mr-1 h-4 w-4" />
                </motion.div>
                Community Driven
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 flex h-[370px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl px-6 pt-6 sm:col-span-3 sm:h-full"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <motion.h2
                className="font-funnel-display text-foreground text-3xl font-bold transition-colors duration-300 group-hover:text-blue-600"
                variants={titleVariants}
                whileHover={{
                  scale: 1.02,
                }}
              >
                Responsive Design.
              </motion.h2>
              <motion.p className="text-muted-foreground group-hover:text-foreground/80 mt-4 transition-colors duration-300">
                Our platform is fully responsive, ensuring a seamless experience
                on any device.
              </motion.p>
            </div>
            <motion.div
              className="border-muted-foreground relative z-10 flex h-[65%] flex-col items-center justify-center overflow-clip rounded-t-3xl border border-b-0 p-1 pb-0 transition-colors duration-300 group-hover:border-blue-600"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="border-muted-foreground flex h-full w-full rounded-t-[20px] border border-b-0 transition-colors duration-300 group-hover:border-blue-500"
                style={{
                  backgroundImage:
                    mounted && isDarkMode
                      ? "url('/img/responsive-dark.png')"
                      : "url('/img/responsive-light.png')",
                  backgroundSize: "cover",
                }}
              >
                <div className="border-muted-foreground m-1 flex h-full w-full items-start justify-center rounded-t-[16px] border border-b-0 transition-colors duration-300 group-hover:border-blue-300/50">
                  <motion.div
                    className="text-muted-foreground border-muted-foreground mt-2 h-5 w-5 rounded-full border bg-black transition-colors duration-300"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)",
                    }}
                  >
                    <motion.div
                      className="text-muted-foreground border-muted-foreground mt-[1.2px] ml-[1.2px] h-4 w-4 rounded-full border bg-black transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 h-[300px] cursor-pointer overflow-visible rounded-2xl p-6 sm:col-span-2 sm:h-full"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <motion.div className="relative z-10 flex h-full flex-col justify-between">
              <motion.div
                className="flex flex-1 items-center justify-center"
                whileHover={{
                  rotate: [0, -2, 2, -2, 0],
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <ZapIcon className="text-foreground h-24 w-24 stroke-amber-400 stroke-[0.5px] filter transition-all duration-300 ease-in-out group-hover:fill-amber-500 group-hover:stroke-amber-500 group-hover:drop-shadow-lg sm:h-32 sm:w-32" />
              </motion.div>
              <motion.div className="flex flex-col gap-3">
                <motion.h2
                  className="font-funnel-display text-foreground text-left text-2xl font-bold transition-colors duration-300 group-hover:text-amber-500 sm:text-3xl"
                  variants={titleVariants}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  Lightning <i>Fast.</i>
                </motion.h2>
                <motion.div className="translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400">
                    <ZapIcon className="mr-1 h-3 w-3" />
                    Optimized Performance
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 flex cursor-pointer flex-col justify-between gap-6 overflow-hidden rounded-2xl p-6 sm:col-span-6 sm:flex-row sm:items-center"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <motion.div
              className="relative z-10 flex flex-col gap-4 text-left sm:flex-1"
              variants={textVariants}
            >
              <motion.h2
                className="font-funnel-display text-foreground text-3xl leading-tight font-bold transition-colors duration-300 group-hover:text-green-600"
                variants={titleVariants}
                whileHover={{
                  scale: 1.02,
                }}
              >
                Advanced Search.
              </motion.h2>
              <motion.p
                className="text-muted-foreground group-hover:text-foreground/80 text-lg leading-relaxed transition-colors duration-300"
                variants={itemVariants}
              >
                Find what you need quickly with our powerful search features and
                intelligent filtering.
              </motion.p>
              <div className="flex flex-wrap items-center gap-2">
                <motion.span
                  className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-600 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/20 hover:shadow-lg dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-400"
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <SearchIcon className="mr-1 h-4 w-4" />
                  </motion.div>
                  Smart Search
                </motion.span>
                <motion.span
                  className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-600 transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/20 hover:shadow-lg dark:border-green-400/30 dark:bg-green-400/10 dark:text-green-400"
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(34, 197, 94, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <SparklesIcon className="mr-1 h-4 w-4" />
                  </motion.div>
                  Auto-Updated
                </motion.span>
                <motion.span
                  className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-600 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/20 hover:shadow-lg dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-400"
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(249, 115, 22, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{
                      scale: [1, 1.2, 1.1, 1.3, 1],
                      rotate: [0, 10, -10, 5, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <FlameIcon className="mr-1 h-4 w-4" />
                  </motion.div>
                  Most Popular
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              className="relative z-10 flex-shrink-0 sm:ml-6"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {mounted && (
                <motion.img
                  src={
                    isDarkMode
                      ? "/img/search-dark.png"
                      : "/img/search-light.png"
                  }
                  alt="Advanced Search Interface"
                  className="h-[200px] w-auto rounded-lg object-contain transition-all duration-300 group-hover:shadow-xl sm:h-[250px]"
                  loading="lazy"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
              {/* Fallback image while mounting or if images fail to load */}
              {!mounted && (
                <div className="bg-muted/50 h-[200px] w-[250px] animate-pulse rounded-lg sm:h-[250px] sm:w-[300px]" />
              )}
            </motion.div>
          </motion.div>
          {/* <motion.div className="bg-secondary dark:bg-card col-span-1 h-full rounded-2xl p-6">
            <motion.h2
              className="font-funnel-display text-foreground text-4xl font-bold"
              variants={titleVariants}
            >
              @javaistic
            </motion.h2>
          </motion.div> */}
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-4 sm:px-10 md:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="mt-5 mb-4 text-center" variants={itemVariants}>
            <h1 className="font-funnel-display text-4xl font-bold sm:text-5xl">
              Why learn Java with Javaistic?
            </h1>
            <p className="mx-auto mt-4 text-lg font-medium dark:text-neutral-400">
              Designed to make learning Java fun, practical, and truly
              beginner-friendly.
            </p>
          </motion.div>

          {/* Section: Docs */}
          <motion.article
            className="mx-auto mb-10 flex flex-col items-center py-10 sm:flex-row sm:space-x-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="w-full transition-transform duration-300 hover:-translate-y-2 hover:scale-105 sm:w-1/2"
              variants={imageVariants}
            >
              <Image
                src="/img/home/docs.svg"
                alt="Javaistic Docs"
                width={1213}
                height={1023}
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/img/home/docs.svg"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full text-left sm:w-1/2"
              variants={textVariants}
            >
              <h2 className="font-funnel-display mb-6 text-3xl font-extrabold text-neutral-900 sm:text-4xl dark:text-white">
                Quality over Quantity
              </h2>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed font-medium">
                We focus on quality — not noise. Every piece of content is
                crafted to be clear, engaging, and easy to understand. Learn
                Java with beautifully designed, beginner-friendly docs — all
                completely free.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/docs">
                  <Button size="lg" className="text-lg font-semibold">
                    <span className="flex items-center">
                      Explore the Docs
                      <ArrowRightIcon className="ml-2 !size-5" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>

          {/* Section: Coding */}
          <motion.article
            className="flex flex-col-reverse items-center space-y-10 py-14 sm:flex-row sm:space-y-0 sm:space-x-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="w-full text-left sm:w-1/2"
              variants={textVariants}
            >
              <h2 className="font-funnel-display text-foreground mb-6 text-3xl font-extrabold sm:text-4xl">
                Coding Made Fun
              </h2>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed font-medium">
                Jump into hands-on coding right away or explore our step-by-step
                breakdowns of real Java programs. Whether you&apos;re a beginner
                or brushing up, it&apos;s coding made enjoyable.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/programs">
                  <Button size="lg" className="text-lg font-semibold">
                    <span className="flex items-center">
                      <CodeIcon className="mr-2 !size-5" />
                      Try a Program Now
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full transition-transform duration-300 hover:-translate-y-2 hover:scale-105 sm:w-1/2"
              variants={imageVariants}
            >
              <Image
                src="/img/home/programs.svg"
                alt="Javaistic Programs"
                width={1213}
                height={1023}
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/img/home/programs.svg"
                loading="lazy"
              />
            </motion.div>
          </motion.article>

          {/* Section: GitHub */}
          <motion.article
            className="flex flex-col items-center space-y-10 py-14 sm:flex-row sm:space-y-0 sm:space-x-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="w-full transition-transform duration-300 hover:-translate-y-2 hover:scale-105 sm:w-1/2"
              variants={imageVariants}
            >
              <Image
                src="/img/home/open-source.svg"
                alt="Javaistic GitHub"
                width={613}
                height={521}
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/img/home/open-source.svg"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full text-left sm:w-1/2"
              variants={textVariants}
            >
              <h2 className="font-funnel-display text-foreground mb-6 text-3xl font-extrabold sm:text-4xl">
                Built Together.
                <br className="hidden lg:inline-block" />
                Fork it. Improve it.
              </h2>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed font-medium">
                Javaistic is fully open source — built by and for learners like
                you. Fork it, contribute, and shape the future of Java education
                with us.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://github.com/javaistic/javaistic"
                  target="_blank"
                >
                  <Button size="lg" className="text-lg font-semibold">
                    <span className="flex items-center">
                      Contribute on GitHub
                      <ExternalLinkIcon className="ml-2 !size-5" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="mx-auto w-full max-w-5xl py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 to-sky-700 px-6 py-16 text-center text-white shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-funnel-display mb-4 text-4xl font-bold">
              Ready to become a Java Pro?
            </h2>
            <p className="dark:text-secondary-foreground mb-8 text-lg font-medium">
              Begin your Java journey now — no credit card, no sign-up, just
              pure learning.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/docs">
                <Button
                  size="lg"
                  className="inline-flex items-center bg-white text-lg font-semibold text-black hover:bg-white"
                >
                  Start Learning
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
