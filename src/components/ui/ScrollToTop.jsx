import { useScrollY } from "../../hooks/useScrollY";
import "./ScrollToTop.css";

/**
 * ScrollToTop
 * Fixed FAB that appears after the user scrolls 400px and smoothly
 * scrolls back to the top when clicked.
 */
export default function ScrollToTop() {
  const scrollY = useScrollY();
  const visible = scrollY > 400;

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="fab"
      className={`fab${visible ? " fab--visible" : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
