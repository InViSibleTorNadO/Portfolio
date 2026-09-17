import { useState, useEffect } from "react";

/**
 * useScrollY
 * Returns the current window.scrollY value, updated on each scroll event.
 * Uses a passive listener for performance.
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scrollY;
}
