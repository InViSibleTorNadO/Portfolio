import { useScrollY } from "../../hooks/useScrollY";
import "./Header.css";

// SVG icons inlined as constants for clarity
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const NAV_LINKS = [
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills" },
  { href: "#stats",      label: "Stats" },
  { href: "#contact",    label: "Contact" },
];

/**
 * Header
 * Fixed top navigation bar. Shows full nav links normally, collapses to a
 * hamburger "Menu" button when scrolled past 80px.
 *
 * @param {string}   theme       - "dark" | "light"
 * @param {function} onToggle    - Callback to switch theme
 * @param {function} onMenuOpen  - Callback to open the mobile overlay menu
 */
export default function Header({ theme, onToggle, onMenuOpen }) {
  const scrollY = useScrollY();
  const scrolled = scrollY > 80;

  return (
    <header id="hdr" className={`header${scrolled ? " header--scrolled" : ""}`} role="banner">
      <div className="header__inner container">
        {/* Logo */}
        <a href="#" className="header__logo">Beer Singh</a>

        {/* Desktop nav — hides when scrolled */}
        <nav className="header__nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="header__controls">
          {/* Compact "Menu" button — appears when scrolled */}
          <div className="header__compact-nav">
            <button className="header__menu-btn" onClick={onMenuOpen}>Menu</button>
          </div>

          {/* Theme toggle */}
          <button
            className="header__theme-btn"
            onClick={onToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
