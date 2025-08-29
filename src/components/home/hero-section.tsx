"use client";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ANIMATION_VARIANTS } from "./animation-variants";

export function HeroSection() {
  return (
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
  );
}
