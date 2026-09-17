import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-theme";

/**
 * useTheme
 * Returns [theme, toggleTheme] where theme is "dark" | "light".
 * Persists to localStorage and syncs the data-theme attribute on <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return [theme, toggleTheme];
}
