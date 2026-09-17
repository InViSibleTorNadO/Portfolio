import { useIntersection } from "../../hooks/useIntersection";

/**
 * FadeIn
 * Wraps any children in a div that fades up into view when it scrolls
 * into the viewport. Uses IntersectionObserver under the hood.
 *
 * @param {string}  className  - Additional class names for the wrapper
 * @param {string}  as         - HTML tag to render (default: "div")
 * @param {number}  delay      - CSS animation-delay in ms (staggering)
 */
export default function FadeIn({ children, className = "", as: Tag = "div", delay = 0, ...props }) {
  const [ref, isVisible] = useIntersection();

  return (
    <Tag
      ref={ref}
      className={`fade-in${isVisible ? " visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
