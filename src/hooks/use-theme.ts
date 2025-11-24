"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook for managing theme (light/dark mode)
 * 
 * @returns {Object} Theme state and toggle function
 * @returns {boolean} isDark - Current theme state (true = dark, false = light)
 * @returns {boolean} mounted - Whether component has mounted (prevents hydration errors)
 * @returns {(checked: boolean) => void} toggleTheme - Function to toggle theme
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check initial theme on mount
  useEffect(() => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    
    // Check localStorage first, then body class, then system preference
    if (savedTheme) {
      const isDarkMode = savedTheme === "dark";
      setIsDark(isDarkMode);
      if (isDarkMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        body.classList.add("dark");
      }
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = (checked: boolean) => {
    const body = document.body;
    if (checked) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(checked);
  };

  return {
    isDark,
    mounted,
    toggleTheme,
  };
}

