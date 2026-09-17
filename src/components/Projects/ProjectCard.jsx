import Tag from "../ui/Tag";
import "./Projects.css";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="10" height="10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
  </svg>
);

/**
 * ProjectCard
 * Single project card in the projects grid.
 *
 * @param {object}  project  - Project data object from src/data/projects.js
 */
export default function ProjectCard({ project }) {
  const { id, name, description, tags, links } = project;

  return (
    <article className="project-card" id={id}>
      {/* Header row: name + links */}
      <div className="project-card__header">
        <h3 className="project-card__name">{name}</h3>
        <div className="project-card__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              {link.label === "GitHub" ? <GitHubIcon /> : <ExternalIcon />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Description — supports inline <strong> via dangerouslySetInnerHTML */}
      <p
        className="project-card__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Tech tags */}
      <div className="project-card__tags">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
