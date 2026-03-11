export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Extras', href: '#extras' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { value: '3', label: 'Software Internships' },
  { value: '40%', label: 'Query Performance Gain' },
  { value: '4+', label: 'Production Projects' },
];

export const experienceItems = [
  {
    role: 'Web Developer',
    company: 'Running Name LLC',
    date: 'Dec 2025 - Present',
    summary:
      'Developed responsive client websites and production updates using Wix, Webflow, and Google Sites.',
    impacts: [
      'Delivered UI fixes and launch updates across multiple client-facing pages.',
      'Improved usability with mobile-first layout adjustments and better content hierarchy.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'GBCS Group',
    date: 'May 2025 - Dec 2025',
    summary:
      'Built onboarding platform features with Next.js and React while debugging complex workflows.',
    impacts: [
      'Improved reliability by tracking and resolving blockers in onboarding flows.',
      'Collaborated on integration issues to reduce release friction.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Scholarship Auditions',
    date: 'Jan 2025 - May 2025',
    summary:
      'Developed backend features with Python and JavaScript REST APIs and fixed platform bugs.',
    impacts: [
      'Shipped API functionality used by core platform workflows.',
      'Improved maintainability by fixing recurring defects and edge-case failures.',
    ],
  },
];

export const projectItems = [
  {
    title: 'MovieTracker',
    description:
      'Full-stack movie tracking platform using Spring Boot, React, PostgreSQL, Docker, and AWS EC2 deployment.',
    impact: 'Designed and deployed end-to-end architecture with a production-ready environment.',
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'AWS'],
    repoUrl: 'https://github.com/vcr27/movie-tracker',
  },
  {
    title: 'LLM Citation Converter',
    description:
      'OpenAI-powered citation converter that automates APA to MLA conversion workflows.',
    impact: 'Reduced repetitive formatting effort by standardizing citation generation.',
    tags: ['OpenAI API', 'JavaScript', 'Automation'],
    repoUrl: 'https://github.com/vcr27/citation-converter',
  },
  {
    title: 'Database Optimization & API Development',
    description:
      'Improved PostgreSQL performance by around 40% and built Python REST APIs for data workflows.',
    impact: 'Focused on measurable backend performance and cleaner API contracts.',
    tags: ['PostgreSQL', 'Python', 'REST', 'Optimization'],
    repoUrl: 'https://github.com/vcr27/database-optimization',
  },
];

export const extraReportItems = [
  {
    title: 'Technology Ethics in the Age of AI',
    description:
      'Literature review exploring how major technology companies release innovations without ethical safeguards and how regulation may evolve.',
    impact: 'Shows systems-level thinking on responsible AI, policy risk, and long-term product accountability.',
    tags: ['AI Ethics', 'Policy', 'Literature Review'],
    reportUrl: '/reports/technology-ethics-in-the-age-of-ai.pdf',
  },
  {
    title: 'LLM Citation Converter Report',
    description:
      'Technical report documenting design decisions, prompt strategy, and implementation details for an LLM-powered citation workflow.',
    impact: 'Demonstrates practical AI feature design, evaluation thinking, and product-oriented documentation.',
    tags: ['LLM', 'Prompting', 'Technical Writing'],
    reportUrl: '/reports/llm-citation-converter.pdf',
  },
  {
    title: 'Work Environment Report',
    description:
      'Analysis of workplace dynamics, communication patterns, and factors that influence team performance in technical organizations.',
    impact: 'Highlights collaboration maturity and understanding of engineering-team effectiveness.',
    tags: ['Collaboration', 'Communication', 'Analysis'],
    reportUrl: '/reports/work-environment-report.pdf',
  },
  {
    title: 'Auditing for Bias Report',
    description:
      'Report on identifying and mitigating bias in data-driven systems through structured auditing and validation approaches.',
    impact: 'Signals awareness of model risk, fairness tradeoffs, and quality governance in modern software systems.',
    tags: ['Bias Auditing', 'Fairness', 'Risk'],
    reportUrl: '/reports/auditing-for-bias-report.pdf',
  },
];

export const devpostHighlights = [
  {
    title: 'Devpost Project Portfolio',
    description:
      'Curated hackathon portfolio featuring two project submissions with problem statements, demos, and technical implementation details.',
    impact: 'Useful recruiter signal for project execution under time constraints and rapid prototyping ability.',
    meta: '2 Projects',
    href: 'https://devpost.com/r-varunchandanrao?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    ctaLabel: 'View Devpost Portfolio',
  },
  {
    title: 'Hackathon Winning Submission',
    description:
      'One submission achieved a winning outcome, demonstrating strong delivery, product framing, and end-to-end implementation under judging criteria.',
    impact: 'Shows competitive differentiation and practical execution in high-pressure team environments.',
    meta: '1 Hackathon Win',
    href: 'https://devpost.com/r-varunchandanrao?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    ctaLabel: 'See Winning Track Record',
  },
];

export const skillsByCategory = [
  {
    name: 'Languages',
    items: [
      { iconClass: 'devicon-java-plain', label: 'Java' },
      { iconClass: 'devicon-python-plain', label: 'Python' },
      { iconClass: 'devicon-csharp-plain', label: 'C#' },
      { iconClass: 'devicon-javascript-plain', label: 'JavaScript' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { iconClass: 'devicon-spring-plain', label: 'Spring Boot' },
      { iconClass: 'devicon-django-plain', label: 'Django' },
      { iconClass: 'devicon-nodejs-plain', label: 'REST APIs' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { iconClass: 'devicon-react-original', label: 'React' },
      { iconClass: 'devicon-nextjs-original', label: 'Next.js' },
    ],
  },
  {
    name: 'Database & Tools',
    items: [
      { iconClass: 'devicon-postgresql-plain', label: 'PostgreSQL' },
      { iconClass: 'devicon-mysql-plain', label: 'MySQL' },
      { iconClass: 'devicon-docker-plain', label: 'Docker' },
      { iconClass: 'devicon-amazonwebservices-original', label: 'AWS' },
      { iconClass: 'devicon-git-plain', label: 'Git' },
    ],
  },
];

export const recruiterSnapshot = [
  {
    heading: 'What I bring',
    text: 'Strong backend fundamentals, end-to-end project ownership, and practical debugging across full-stack systems.',
  },
  {
    heading: 'Target roles',
    text: 'New Grad Software Engineer, Backend Engineer, or Full-Stack Engineer roles where impact and growth are measurable.',
  },
  {
    heading: 'Preferred stack',
    text: 'Java/Spring Boot, Python, React, PostgreSQL, cloud deployment workflows, and API-driven architecture.',
  },
];

export const contactLinks = [
  {
    title: 'Email',
    value: 'r.varunchandanrao@gmail.com',
    href: 'mailto:r.varunchandanrao@gmail.com',
    iconClass: 'fa-solid fa-envelope',
  },
  {
    title: 'GitHub',
    value: 'github.com/vcr27',
    href: 'https://github.com/vcr27',
    iconClass: 'fa-brands fa-github',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/varunchandan',
    href: 'https://www.linkedin.com/in/varunchandan',
    iconClass: 'fa-brands fa-linkedin',
  },
];
