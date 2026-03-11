import { extraReportItems } from '../data/portfolioData';

function ExtrasSection() {
  return (
    <section id="extras" className="section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Extras</p>
        <h2>Technical Writing & Research</h2>
      </div>
      <p className="section-intro">
        Reports that demonstrate analytical communication, responsible AI reasoning, and technical depth beyond code.
      </p>

      <div className="card-grid extras-grid">
        {extraReportItems.map((report) => (
          <article className="card report-card" key={report.title}>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <p className="project-impact">{report.impact}</p>
            <div className="tag-row">
              {report.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="github-link" href={report.reportUrl} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-file-pdf" aria-hidden="true" /> Open Report
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExtrasSection;
