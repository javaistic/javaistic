"use client";
import { motion, type TargetAndTransition } from "motion/react";

// Badge Component for consistency with accessibility improvements
interface BadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  colorClass: string;
  hoverAnimation?: TargetAndTransition;
}

export function Badge({
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
