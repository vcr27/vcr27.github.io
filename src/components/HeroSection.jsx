import { heroStats } from '../data/portfolioData';

function HeroSection() {
  return (
    <section className="hero reveal" data-reveal="true">
      <div className="hero-grid">
        <div className="hero-copy-block">
          <p className="hero-kicker">New Grad Software Engineer</p>
          <h1>
            Building <span className="accent">production-ready software</span> with backend depth and product focus.
          </h1>
          <p className="hero-subtext">
            Computer Science graduate focused on Java/Spring, Python, and React. I ship clean interfaces,
            reliable APIs, and measurable outcomes.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="mailto:r.varunchandanrao@gmail.com" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="proof-strip" aria-label="Quick recruiter highlights">
            <span>Java/Spring + React</span>
            <span>Backend + Full Stack</span>
            <span>Hackathon Winner</span>
          </div>
        </div>

        <aside className="hero-side">
          <div className="profile-container">
            <img src="/images/profile.jpg" alt="Varun Ramshetti" />
          </div>
          <div className="availability-card">
            <p className="availability-label">Current Focus</p>
            <p className="availability-value">New Grad SWE Opportunities</p>
            <p className="availability-note">Backend and full-stack roles, open to relocation and hybrid teams.</p>
          </div>
        </aside>
      </div>

      <div className="quick-stats">
        {heroStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
