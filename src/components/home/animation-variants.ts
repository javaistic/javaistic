import { easeOut } from "motion/react";

// Reusable animation configurations with performance optimizations
export const ANIMATION_VARIANTS = {
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
export const HOVER_ANIMATIONS = {
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
