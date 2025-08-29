"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  TargetIcon,
  RocketIcon,
  HeartIcon,
  ZapIcon,
  SearchIcon,
  SparklesIcon,
  FlameIcon,
} from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Badge } from "./badge";
import { ANIMATION_VARIANTS, HOVER_ANIMATIONS } from "./animation-variants";

export function BentoGridSection() {
  const { isDarkMode, mounted } = useDarkMode();

  return (
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
              Javaistic is built with the love and dedication of our community.
              We are committed to providing the best possible learning
              experience for our users.
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
            Our platform is fully responsive, ensuring a seamless experience on
            any device.
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
                isDarkMode ? "/img/search-dark.png" : "/img/search-light.png"
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
  );
}
