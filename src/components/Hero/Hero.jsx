import FadeIn from "../ui/FadeIn";
import "./Hero.css";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
  </svg>
);

const META_ITEMS = [
  { label: "Role", value: "Software Engineer" },
  { label: "Location", value: "Pune, India · Global 🌐" },
  { label: "Status", value: null, isStatus: true },
];

/**
 * Hero
 * The top section of the page: name, meta strip, bio paragraph, CTAs,
 * and the avatar initials block.
 */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Name banner */}
      <div className="hero__title-row">
        <h1 className="hero__name">Beer Singh</h1>
      </div>

      {/* Meta strip */}
      <div className="hero__meta" role="list">
        {META_ITEMS.map(({ label, value, isStatus }) => (
          <div key={label} className="hero__meta-item" role="listitem">
            <span className="hero__meta-label">{label}</span>
            {isStatus ? (
              <span className="hero__meta-value">
                <span className="hero__dot" aria-hidden="true" />
                <span className="hero__avail">Open to Work</span>
              </span>
            ) : (
              <span className="hero__meta-value">{value}</span>
            )}
          </div>
        ))}
      </div>

      {/* Bio + CTAs + Avatar */}
      <div className="hero__body">
        <div className="hero__bio">
          <FadeIn>
            <p className="hero__tagline">
              <strong>Fourth-year Computer Engineering student</strong> with hands-on
              experience in full-stack web development, cloud infrastructure, and API
              design. Strong foundations in algorithms and data structures demonstrated
              through competitive coding and real-world projects. Motivated to{" "}
              <strong>collaborate, build, and improve</strong> every single day.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="hero__ctas">
              <a href="mailto:beersheoran06@gmail.com" className="btn btn-primary" id="hero-contact-btn">
                <EmailIcon /> Contact Me
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1mWaiZ5KGlOBJhD_uGlUK7u6r-i1JjQYF" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="hero-resume-btn">
                <DownloadIcon /> Resume
              </a>
              <a
                href="https://github.com/InViSibleTorNadO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="hero-github-btn"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Avatar */}
        <div aria-hidden="true">
          <div className="hero__avatar">BS</div>
        </div>
      </div>
    </section>
  );
}
