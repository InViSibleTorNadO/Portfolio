import "./Footer.css";

/**
 * Footer
 * Simple two-column footer: copyright on the left, tech stack on the right.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <span>© {year} Beer Singh · Pune, India</span>
        <span>Built with React · Vite · CSS</span>
      </div>
    </footer>
  );
}
