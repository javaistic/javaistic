import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook for detecting and managing dark mode state
 * Handles system preferences, local storage, and class/attribute changes
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Optimized theme detection
  const checkDarkMode = useCallback(() => {
    if (typeof window === "undefined") return;

    const hasDarkClass = document.documentElement.classList.contains("dark");
    const dataTheme = document.documentElement.getAttribute("data-theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      dataTheme === "dark" ||
      hasDarkClass ||
      (savedTheme !== "light" && dataTheme !== "light" && systemPrefersDark);

    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    setMounted(true);
    checkDarkMode();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkDarkMode);

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") checkDarkMode();
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      mediaQuery.removeEventListener("change", checkDarkMode);
      observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [checkDarkMode]);

  return { isDarkMode, mounted };
}
