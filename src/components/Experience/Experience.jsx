import { EXPERIENCE } from "../../data/experience";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import ExperienceItem from "./ExperienceItem";
import "./Experience.css";

/**
 * Experience
 * Lists all work experience entries.
 */
export default function Experience() {
  return (
    <section id="experience">
      <FadeIn>
        <SectionHeader
          title="Experience"
          subtitle={`${EXPERIENCE.length} Role${EXPERIENCE.length !== 1 ? "s" : ""}`}
        />
      </FadeIn>

      <div className="experience__list">
        {EXPERIENCE.map((item, i) => (
          <FadeIn key={item.id} delay={i * 80}>
            <ExperienceItem item={item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
