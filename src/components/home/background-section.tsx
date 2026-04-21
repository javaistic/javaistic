"use client";
import { useDarkMode } from "@/hooks/useDarkMode";

interface BackgroundSectionProps {
  children: React.ReactNode;
}

export function BackgroundSection({ children }: BackgroundSectionProps) {
  const { isDarkMode, mounted } = useDarkMode();

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="absolute z-10 h-225 w-full opacity-20 sm:h-250 dark:opacity-100"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      <main className="relative z-20 mx-auto flex max-w-7xl flex-col px-4 text-center sm:px-6 lg:px-10">
        {children}
      </main>
    </div>
  );
}
