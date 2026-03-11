import { experienceItems } from '../data/portfolioData';

function ExperienceSection() {
  return (
    <section id="experience" className="section dark-section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Experience</p>
        <h2>Work That Shipped</h2>
      </div>

      <div className="timeline">
        {experienceItems.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-dot" aria-hidden="true" />
            <h3>{item.role}</h3>
            <p className="company">{item.company}</p>
            <p className="date">{item.date}</p>
            <p>{item.summary}</p>
            <ul className="impact-list">
              {item.impacts.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
