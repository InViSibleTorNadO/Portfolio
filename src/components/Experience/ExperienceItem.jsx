import Tag from "../ui/Tag";
import "./Experience.css";

/**
 * ExperienceItem
 * Renders a single work experience entry with period, role, company,
 * bullet points, and tech tags.
 *
 * @param {object} item - Experience data object from src/data/experience.js
 */
export default function ExperienceItem({ item }) {
  const { period, location, role, company, bullets, tags } = item;

  return (
    <div className="exp-item">
      {/* Left column: period + location */}
      <div className="exp-item__period">
        <span>{period}</span>
        <span className="exp-item__location">{location}</span>
      </div>

      {/* Right column: content */}
      <div className="exp-item__content">
        <div className="exp-item__role">{role}</div>
        <div className="exp-item__company">{company}</div>

        <ul className="exp-item__bullets">
          {bullets.map((bullet, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
          ))}
        </ul>

        <div className="exp-item__tags">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
