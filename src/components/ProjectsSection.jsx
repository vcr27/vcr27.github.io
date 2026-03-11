import { projectItems } from '../data/portfolioData';

function ProjectsSection() {
  return (
    <section id="projects" className="section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Projects</p>
        <h2>Featured Engineering Projects</h2>
      </div>

      <div className="card-grid">
        {projectItems.map((project) => (
          <article className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-impact">{project.impact}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="github-link" href={project.repoUrl} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true" /> Source Code
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
