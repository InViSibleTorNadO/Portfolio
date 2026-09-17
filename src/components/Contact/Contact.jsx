import { CONTACT, SOCIAL_LINKS } from "../../data/social";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import "./Contact.css";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
  </svg>
);

/**
 * Contact
 * Two-column contact section: left = headline + email, right = social links list.
 */
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
      <FadeIn>
        <SectionHeader title="Contact" subtitle="Get in Touch" />
      </FadeIn>

      <div className="contact__body">
        {/* Left: headline + email */}
        <FadeIn>
          <p className="contact__heading">{CONTACT.heading}</p>
          <p className="contact__subtext">{CONTACT.subtext}</p>
          <a href={`mailto:${CONTACT.email}`} className="contact__email" id="contact-email">
            {CONTACT.email}
          </a>
        </FadeIn>

        {/* Right: social link list */}
        <FadeIn delay={80}>
          <ul className="contact__social-list">
            {SOCIAL_LINKS.map(({ id, platform, handle, href }) => (
              <li key={id} className="contact__social-item">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="contact__social-link"
                  id={id}
                >
                  <div className="contact__social-info">
                    <span className="contact__social-platform">{platform}</span>
                    <span className="contact__social-handle">{handle}</span>
                  </div>
                  <span className="contact__social-arrow">
                    <ArrowIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
      </div>
    </section>
  );
}
