"use client";
import { motion } from "motion/react";
import { Ripple } from "@/components/magicui/ripple";
import { ANIMATION_VARIANTS } from "./animation-variants";

export function VisionSection() {
  return (
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
  );
}
