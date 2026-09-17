import { useState } from "react";
import { PROJECTS, FILTER_TABS } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

/**
 * Projects
 * Renders the filterable project grid section.
 * Filter state and "view more" toggle are managed locally here.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showMore, setShowMore]         = useState(false);

  // Determine if a project card should be visible given current filter + showMore state
  const isVisible = (project) => {
    const matchesFilter =
      activeFilter === "all" || project.categories.includes(activeFilter);
    const isExtra = project.hidden;
    return matchesFilter && (!isExtra || showMore);
  };

  const visibleProjects = PROJECTS.filter(isVisible);

  const handleFilterClick = (value) => {
    setActiveFilter(value);
    // Collapse extras when switching filters
    setShowMore(false);
  };

  return (
    <section id="projects">
      <div className="container">
      <FadeIn>
        <SectionHeader title="Projects" subtitle="Selected Work" />
      </FadeIn>

      {/* Filter tabs */}
      <FadeIn delay={50}>
        <div className="projects__filters" role="tablist" aria-label="Project filter">
          {FILTER_TABS.map(({ id, label, value }) => (
            <button
              key={value}
              id={id}
              className={`projects__filter-btn${activeFilter === value ? " projects__filter-btn--active" : ""}`}
              onClick={() => handleFilterClick(value)}
              role="tab"
              aria-selected={activeFilter === value}
            >
              {label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Project grid */}
      <div className="projects__grid" id="pgrid">
        {visibleProjects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 60}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}

        {/* Empty state */}
        {visibleProjects.length === 0 && (
          <p className="projects__empty">No projects match this filter.</p>
        )}
      </div>

      {/* View More / Less toggle */}
      <FadeIn>
        <div className="projects__view-more">
          <button
            id="vmb"
            className="projects__view-more-btn"
            onClick={() => setShowMore((s) => !s)}
          >
            {showMore ? "Show Less ↑" : "View More Projects ↓"}
          </button>
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
