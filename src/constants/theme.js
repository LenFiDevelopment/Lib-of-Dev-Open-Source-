// shadcn/ui-inspired dark theme colors and styles
export const colors = {
  // Primary colors (shadcn-inspired)
  primary: '#6C5CE7',
  primaryDark: '#5F3DC4',
  primaryLight: '#A29BFE',
  secondary: '#00CEC9',
  secondaryDark: '#00B5AD',
  accent: '#FD79A8',
  accentDark: '#E84393',
  
  // Background colors (Dark Mode) - shadcn style
  background: '#09090B',        // Main background
  backgroundElevated: '#18181B', // Cards, elevated surfaces
  backgroundCard: '#27272A',     // Card backgrounds
  backgroundMuted: '#1C1C1F',    // Muted backgrounds
  
  // Text colors - high contrast like shadcn
  text: '#FAFAFA',              // Primary text
  textSecondary: '#A1A1AA',     // Secondary text
  textMuted: '#71717A',         // Muted text
  textInverse: '#09090B',       // Inverse text (on light backgrounds)
  
  // Code colors - VS Code Dark+ theme
  codeBackground: '#1E1E1E',
  codeText: '#D4D4D4',
  codeComment: '#6A9955',
  codeKeyword: '#569CD6',
  codeString: '#CE9178',
  codeFunction: '#DCDCAA',
  codeNumber: '#B5CEA8',
  codeOperator: '#D4D4D4',
  
  // Status colors - shadcn palette
  success: '#22C55E',
  successDark: '#16A34A',
  warning: '#F59E0B',
  warningDark: '#D97706',
  error: '#EF4444',
  errorDark: '#DC2626',
  info: '#3B82F6',
  infoDark: '#2563EB',
  
  // Border colors - subtle like shadcn
  border: '#27272A',
  borderLight: '#3F3F46',
  borderFocus: '#6C5CE7',
  borderMuted: '#1C1C1F',
  
  // Language colors (unchanged)
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  python: '#3776AB',
  java: '#ED8B00',
  c: '#A8B9CC',
  csharp: '#239120',
  go: '#00ADD8',
  rust: '#CE422B',
  swift: '#FA7343',
  kotlin: '#7F52FF',
  ruby: '#CC342D',
  php: '#777BB4',
  sql: '#00758F',
  
  // Semantic colors
  ring: '#6C5CE7',              // Focus rings
  input: '#27272A',             // Input backgrounds
  foreground: '#FAFAFA',        // Foreground elements
  destructive: '#EF4444',       // Destructive actions
  destructiveForeground: '#FAFAFA',
  muted: '#27272A',
  mutedForeground: '#A1A1AA',
  popover: '#18181B',
  popoverForeground: '#FAFAFA',
  card: '#18181B',
  cardForeground: '#FAFAFA',
  
  // Alpha variants for overlays and backgrounds
  primaryAlpha: 'rgba(108, 92, 231, 0.2)',
  successAlpha: 'rgba(34, 197, 94, 0.15)',
  accentAlpha: 'rgba(253, 121, 168, 0.15)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    xxxl: 36,
  },
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  h1: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: -0.25,
  },
  h3: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 24,
  },
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.text,
    lineHeight: 28,
  },
  bodySecondary: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textMuted,
    lineHeight: 16,
  },
  code: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: colors.codeText,
    lineHeight: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
};

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 12,
  },
};

export const borderRadius = {
  none: 0,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  xxl: 28,
  full: 9999,
};

// Animation durations (shadcn-style)
export const animations = {
  fast: 150,
  normal: 250,
  slow: 350,
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export default {
  colors,
  spacing,
  typography,
  shadows,
  borderRadius,
  animations,
  zIndex,
};
