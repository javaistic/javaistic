"use client";
import HomeTabs from "@/components/home/home-tabs";
import { GitHubIcon } from "@/components/icons";
import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";
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
import { useMemo } from "react";

// Reusable animation configurations with performance optimizations
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        ease: easeOut,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  },
  title: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  },
  imageFromLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  },
  textFromRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  },
};

// Optimized hover animations with reduced complexity
const HOVER_ANIMATIONS = {
  card: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.2, ease: easeOut },
  },
  cardSubtle: {
    scale: 1.01,
    y: -2,
    transition: { duration: 0.2, ease: easeOut },
  },
  button: {
    scale: 1.02,
    transition: { duration: 0.15, ease: easeOut },
  },
  image: {
    scale: 1.02,
    transition: { duration: 0.2, ease: easeOut },
  },
};

// Feature Card Component for better reusability
interface FeatureCardProps {
  title: string;
  imageSrc: string;
  buttonText: string;
  buttonColor: string;
  gradientColors: string;
  onClick: () => void;
  imageRotation?: number;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

function FeatureCard({
  title,
  imageSrc,
  buttonText,
  buttonColor,
  gradientColors,
  onClick,
  imageRotation = 0.5,
  imageAlt,
  imageWidth = 400,
  imageHeight = 300,
}: FeatureCardProps) {
  return (
    <motion.div
      className="dark:bg-card group relative cursor-pointer overflow-clip rounded-2xl bg-neutral-100 px-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      variants={ANIMATION_VARIANTS.item}
      whileHover={HOVER_ANIMATIONS.card}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <motion.div
        className={`absolute inset-0 rounded-2xl ${gradientColors} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <Image
        src={imageSrc}
        className={`relative z-10 object-cover px-4 pt-10 pb-4 transition-all duration-300 ease-in-out group-hover:scale-105 ${
          imageRotation > 0
            ? "group-hover:rotate-0.5"
            : "group-hover:-rotate-0.5"
        }`}
        alt={imageAlt}
        loading="lazy"
        width={imageWidth}
        height={imageHeight}
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
        }}
      />
      <motion.h4
        className={`relative z-10 mb-6 text-lg font-semibold text-neutral-700 transition-colors duration-300 dark:text-neutral-300`}
      >
        {title}
      </motion.h4>
      <motion.div
        className="absolute right-3 bottom-5 left-3 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        initial={false}
      >
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${buttonColor.replace("group-hover:", "")}`}
        >
          {buttonText}
        </span>
      </motion.div>
    </motion.div>
  );
}

// Badge Component for consistency with accessibility improvements
interface BadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  colorClass: string;
  hoverAnimation?: any;
}

