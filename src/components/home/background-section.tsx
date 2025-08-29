"use client";
import { useDarkMode } from "@/hooks/useDarkMode";

interface BackgroundSectionProps {
  children: React.ReactNode;
}

export function BackgroundSection({ children }: BackgroundSectionProps) {
  const { isDarkMode, mounted } = useDarkMode();

  return (
    <div className="relative min-h-screen">
      {/* Development theme indicator */}
      {process.env.NODE_ENV === "development" && mounted && (
        <div className="fixed top-4 right-4 z-50 rounded-lg bg-black/80 px-3 py-2 text-xs text-white">
          Theme: {isDarkMode ? "Dark" : "Light"}
        </div>
      )}

      {/* Background */}
      <div
        className="absolute z-10 w-full opacity-20 sm:h-[1000px] dark:opacity-100"
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
