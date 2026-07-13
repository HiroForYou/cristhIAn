export const palettes = {
  original: {
    label: 'Original (blue)',
    bg: '#0b0d18',
    surface: '#0f1221',
    border: 'rgba(109, 131, 242, 0.16)',
    text: '#f8f8f8',
    textMuted: '#9aa1c2',
    primary: '#6d83f2',
    primaryLight: '#8ea1f5',
    primaryHover: '#4961dc',
    tagBg: 'rgba(109, 131, 242, 0.12)',
    tagBorder: 'rgba(109, 131, 242, 0.3)',
    overlay: 'rgba(11, 13, 24, 0.92)',
    navBg: 'rgba(11, 13, 24, 0.85)',
    gradient: 'linear-gradient(134deg, #6a98f0 0%, #4961dc 99%)',
  },
  pytorch: {
    label: 'PyTorch (orange/lilac)',
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
};

// Palette used for production builds / visitors. Change this to switch the live site.
export const defaultPalette = 'original';

export const paletteNames = Object.keys(palettes);
