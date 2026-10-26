import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { basePath, getLang, localizePath, useTranslations } from '@/i18n';
import './Navbar.css';

// Paths are language-neutral; each render prefixes them with "/es" when needed.
const navItems = [
  { path: '/#about', key: 'nav.about' },
  { path: '/#experience', key: 'nav.experience' },
  { path: '/#education', key: 'nav.education' },
  { path: '/#projects', key: 'nav.projects' },
  { path: '/blog/', key: 'nav.blog' },
  { path: '/#contact', key: 'nav.contact' },
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

const ModeToggle = ({ mode, onToggle, t }) => (
  <button
    type="button"
    className="navbar__mode-toggle"
    aria-label={mode === 'dark' ? t('nav.toLight') : t('nav.toDark')}
    onClick={onToggle}
  >
    {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
  </button>
);

// Reading progress bar along the top edge; temporarily turned off.
const SHOW_PROGRESS = false;

// Hash links that point at a section on the home page ("/#experience").
const sectionIds = navItems.map(item => item.path.split('#')[1]).filter(Boolean);

// Pages outside the home page highlight the link they belong to: the blog
// and its posts light up "Blog", case studies belong under "Projects".
const routeLinks = [
  { prefix: '/blog', path: '/blog/' },
  { prefix: '/case-studies', path: '/#projects' },
];
const linkPathFor = pathname => {
  const path = localizePath(pathname, 'en');
  return routeLinks.find(({ prefix }) => path === prefix || path.startsWith(`${prefix}/`))?.path ?? null;
};

// Same page in the other language. On the home page it keeps the section
// in view, so switching mid-scroll lands on the same section.
const LangSwitch = ({ lang, pathname, activeId, t }) => {
  const other = lang === 'es' ? 'en' : 'es';
  const href = localizePath(pathname, other) + (activeId ? `#${activeId}` : '');
  return (
    <a className="navbar__lang" href={href} hrefLang={other} lang={other} aria-label={t('nav.switchLang')}>
      {other.toUpperCase()}
    </a>
  );
};

// Lenis is mounted in Layout.astro; pause it while the menu overlay is open
// so wheel input can't scroll the page underneath.
const setPageScrollLocked = locked => {
  const lenis = window.__lenis;
  if (lenis) locked ? lenis.stop() : lenis.start();
  document.documentElement.style.overflow = locked ? 'hidden' : '';
};

const Navbar = ({ pathname = '/' }) => {
  const lang = getLang(pathname);
  const t = useTranslations(lang);
  const base = basePath(lang);
  const links = navItems.map(item => ({ href: base + item.path, label: t(item.key) }));
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [routeHref, setRouteHref] = useState(null);
  const progressRef = useRef(null);
  const pillRef = useRef(null);
  const indicatorRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstOverlayLinkRef = useRef(null);

  useEffect(() => {
    setMode(document.documentElement.dataset.mode === 'light' ? 'light' : 'dark');
    const path = linkPathFor(window.location.pathname);
    setRouteHref(path && base + path);
  }, [base]);

  // A home-page section in view wins; otherwise fall back to the page's own link.
  const activeHref = activeId ? `${base}/#${activeId}` : routeHref;

  // Scrolled state, progress bar and active section, all from one
  // rAF-throttled scroll handler. The bar is written straight to the DOM.
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      setScrolled(y > 40);
      const line = window.innerHeight * 0.4;
      let current = null;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  // Slide the solid indicator under the active link. It only slides when
  // the active link changes; appearing on page load, re-measuring once the
  // web fonts load, and window resizes all move it in place without a slide.
  const placeIndicator = useCallback(
    (instant = false) => {
      const pill = pillRef.current;
      const indicator = indicatorRef.current;
      if (!pill || !indicator) return;
      const link = activeHref && pill.querySelector(`a[href="${activeHref}"]`);
      if (!link) {
        indicator.style.opacity = '0';
        return;
      }
      const jump = instant || indicator.style.opacity !== '1';
      if (jump) indicator.style.transition = 'opacity 0.4s var(--nav-ease)';
      indicator.style.width = `${link.offsetWidth}px`;
      indicator.style.transform = `translateX(${link.offsetLeft}px)`;
      if (jump) {
        indicator.getBoundingClientRect(); // commit the position before re-enabling the slide
        indicator.style.transition = '';
      }
      indicator.style.opacity = '1';
    },
    [activeHref]
  );

  useLayoutEffect(() => placeIndicator(), [placeIndicator]);
  useEffect(() => {
    const placeInstantly = () => placeIndicator(true);
    window.addEventListener('resize', placeInstantly);
    document.fonts?.ready.then(placeInstantly);
    return () => window.removeEventListener('resize', placeInstantly);
  }, [placeIndicator]);

  // Mobile overlay: lock page scroll, close on Esc, move focus in and back.
  useEffect(() => {
    if (!isOpen) return;
    const button = menuButtonRef.current;
    setPageScrollLocked(true);
    const focusTimer = setTimeout(() => firstOverlayLinkRef.current?.focus(), 120);
    const onKey = event => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(focusTimer);
      setPageScrollLocked(false);
      window.removeEventListener('keydown', onKey);
      button?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const toggleMode = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.dataset.mode = next;
    localStorage.setItem('site-mode', next);
  };

  return (
    <>
      {SHOW_PROGRESS && <div className="navbar__progress" ref={progressRef} aria-hidden="true" />}

      <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href={`${base}/`} className="navbar__brand" aria-label={t('nav.home')}>
            <span className="navbar__mark">
              <FlameLogo />
            </span>
            <span className="navbar__name">cristhIAn</span>
          </a>

          <div className="navbar__right">
            <nav className="navbar__pill" ref={pillRef} aria-label={t('nav.primary')}>
              <span className="navbar__indicator" ref={indicatorRef} aria-hidden="true" />
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="navbar__link"
                  aria-current={link.href === activeHref ? 'true' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <LangSwitch lang={lang} pathname={pathname} activeId={activeId} t={t} />
            <ModeToggle mode={mode} onToggle={toggleMode} t={t} />
            <button
              ref={menuButtonRef}
              type="button"
              className="navbar__menu-btn"
              aria-expanded={isOpen}
              aria-controls="menu-overlay"
              onClick={() => setIsOpen(true)}
            >
              {t('nav.menu')} <i aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-overlay"
        className={`navbar-overlay${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.siteMenu')}
        inert={isOpen ? undefined : ''}
      >
        <div className="container navbar-overlay__top">
          <span className="navbar__mark navbar__mark--filled">
            <FlameLogo />
          </span>
          <button type="button" className="navbar-overlay__close" onClick={() => setIsOpen(false)}>
            {t('nav.close')}
          </button>
        </div>
        <ul className="container navbar-overlay__list">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                ref={i === 0 ? firstOverlayLinkRef : undefined}
                href={link.href}
                style={{ '--i': i }}
                aria-current={link.href === activeHref ? 'true' : undefined}
                onClick={() => setIsOpen(false)}
              >
                <small>{String(i + 1).padStart(2, '0')}</small>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container navbar-overlay__foot">
          <a href="mailto:christiansanchezsaune@gmail.com">christiansanchezsaune@gmail.com</a>
          <div className="navbar-overlay__toggles">
            <LangSwitch lang={lang} pathname={pathname} activeId={activeId} t={t} />
            <ModeToggle mode={mode} onToggle={toggleMode} t={t} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
