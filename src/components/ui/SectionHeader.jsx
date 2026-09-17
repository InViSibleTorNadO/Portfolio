/**
 * SectionHeader
 * Renders the consistent heading row used at the top of every section.
 *
 * @param {string} title   - Primary section title (h2)
 * @param {string} subtitle - Smaller muted label on the right
 */
export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
    </div>
  );
}
