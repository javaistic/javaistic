"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CodeIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ANIMATION_VARIANTS, HOVER_ANIMATIONS } from "./animation-variants";

export function WhyLearnJavaSection() {
  return (
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
            We focus on quality — not noise. Every piece of content is crafted
            to be clear, engaging, and easy to understand. Learn Java with
            beautifully designed, beginner-friendly docs — all completely free.
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
            Javaistic is fully open source — built by and for learners like you.
            Fork it, contribute, and shape the future of Java education with us.
          </p>
          <motion.div
            whileHover={HOVER_ANIMATIONS.button}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://github.com/javaistic/javaistic" target="_blank">
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
  );
}
