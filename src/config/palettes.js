export const palettes = {
  original: {
    // Matches src/components/Layout/theme.js from the Gatsby site exactly
    // (themedark / themelight) — neutral grays, not navy-tinted.
    label: 'Original (blue)',
    dark: {
      bg: '#191919',
      surface: '#232323',
      border: '#303030',
      text: '#f8f8f8',
      textMuted: '#b3b3b3',
      primary: '#6d83f2',
      primaryLight: '#6a98f0',
      primaryHover: '#4961dc',
      tagBg: 'rgba(109, 131, 242, 0.12)',
      tagBorder: 'rgba(109, 131, 242, 0.3)',
      overlay: 'rgba(25, 25, 25, 0.92)',
      navBg: 'rgba(25, 25, 25, 0.85)',
      gradient: 'linear-gradient(134deg, #6a98f0 0%, #4961dc 99%)',
    },
    light: {
      bg: '#f8f8f8',
      surface: '#f8f8f8',
      border: '#c7d0ff',
      text: '#383838',
      textMuted: '#5f5f5f',
      primary: '#6d83f2',
      primaryLight: '#4961dc',
      primaryHover: '#4961dc',
      tagBg: 'rgba(109, 131, 242, 0.08)',
      tagBorder: 'rgba(109, 131, 242, 0.35)',
      overlay: 'rgba(248, 248, 248, 0.9)',
      navBg: 'rgba(248, 248, 248, 0.85)',
      gradient: 'linear-gradient(134deg, #6a98f0 0%, #4961dc 99%)',
    },
  },
  pytorch: {
    label: 'PyTorch (orange/lilac)',
    dark: {
      bg: '#0d0d1a',
      surface: '#1a1a2e',
      border: 'rgba(255, 255, 255, 0.08)',
      text: '#e5e5f0',
      textMuted: '#9797ab',
      primary: '#ee4c2c',
      primaryLight: '#a855f7',
      primaryHover: '#d8431f',
      tagBg: 'rgba(168, 85, 247, 0.1)',
      tagBorder: 'rgba(168, 85, 247, 0.25)',
      overlay: 'rgba(13, 13, 26, 0.92)',
      navBg: 'rgba(13, 13, 26, 0.85)',
      gradient: 'linear-gradient(135deg, #ee4c2c, #a855f7)',
    },
    light: {
      bg: '#fbf7f5',
      surface: '#ffffff',
      border: 'rgba(238, 76, 44, 0.2)',
      text: '#211a1a',
      textMuted: '#6b5b56',
      primary: '#ee4c2c',
      primaryLight: '#a855f7',
      primaryHover: '#d8431f',
      tagBg: 'rgba(168, 85, 247, 0.08)',
      tagBorder: 'rgba(168, 85, 247, 0.3)',
      overlay: 'rgba(255, 255, 255, 0.9)',
      navBg: 'rgba(255, 255, 255, 0.85)',
      gradient: 'linear-gradient(135deg, #ee4c2c, #a855f7)',
    },
  },
};

// Brand used for production builds / visitors (dev-only toggle lets you compare
// against the other brand while running `pnpm dev`). Change this to switch the live site.
export const defaultPalette = 'original';
export const paletteNames = Object.keys(palettes);

// Light/dark is a real, visitor-facing toggle (see Navbar.jsx), independent of brand.
// This only sets the *initial* mode before any saved preference is restored.
export const defaultMode = 'dark';
export const modeNames = ['dark', 'light'];
