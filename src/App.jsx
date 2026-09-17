import { useState, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

import Header       from "./components/Header/Header";
import MobileMenu   from "./components/MobileMenu/MobileMenu";
import Hero         from "./components/Hero/Hero";
import Projects     from "./components/Projects/Projects";
import Experience   from "./components/Experience/Experience";
import Skills       from "./components/Skills/Skills";
import Stats        from "./components/Stats/Stats";
import Contact      from "./components/Contact/Contact";
import Footer       from "./components/Footer/Footer";
import ScrollToTop  from "./components/ui/ScrollToTop";

/**
 * App
 * Root component. Owns:
 *  - Theme state (passed down to Header)
 *  - Mobile menu open/close state
 *  - Body scroll lock when mobile menu is open
 */
export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay mobile nav */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Fixed header */}
      <Header
        theme={theme}
        onToggle={toggleTheme}
        onMenuOpen={() => setMenuOpen(true)}
      />

      {/* Page content */}
      <main>
        <div className="container">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Stats />
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Floating back-to-top button */}
      <ScrollToTop />
    </>
  );
}
