import { SKILLS } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import SkillCard from "./SkillCard";
import "./Skills.css";

/**
 * Skills
 * Responsive icon grid of all tech stack skills.
 */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
      <FadeIn>
        <SectionHeader title="Skills" subtitle="Tech Stack" />
      </FadeIn>

      <div className="skills__grid">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 30}>
            <SkillCard skill={skill} />
          </FadeIn>
        ))}
      </div>
      </div>
    </section>
  );
}
