import { skillsByCategory } from '../data/portfolioData';

function SkillsSection() {
  return (
    <section id="skills" className="section dark-section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Skills</p>
        <h2>Engineering Toolkit</h2>
      </div>

      <div className="skills-container">
        {skillsByCategory.map((category) => (
          <section className="skill-category" key={category.name}>
            <h3>{category.name}</h3>
            <div className="skills-grid">
              {category.items.map((skill) => (
                <div className="skill-card" key={skill.label}>
                  <i className={skill.iconClass} aria-hidden="true" />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
