import { useState } from 'react';
import './Navbar.css';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

const FlameLogo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="navFlame" x1="4" y1="30" x2="28" y2="2" gradientUnits="userSpaceOnUse">
        <stop offset="0" style={{ stopColor: 'var(--color-primary)' }} />
        <stop offset="1" style={{ stopColor: 'var(--color-primary-light)' }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#navFlame)"
      d="M16.8 1.2c.6 3-.9 4.9-2.4 6.7-1.5 1.8-2.9 3.6-2.1 6.4.4-1.4 1.3-2.3 2.3-3-.2 2 .5 3.4 1.9 4.6 2 1.7 2.6 3.6 1.7 6-2 5.3-8.9 6.6-13 3-3.3-2.9-4.1-7.9-1.8-11.7 1-1.7 2.5-2.8 4.1-3.8-.3 1.6.1 2.8 1.1 3.9.2-3 1.5-5.2 3.6-7 1.8-1.6 3.4-3.3 4.6-5.1z"
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="/" className="navbar__brand" aria-label="Cristhian Wiki — home">
          <FlameLogo />
          <span>cristhIAn</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {links.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__toggle${isOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen && (
        <nav className="navbar__links navbar__links--mobile">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
