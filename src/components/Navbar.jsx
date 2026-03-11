import { navLinks } from '../data/portfolioData';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#top">
        VR
      </a>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
