import "./MobileMenu.css";

const NAV_LINKS = [
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills" },
  { href: "#stats",      label: "Stats" },
  { href: "#contact",    label: "Contact" },
];

/**
 * MobileMenu
 * Full-screen overlay navigation that appears when the user taps "Menu".
 * Locks body scroll while open.
 *
 * @param {boolean}  isOpen  - Whether the menu is visible
 * @param {function} onClose - Callback to close the menu
 */
export default function MobileMenu({ isOpen, onClose }) {
  const handleLinkClick = () => onClose();

  return (
    <nav
      id="mm"
      className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <button className="mobile-menu__close" onClick={onClose}>Close</button>

      {NAV_LINKS.map(({ href, label }) => (
        <a key={href} href={href} onClick={handleLinkClick}>
          {label}
        </a>
      ))}
    </nav>
  );
}
