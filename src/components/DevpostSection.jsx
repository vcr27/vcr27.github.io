import { devpostHighlights } from '../data/portfolioData';

function DevpostSection() {
  return (
    <section id="hackathons" className="section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Hackathons</p>
        <h2>Competitive Builds on Devpost</h2>
      </div>
      <p className="section-intro">
        Proof of execution under pressure: project delivery in short timelines, public demos, and judged outcomes.
      </p>

      <div className="devpost-grid">
        {devpostHighlights.map((item) => (
          <article className="devpost-card" key={item.title}>
            <p className="devpost-meta">{item.meta}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="project-impact">{item.impact}</p>
            <a className="github-link" href={item.href} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-trophy" aria-hidden="true" /> {item.ctaLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DevpostSection;
