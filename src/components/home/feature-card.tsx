"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { HOVER_ANIMATIONS } from "./animation-variants";

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

export function FeatureCard({
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
