"use client";
import { motion } from "motion/react";
import { useMemo } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { FeatureCard } from "./feature-card";
import { ANIMATION_VARIANTS } from "./animation-variants";

export function FeaturesSection() {
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
        At Javaistic, every feature is designed to make learning effortless and
        inspiring.
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
  );
}
