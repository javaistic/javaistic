"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import * as React from "react";

export type UnderlineTab = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
};

type UnderlineTabsProps = {
  items: UnderlineTab[];
  defaultValue?: string;
  className?: string;
  listClassName?: string;
  onValueChange?: (value: string) => void;
};

// Debounce utility for resize events
function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
): T {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  return React.useCallback(
    ((...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    }) as T,
    [callback, delay],
  );
}

export function UnderlineTabs({
  items,
  defaultValue,
  className,
  listClassName,
  onValueChange,
}: UnderlineTabsProps) {
  const initial = defaultValue ?? items[0]?.value;
  const [activeValue, setActiveValue] = React.useState(initial);
  const [indicatorProps, setIndicatorProps] = React.useState({
    left: 0,
    width: 0,
  });
  const listRef = React.useRef<HTMLDivElement>(null);

  const updateIndicator = React.useCallback(() => {
    if (!listRef.current) return;

    const activeElement = listRef.current.querySelector<HTMLButtonElement>(
      `[data-state="active"]`,
    );

    if (activeElement) {
      setIndicatorProps({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, []);

  const debouncedUpdateIndicator = useDebounce(updateIndicator, 100);

  // Handle value changes
  const handleValueChange = React.useCallback(
    (value: string) => {
      setActiveValue(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  // Update indicator when active tab changes
  React.useEffect(() => {
    updateIndicator();
  }, [activeValue, updateIndicator]);

  // Handle resize events
  React.useEffect(() => {
    window.addEventListener("resize", debouncedUpdateIndicator);
    return () => window.removeEventListener("resize", debouncedUpdateIndicator);
  }, [debouncedUpdateIndicator]);

  return (
    <Tabs
      defaultValue={initial}
      onValueChange={handleValueChange}
      className={cn("w-full", className)}
    >
      <TabsList
        ref={listRef}
        className={cn(
          "relative mx-auto flex w-full max-w-[220px] gap-3 rounded-none bg-transparent p-0",
          listClassName,
        )}
      >
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            id={`tab-${item.value}`}
            aria-controls={`panel-${item.value}`}
            className={cn(
              "relative -mb-px rounded-none border-none px-1 pb-5",
              "text-muted-foreground cursor-pointer text-base font-medium",
              "hover:text-foreground dark:hover:text-foreground focus-visible:text-foreground dark:focus-visible:text-foreground",
              "focus-visible:ring-ring/50 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none",
              "data-[state=active]:text-foreground bg-transparent! data-[state=active]:bg-transparent data-[state=active]:shadow-none",
              "transition-colors duration-200 [&_svg]:size-5",
            )}
          >
            <span className="flex items-center gap-2 [&_svg]:size-5">
              {item.icon}
              <span>{item.label}</span>
            </span>
          </TabsTrigger>
        ))}

        {/* Sliding underline with optimized animation and theme support */}
        <motion.span
          className="bg-foreground absolute bottom-0 h-[4px] rounded-full will-change-transform"
          initial={false}
          animate={{
            left: indicatorProps.left,
            width: indicatorProps.width,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
            mass: 0.8,
          }}
        />
      </TabsList>

      {items.map((item) =>
        item.content ? (
          <TabsContent
            key={item.value}
            value={item.value}
            className="w-full pt-2"
          >
            <div
              className="border-border/20 w-full rounded-xl border-4 transition-all duration-300 sm:rounded-3xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              }}
              role="tabpanel"
              aria-labelledby={`tab-${item.value}`}
              id={`panel-${item.value}`}
            >
              {item.content}
            </div>
          </TabsContent>
        ) : null,
      )}
    </Tabs>
  );
}
