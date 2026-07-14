import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
];

// Three-layer flame mark (from llama_original.svg), recolored with theme
// tokens instead of its original hardcoded hex fills so it follows both
// the light/dark mode and the dev-only brand palette toggle live.
const FlameLogo = () => (
  <svg width="32" height="32" viewBox="0 0 4160 4160" aria-hidden="true">
    <g transform="translate(0,4160) scale(1,-1)">
      <path
        style={{ fill: 'var(--color-primary-hover)' }}
        d="M1635 3561 c87 -121 127 -264 107 -382 -19 -108 -54 -179 -189 -381 -161 -241 -178 -284 -177 -458 1 -105 5 -139 28 -213 27 -89 75 -193 118 -257 43 -63 42 -66 -3 -29 -64 52 -135 144 -174 224 -36 74 -51 131 -63 234 l-7 63 -53 -70 c-108 -143 -185 -308 -219 -472 -11 -54 -14 -110 -11 -205 4 -112 9 -143 37 -225 76 -226 235 -416 486 -582 114 -75 319 -176 455 -223 120 -41 116 -42 291 26 254 99 461 229 624 393 129 130 198 237 248 386 31 94 32 97 31 290 0 215 -15 310 -75 492 -155 468 -555 915 -1115 1248 -103 61 -353 190 -369 190 -3 0 11 -22 30 -49z"
      />
      <path
        style={{ fill: 'var(--color-primary)' }}
        d="M1894 2563 c15 -50 28 -204 28 -328 0 -299 -76 -521 -209 -606 -106 -66 -253 -23 -407 120 l-48 46 7 -60 c41 -366 149 -637 345 -865 70 -80 199 -186 281 -230 33 -17 57 -35 54 -40 -3 -4 5 -6 17 -2 14 3 19 1 14 -6 -5 -8 -2 -10 8 -6 9 3 16 1 16 -5 0 -6 7 -8 15 -5 8 4 15 1 15 -7 0 -7 3 -9 7 -6 3 4 12 2 19 -4 15 -12 114 8 114 23 0 5 4 7 9 3 5 -3 12 -1 16 5 4 6 11 8 16 5 5 -4 9 -1 9 5 0 7 7 9 16 6 10 -4 13 -2 8 6 -5 8 -2 9 9 5 10 -4 17 -2 17 4 0 6 7 8 16 5 10 -4 13 -2 8 6 -5 8 -2 9 10 5 9 -4 15 -3 12 2 -4 5 18 23 47 39 79 45 215 161 273 233 168 209 232 392 221 634 -6 149 -31 247 -96 381 -154 314 -429 534 -791 634 -90 24 -82 24 -76 3z M1373 2345 c0 -44 2 -61 4 -37 2 23 2 59 0 80 -2 20 -4 1 -4 -43z M1210 1067 c0 -2 15 -16 33 -33 l32 -29 -29 33 c-28 30 -36 37 -36 29z M1280 997 c0 -2 15 -16 33 -33 l32 -29 -29 33 c-28 30 -36 37 -36 29z"
      />
      <path
        style={{ fill: 'var(--color-primary-light)' }}
        d="M2353 1779 c48 -156 48 -342 0 -480 -68 -198 -198 -315 -362 -326 -83 -6 -169 15 -274 68 -74 37 -78 38 -71 17 50 -161 204 -362 349 -455 28 -18 55 -37 62 -43 16 -13 36 -13 51 2 7 7 12 9 12 5 0 -4 6 -3 13 3 6 6 38 26 69 44 214 126 349 338 373 587 13 128 -28 299 -105 433 -40 70 -127 178 -117 145z"
      />
    </g>
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

  useEffect(() => {
    if (!isOpen) return;
    const closeOnScroll = () => setIsOpen(false);
    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, [isOpen]);

  const toggleMode = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.dataset.mode = next;
    localStorage.setItem('site-mode', next);
  };

  return (
    <>
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
        </div>
      </header>

      {/* Rendered outside <header> on purpose: .navbar has backdrop-filter,
          which creates a new containing block for position:fixed
          descendants — nested here, "fixed" would resolve against the
          ~64px-tall header instead of the viewport. */}
      <div className="navbar__fab-wrapper">
        {isOpen && (
          <nav className="navbar__fab-links">
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <ModeToggle mode={mode} onToggle={toggleMode} />
          </nav>
        )}
        <button
          className={`navbar__fab${isOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </>
  );
};

export default Navbar;