function Badge({
  icon: Icon,
  text,
  colorClass,
  hoverAnimation = {},
}: BadgeProps) {
  return (
    <motion.span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 select-none ${colorClass}`}
      whileHover={hoverAnimation}
      whileTap={{ scale: 0.95 }}
      role="status"
      aria-label={text}
    >
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
        className="mr-1"
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </motion.div>
      {text}
    </motion.span>
  );
}

export default function HomePage() {
  const { isDarkMode, mounted } = useDarkMode();

  // Memoized feature cards data
  const featureCards = useMemo(
    () => [
      {
        title: "Beautiful out of the box",
        imageSrc:
          mounted && isDarkMode ? "/img/ui-dark.png" : "/img/ui-light.png",
        buttonText: "Explore Design →",
        buttonColor:
          "group-hover:text-blue-600 dark:group-hover:text-blue-400 border-blue-500/20 bg-blue-500/10 text-blue-600 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-400",
        gradientColors: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
        onClick: () => (window.location.href = "/docs"),
        imageRotation: 0.5,
        imageAlt:
          "Beautiful user interface design showcasing Javaistic's clean and modern look",
        imageWidth: 400,
        imageHeight: 300,
      },
      {
        title: "Interactive coding playgrounds",
        imageSrc:
          mounted && isDarkMode
            ? "/img/playground-dark.png"
            : "/img/playground-light.png",
        buttonText: "Try Coding →",
        buttonColor:
          "group-hover:text-green-600 dark:group-hover:text-green-400 border-green-500/20 bg-green-500/10 text-green-600 dark:border-green-400/30 dark:bg-green-400/10 dark:text-green-400",
        gradientColors: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        onClick: () => (window.location.href = "/programs"),
        imageRotation: -0.5,
        imageAlt:
          "Interactive coding playground interface for hands-on Java learning",
        imageWidth: 400,
        imageHeight: 300,
      },
      {
        title: "Fully open source and free",
        imageSrc:
          mounted && isDarkMode ? "/img/os-dark.png" : "/img/os-light.png",
        buttonText: "View GitHub →",
        buttonColor:
          "group-hover:text-purple-600 dark:group-hover:text-purple-400 border-purple-500/20 bg-purple-500/10 text-purple-600 dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-400",
        gradientColors: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
        onClick: () =>
          window.open("https://github.com/javaistic/javaistic", "_blank"),
        imageRotation: 0.5,
        imageAlt: "Open source community collaboration and GitHub repository",
        imageWidth: 400,
        imageHeight: 300,
      },
    ],
    [mounted, isDarkMode],
  );

  return (
    <div className="relative min-h-screen">
      {/* Development theme indicator */}
      {process.env.NODE_ENV === "development" && mounted && (
        <div className="fixed top-4 right-4 z-50 rounded-lg bg-black/80 px-3 py-2 text-xs text-white">
          Theme: {isDarkMode ? "Dark" : "Light"}
        </div>
      )}

      {/* Background */}
      <div
        className="absolute z-10 w-full opacity-20 sm:h-[1000px] dark:opacity-100"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      <main className="relative z-20 mx-auto flex max-w-7xl flex-col px-4 text-center sm:px-6 lg:px-10">
        {/* Hero Section */}
        <motion.section
          className="flex flex-col items-center justify-center pt-36 pb-14"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
          role="banner"
          aria-labelledby="hero-title"
        >
          <motion.h1
            id="hero-title"
            className="font-funnel-display text-foreground max-w-5xl text-5xl font-bold tracking-tighter sm:text-7xl"
            variants={ANIMATION_VARIANTS.title}
          >
            Master Java Programming efficiently with Javaistic
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl text-lg font-medium text-neutral-700 sm:text-xl dark:text-neutral-300"
            variants={ANIMATION_VARIANTS.item}
            role="complementary"
            aria-label="Hero description"
          >
            Interactive, fast-paced learning for absolute beginners to advanced
            learners.
            <br /> A free and open-source platform to learn Java programming.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            animate="visible"
          >
            <motion.a href="/docs" variants={ANIMATION_VARIANTS.title}>
              <Button
                size="lg"
                className="cursor-pointer rounded-lg py-6 text-lg font-semibold duration-200 ease-in-out active:scale-105 dark:hover:bg-white/80"
                aria-label="Start learning Java programming with our documentation"
              >
                Start Learning Now
              </Button>
            </motion.a>
            <motion.a
              href="https://github.com/javaistic/javaistic"
              target="_blank"
              rel="noopener noreferrer"
              variants={ANIMATION_VARIANTS.title}
            >
              <Button
                size="lg"
                variant="outline"
                className="dark:text-foreground border-blue cursor-pointer rounded-lg py-6 text-lg font-semibold"
                aria-label="View Javaistic project on GitHub"
              >
                <GitHubIcon className="!size-5" aria-hidden="true" />
                Star on GitHub
              </Button>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Documentation Preview */}
        <HomeTabs />
        {/* <motion.section variants={ANIMATION_VARIANTS.item}>
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
        </motion.section> */}

        {/* Features Section */}
        <motion.section
          className="flex flex-col items-center justify-center py-24"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
          role="region"
          aria-labelledby="features-title"
        >
          <motion.h2
            id="features-title"
            className="font-funnel-display text-foreground max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl"
            variants={ANIMATION_VARIANTS.title}
          >
            Crafted for Learners
          </motion.h2>
          <motion.p
            className="mt-4 mb-16 max-w-3xl text-lg font-medium text-neutral-700 dark:text-neutral-300"
            variants={ANIMATION_VARIANTS.item}
          >
            At Javaistic, every feature is designed to make learning effortless
            and inspiring.
          </motion.p>
          <motion.div
            className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:h-[370px] sm:grid-cols-3"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            animate="visible"
            role="group"
            aria-label="Key features of Javaistic"
          >
            {featureCards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </motion.div>
        </motion.section>

        {/* Community Section */}
        <motion.section
          className="group mx-auto mb-12 flex w-full max-w-5xl cursor-pointer flex-col items-center justify-center rounded-2xl border transition-all duration-300 hover:border-blue-500/50"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          onClick={() => (window.location.href = "/about")}
        >
          <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <motion.h2
              className="font-funnel-display text-foreground relative z-10 text-center text-4xl font-bold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              variants={ANIMATION_VARIANTS.title}
              whileHover={{ scale: 1.05 }}
            >
              Inspiring learners. <br />
              Empowering all.
            </motion.h2>
            <motion.div className="relative z-10 mt-6 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-400">
                Our Vision →
              </span>
            </motion.div>
            <Ripple className="fill-blue-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </motion.section>

        {/* Bento Grid Section */}
        <motion.section
          className="mx-auto my-16 grid w-full max-w-5xl grid-cols-1 gap-4 sm:h-[700px] sm:grid-cols-8"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate="visible"
        >
          {/* Built with Passion - Large Card */}
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 flex cursor-pointer flex-col justify-between gap-2 overflow-hidden rounded-2xl p-6 sm:col-span-5"
            variants={ANIMATION_VARIANTS.item}
            whileHover={HOVER_ANIMATIONS.cardSubtle}
            whileTap={{
              scale: 0.98,
              boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100" />

            <motion.div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start">
              <motion.div className="col-span-2 flex flex-col gap-4 text-left sm:flex-1">
                <motion.h2
                  className="font-funnel-display text-foreground text-3xl leading-tight font-bold transition-colors duration-300 select-none group-hover:text-violet-600 group-active:text-violet-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.02 }}
                >
                  Built with Passion.
                </motion.h2>
                <motion.p className="text-muted-foreground group-hover:text-foreground/80 group-active:text-foreground/80 text-base leading-relaxed transition-colors duration-300 select-none">
                  Javaistic is built with the love and dedication of our
                  community. We are committed to providing the best possible
                  learning experience for our users.
                </motion.p>
              </motion.div>

              <motion.div
                className="col-span-3 flex-shrink-0"
                whileHover={{ scale: 1.02, rotate: 1 }}
                whileTap={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {mounted ? (
                  <Image
                    src={isDarkMode ? "/img/ui-dark.png" : "/img/ui-light.png"}
                    alt="Community-Driven Learning Platform"
                    className="h-[200px] w-full rounded-lg border object-contain transition-all duration-300 group-hover:shadow-lg group-active:shadow-lg sm:h-[250px]"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                ) : (
                  <div className="bg-muted/50 h-[180px] w-[220px] animate-pulse rounded-lg sm:h-[220px] sm:w-[260px]" />
                )}
              </motion.div>
            </motion.div>

            {/* Feature Badges */}
            <motion.div className="relative z-10 flex w-full flex-row flex-wrap items-center gap-2">
              {[
                {
                  icon: TargetIcon,
                  text: "Quality Focused",
                  colorClass:
                    "border-rose-500/20 bg-rose-500/10 text-rose-600 hover:border-rose-500/40 hover:bg-rose-500/20 hover:shadow-lg dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-400",
                  hoverAnimation: {
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(225, 29, 72, 0.2)",
                  },
                },
                {
                  icon: RocketIcon,
                  text: "Always Improving",
                  colorClass:
                    "border-cyan-500/20 bg-cyan-500/10 text-cyan-600 hover:border-cyan-500/40 hover:bg-cyan-500/20 hover:shadow-lg dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-400",
                  hoverAnimation: {
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(6, 182, 212, 0.2)",
                  },
                },
                {
                  icon: HeartIcon,
                  text: "Community Driven",
                  colorClass:
                    "border-violet-500/20 bg-purple-500/10 text-purple-600 hover:border-purple-500/40 hover:bg-purple-500/20 hover:shadow-lg dark:border-purple-400/30 dark:bg-purple-400/10 dark:text-purple-400",
                  hoverAnimation: {
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(147, 51, 234, 0.2)",
                  },
                },
              ].map((badge, index) => (
                <Badge
                  key={index}
                  icon={badge.icon}
                  text={badge.text}
                  colorClass={badge.colorClass}
                  hoverAnimation={badge.hoverAnimation}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Responsive Design Card */}
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 flex h-[370px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl px-6 pt-6 sm:col-span-3 sm:h-full"
            variants={ANIMATION_VARIANTS.item}
            whileHover={HOVER_ANIMATIONS.cardSubtle}
            whileTap={{
              scale: 0.98,
              boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100" />
            <div className="relative z-10">
              <motion.h2
                className="font-funnel-display text-foreground text-3xl font-bold transition-colors duration-300 select-none group-hover:text-blue-600 group-active:text-blue-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.02 }}
              >
                Responsive Design.
              </motion.h2>
              <motion.p className="text-muted-foreground group-hover:text-foreground/80 group-active:text-foreground/80 mt-4 transition-colors duration-300 select-none">
                Our platform is fully responsive, ensuring a seamless experience
                on any device.
              </motion.p>
            </div>
            <motion.div
              className="border-muted-foreground relative z-10 flex h-[65%] flex-col items-center justify-center overflow-clip rounded-t-3xl border border-b-0 p-1 pb-0 transition-colors duration-300 group-hover:border-blue-600 group-active:border-blue-600"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 1.05, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="border-muted-foreground flex h-full w-full rounded-t-[20px] border border-b-0 transition-colors duration-300 group-hover:border-blue-500 group-active:border-blue-500"
                style={{
                  backgroundImage:
                    mounted && isDarkMode
                      ? "url('/img/responsive-dark.png')"
                      : "url('/img/responsive-light.png')",
                  backgroundSize: "cover",
                }}
              >
                <div className="border-muted-foreground m-1 flex h-full w-full items-start justify-center rounded-t-[16px] border border-b-0 transition-colors duration-300 group-hover:border-blue-300/50 group-active:border-blue-300/50">
                  <motion.div
                    className="text-muted-foreground border-muted-foreground mt-2 h-5 w-5 rounded-full border bg-black transition-colors duration-300"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)",
                    }}
                    whileTap={{
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(37, 99, 235, 0.7)",
                    }}
                  >
                    <motion.div
                      className="text-muted-foreground border-muted-foreground mt-[1.2px] ml-[1.2px] h-4 w-4 rounded-full border bg-black transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      whileTap={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Lightning Fast Card */}
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 h-[300px] cursor-pointer overflow-visible rounded-2xl p-6 sm:col-span-2 sm:h-full"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100" />
            <motion.div className="relative z-10 flex h-full flex-col justify-between">
              <motion.div
                className="flex flex-1 items-center justify-center"
                whileHover={{
                  rotate: [0, -2, 2, -2, 0],
                  scale: 1.05,
                }}
                whileTap={{
                  rotate: [0, -3, 3, -3, 0],
                  scale: 1.08,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ZapIcon className="text-foreground h-28 w-28 stroke-amber-400 stroke-[0.5px] filter transition-all duration-300 ease-in-out group-hover:fill-amber-500 group-hover:stroke-amber-500 group-hover:drop-shadow-lg group-active:fill-amber-500 group-active:stroke-amber-500 group-active:drop-shadow-lg sm:h-40 sm:w-40" />
              </motion.div>
              <motion.div className="flex flex-col gap-3">
                <motion.h2
                  className="font-funnel-display text-foreground text-center text-3xl font-bold transition-colors duration-300 select-none group-hover:text-amber-500 group-active:text-amber-500 sm:text-left sm:text-3xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.02 }}
                >
                  Lightning <i>Fast.</i>
                </motion.h2>
                <motion.div className="translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100">
                  <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-600 select-none dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400">
                    <ZapIcon className="mr-1 h-3 w-3" />
                    Optimized Performance
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Advanced Search Card */}
          <motion.div
            className="bg-secondary dark:bg-card group relative col-span-1 flex cursor-pointer flex-col justify-between gap-6 overflow-hidden rounded-2xl p-6 sm:col-span-6 sm:flex-row sm:items-center"
            variants={ANIMATION_VARIANTS.item}
            whileHover={HOVER_ANIMATIONS.cardSubtle}
            whileTap={{
              scale: 0.98,
              boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100" />
            <motion.div className="relative z-10 flex flex-col gap-4 text-left sm:flex-1">
              <motion.h2
                className="font-funnel-display text-foreground text-3xl leading-tight font-bold transition-colors duration-300 select-none group-hover:text-green-600 group-active:text-green-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.02 }}
              >
                Advanced Search.
              </motion.h2>
              <motion.p className="text-muted-foreground group-hover:text-foreground/80 group-active:text-foreground/80 text-lg leading-relaxed transition-colors duration-300 select-none">
                Find what you need quickly with our powerful search features and
                intelligent filtering.
              </motion.p>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  icon={SearchIcon}
                  text="Smart Search"
                  colorClass="border-blue-500/20 bg-blue-500/10 text-blue-600 hover:border-blue-500/40 hover:bg-blue-500/20 hover:shadow-lg dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-400"
                  hoverAnimation={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
                  }}
                />
                <Badge
                  icon={SparklesIcon}
                  text="Auto-Updated"
                  colorClass="border-green-500/20 bg-green-500/10 text-green-600 hover:border-green-500/40 hover:bg-green-500/20 hover:shadow-lg dark:border-green-400/30 dark:bg-green-400/10 dark:text-green-400"
                  hoverAnimation={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(34, 197, 94, 0.2)",
                  }}
                />
                <Badge
                  icon={FlameIcon}
                  text="Most Popular"
                  colorClass="border-orange-500/20 bg-orange-500/10 text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/20 hover:shadow-lg dark:border-orange-400/30 dark:bg-orange-400/10 dark:text-orange-400"
                  hoverAnimation={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(249, 115, 22, 0.2)",
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="relative z-10 flex w-full flex-shrink-0 justify-center sm:ml-6 sm:w-auto"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 1.08, rotate: 2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {mounted && (
                <Image
                  src={
                    isDarkMode
                      ? "/img/search-dark.png"
                      : "/img/search-light.png"
                  }
                  alt="Advanced Search Interface"
                  className="h-[200px] w-full max-w-[280px] rounded-lg object-contain transition-all duration-300 group-hover:shadow-xl group-active:shadow-xl sm:h-[250px] sm:max-w-none"
                  loading="lazy"
                  width={280}
                  height={250}
                />
              )}
              {!mounted && (
                <div className="bg-muted/50 h-[200px] w-full max-w-[280px] animate-pulse rounded-lg sm:h-[250px] sm:max-w-[300px]" />
              )}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Why Learn Java Section */}
        <motion.section
          className="mx-auto max-w-5xl"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="mt-5 mb-4 text-center"
            variants={ANIMATION_VARIANTS.item}
          >
            <h1 className="font-funnel-display text-4xl font-bold sm:text-5xl">
              Why learn Java with Javaistic?
            </h1>
            <p className="mx-auto mt-4 text-lg font-medium dark:text-neutral-400">
              Designed to make learning Java fun, practical, and truly
              beginner-friendly.
            </p>
          </motion.div>

          {/* Quality over Quantity */}
          <motion.article
            className="mx-auto mb-10 flex flex-col items-center py-10 sm:flex-row sm:space-x-10"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            role="article"
            aria-labelledby="quality-title"
          >
            <motion.div
              className="w-full transition-transform duration-300 hover:-translate-y-2 hover:scale-105 sm:w-1/2"
              variants={ANIMATION_VARIANTS.imageFromLeft}
            >
              <Image
                src="/img/home/docs.svg"
                alt="Javaistic documentation interface showing clean, organized content"
                width={1213}
                height={1023}
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/img/home/docs.svg"
                loading="lazy"
                priority={false}
              />
            </motion.div>
            <motion.div
              className="w-full text-left sm:w-1/2"
              variants={ANIMATION_VARIANTS.textFromRight}
            >
              <h2
                id="quality-title"
                className="font-funnel-display mb-6 text-3xl font-extrabold text-neutral-900 sm:text-4xl dark:text-white"
              >
                Quality over Quantity
              </h2>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed font-medium">
                We focus on quality — not noise. Every piece of content is
                crafted to be clear, engaging, and easy to understand. Learn
                Java with beautifully designed, beginner-friendly docs — all
                completely free.
              </p>
              <motion.div
                whileHover={HOVER_ANIMATIONS.button}
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

          {/* Coding Made Fun */}
          <motion.article
            className="flex flex-col-reverse items-center space-y-10 py-14 sm:flex-row sm:space-y-0 sm:space-x-10"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            role="article"
            aria-labelledby="coding-title"
          >
            <motion.div
              className="w-full text-left sm:w-1/2"
              variants={ANIMATION_VARIANTS.textFromRight}
            >
              <h2
                id="coding-title"
                className="font-funnel-display text-foreground mb-6 text-3xl font-extrabold sm:text-4xl"
              >
                Coding Made Fun
              </h2>
              <p className="text-muted-foreground mb-8 text-xl leading-relaxed font-medium">
                Jump into hands-on coding right away or explore our step-by-step
                breakdowns of real Java programs. Whether you're a beginner or
                brushing up, it's coding made enjoyable.
              </p>
              <motion.div
                whileHover={HOVER_ANIMATIONS.button}
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
              variants={ANIMATION_VARIANTS.imageFromLeft}
            >
              <Image
                src="/img/home/programs.svg"
                alt="Interactive Java coding playground with syntax highlighting"
                width={1213}
                height={1023}
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/img/home/programs.svg"
                loading="lazy"
                priority={false}
              />
            </motion.div>
          </motion.article>

          {/* Open Source */}
          <motion.article
            className="flex flex-col items-center space-y-10 py-14 sm:flex-row sm:space-y-0 sm:space-x-10"
            variants={ANIMATION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            role="article"
            aria-labelledby="open-source-title"
          >
            <motion.div
              className="w-full transition-transform duration-300 hover:-translate-y-2 hover:scale-105 sm:w-1/2"
              variants={ANIMATION_VARIANTS.imageFromLeft}
            >
              <Image
                src="/img/home/open-source.svg"
                alt="GitHub repository interface showing collaborative development"
                width={613}
                height={521}
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/img/home/open-source.svg"
                loading="lazy"
                priority={false}
              />
            </motion.div>
            <motion.div
              className="w-full text-left sm:w-1/2"
              variants={ANIMATION_VARIANTS.textFromRight}
            >
              <h2
                id="open-source-title"
                className="font-funnel-display text-foreground mb-6 text-3xl font-extrabold sm:text-4xl"
              >
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
                whileHover={HOVER_ANIMATIONS.button}
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

        {/* CTA Section */}
        <motion.section
          className="mx-auto w-full max-w-5xl py-20"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 to-sky-700 px-6 py-16 text-center text-white shadow-xl"
            variants={ANIMATION_VARIANTS.item}
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
            <motion.div
              whileHover={HOVER_ANIMATIONS.button}
              whileTap={{ scale: 0.95 }}
            >
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
