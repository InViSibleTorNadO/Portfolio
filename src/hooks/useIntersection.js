import { useEffect, useRef, useState } from "react";

/**
 * useIntersection
 * Observes whether an element has entered the viewport.
 * Returns [ref, isVisible] — attach ref to the DOM node you want to animate.
 *
 * @param {number} threshold   - 0–1, fraction of element visible before triggering
 * @param {string} rootMargin  - CSS margin string to shrink/grow the viewport rect
 */
export function useIntersection(threshold = 0.1, rootMargin = "0px 0px -40px 0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Fire once only
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
