import { useEffect, useState } from 'react';
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

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4.5" />
    <path
      strokeLinecap="round"
      d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
    />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.7 14.9A8.5 8.5 0 1 1 9.1 3.3a7 7 0 0 0 11.6 11.6Z" />
  </svg>
);

const ModeToggle = ({ mode, onToggle }) => (
  <button
    type="button"
    className="navbar__mode-toggle"
    aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    onClick={onToggle}
  >
    {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    setMode(document.documentElement.dataset.mode === 'light' ? 'light' : 'dark');
  }, []);

  const toggleMode = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.dataset.mode = next;
    localStorage.setItem('site-mode', next);
  };

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
          <ModeToggle mode={mode} onToggle={toggleMode} />
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
          <ModeToggle mode={mode} onToggle={toggleMode} />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
