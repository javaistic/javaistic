"use client";
import { useEffect, useState } from "react";

interface UseAnimatedCounterProps {
  value: number;
  duration?: number;
}

export const useAnimatedCounter = ({
  value,
  duration = 2000,
}: UseAnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(
        startValue + (value - startValue) * easeOutQuart,
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return displayValue;
};

// Animated Counter Component
export const AnimatedCounter = ({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) => {
  const displayValue = useAnimatedCounter({ value, duration });
  return <span>{displayValue.toLocaleString()}</span>;
};
