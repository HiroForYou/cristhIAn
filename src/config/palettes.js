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
      // Original theme.js had bg === secondaryColor (both #F8F8F8), relying on
      // the card's box-shadow alone to read as "raised" — that reads as
      // invisible on real screens, so surface gets a touch of real contrast.
      bg: '#f1f2f6',
      surface: '#ffffff',
      border: '#c7d0ff',
      text: '#383838',
      textMuted: '#5f5f5f',
      primary: '#6d83f2',
      primaryLight: '#4961dc',
      primaryHover: '#4961dc',
      tagBg: 'rgba(109, 131, 242, 0.08)',
      tagBorder: 'rgba(109, 131, 242, 0.35)',
      overlay: 'rgba(255, 255, 255, 0.9)',
      navBg: 'rgba(255, 255, 255, 0.85)',
      gradient: 'linear-gradient(134deg, #6a98f0 0%, #4961dc 99%)',
    },
  },
  pytorch: {
    // Official PyTorch brand palette (pytorch.org/brand-guidelines):
    // Orange #EE4C2C, Purple #9E529F, Deep Charcoal #252525, True Black,
    // plus the secondary grays (Light/Middle Gray, Off White).
    label: 'PyTorch (brand)',
    dark: {
      bg: '#000000',
      surface: '#252525',
      border: 'rgba(158, 82, 159, 0.25)',
      text: '#ffffff',
      textMuted: '#bbbbbb',
      primary: '#ee4c2c',
      primaryLight: '#9e529f',
      primaryHover: '#d8431f',
      tagBg: 'rgba(158, 82, 159, 0.12)',
      tagBorder: 'rgba(158, 82, 159, 0.3)',
      overlay: 'rgba(0, 0, 0, 0.92)',
      navBg: 'rgba(0, 0, 0, 0.85)',
      gradient: 'linear-gradient(135deg, #ee4c2c, #9e529f)',
    },
    light: {
      bg: '#ffffff',
      surface: '#f5f5f5',
      border: 'rgba(37, 37, 37, 0.15)',
      text: '#252525',
      textMuted: '#77787b',
      primary: '#ee4c2c',
      primaryLight: '#9e529f',
      primaryHover: '#d8431f',
      tagBg: 'rgba(158, 82, 159, 0.08)',
      tagBorder: 'rgba(158, 82, 159, 0.3)',
      overlay: 'rgba(255, 255, 255, 0.9)',
      navBg: 'rgba(255, 255, 255, 0.85)',
      gradient: 'linear-gradient(135deg, #ee4c2c, #9e529f)',
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
