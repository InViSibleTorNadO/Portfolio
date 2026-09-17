import "./Skills.css";

/**
 * SkillCard
 * Single icon card in the skills grid.
 *
 * @param {object} skill - Skill object: { name, icon, invert? }
 */
export default function SkillCard({ skill }) {
  const { name, icon, invert } = skill;

  return (
    <div className="skill-card">
      <div className="skill-card__icon">
        <img
          src={icon}
          alt={name}
          loading="lazy"
          style={invert ? { filter: "invert(1)" } : undefined}
        />
      </div>
      <span className="skill-card__name">{name}</span>
    </div>
  );
}
