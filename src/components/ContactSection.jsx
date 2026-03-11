import { contactLinks } from '../data/portfolioData';

function ContactSection() {
  return (
    <section id="contact" className="section dark-section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Contact</p>
        <h2>Let&apos;s Build Something Useful</h2>
      </div>

      <div className="contact-container">
        {contactLinks.map((link) => (
          <a
            className="contact-card"
            href={link.href}
            key={link.title}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <i className={link.iconClass} aria-hidden="true" />
            <div>
              <h3>{link.title}</h3>
              <p>{link.value}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="contact-footer">Open to new grad SWE opportunities and internship-to-full-time transitions.</p>
    </section>
  );
}

export default ContactSection;
