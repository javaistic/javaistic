"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ANIMATION_VARIANTS, HOVER_ANIMATIONS } from "./animation-variants";

export function CTASection() {
  return (
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
          Begin your Java journey now — no credit card, no sign-up, just pure
          learning.
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
  );
}
