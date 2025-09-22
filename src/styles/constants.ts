// CSS переменные как константы для использования в компонентах
export const CSS_VARIABLES = {
  // Fonts
  fontFamilySans: 'var(--font-family-sans)',

  // Primary Colors
  colorPrimary: 'var(--color-primary)',
  colorPrimaryHover: 'var(--color-primary-hover)',
  colorPrimary10: 'var(--color-primary-10)',
  colorPrimary20: 'var(--color-primary-20)',
  colorSecondary: 'var(--color-secondary)',
  colorSecondaryHover: 'var(--color-secondary-hover)',
  colorSecondary10: 'var(--color-secondary-10)',

  // Error Colors
  colorError: 'var(--color-error)',
  colorErrorHover: 'var(--color-error-hover)',
  colorError10: 'var(--color-error-10)',
  colorError20: 'var(--color-error-20)',

  // Success Colors
  colorSuccess: 'var(--color-success)',
  colorSuccessHover: 'var(--color-success-hover)',
  colorSuccess10: 'var(--color-success-10)',

  // Warning Colors
  colorWarning: 'var(--color-warning)',
  colorWarningHover: 'var(--color-warning-hover)',
  colorWarning10: 'var(--color-warning-10)',

  // Info Colors
  colorInfo: 'var(--color-info)',
  colorInfoHover: 'var(--color-info-hover)',
  colorInfo10: 'var(--color-info-10)',

  // Neutral / Surface Colors
  colorSurface: 'var(--color-surface)',
  colorBackground: 'var(--color-background)',
  colorBorder: 'var(--color-border)',
  colorBorderStrong: 'var(--color-border-strong)',
  colorText: 'var(--color-text)',
  colorTextMuted: 'var(--color-text-muted)',
  colorDisabled: 'var(--color-disabled)',
  colorDisabledBg: 'var(--color-disabled-bg)',

  // Focus
  focusRing: 'var(--focus-ring)',

  // Shadows
  shadowSm: 'var(--shadow-sm)',
  shadowMd: 'var(--shadow-md)',
  shadowLg: 'var(--shadow-lg)',
  shadowXl: 'var(--shadow-xl)',

  // Border Radius
  radiusSm: 'var(--radius-sm)',
  radiusMd: 'var(--radius-md)',
  radiusLg: 'var(--radius-lg)',
  radiusXl: 'var(--radius-xl)',

  // Spacing
  spacingXs: 'var(--spacing-xs)',
  spacingSm: 'var(--spacing-sm)',
  spacingMd: 'var(--spacing-md)',
  spacingLg: 'var(--spacing-lg)',
  spacingXl: 'var(--spacing-xl)',

  // Transitions
  transitionFast: 'var(--transition-fast)',
  transitionNormal: 'var(--transition-normal)',
  transitionSlow: 'var(--transition-slow)',

  // Z-index
  zDropdown: 'var(--z-dropdown)',
  zModal: 'var(--z-modal)',
  zTooltip: 'var(--z-tooltip)',
  zToast: 'var(--z-toast)',
} as const;

// Прямые значения цветов (без CSS переменных)
export const COLORS = {
  // Primary Colors
  primary: '#1976d2',
  primaryHover: '#1565c0',
  primary10: 'rgba(25, 118, 210, 0.1)',
  primary20: 'rgba(25, 118, 210, 0.2)',

  // Secondary Colors
  secondary: '#6c757d',
  secondaryHover: '#5a6268',
  secondary10: 'rgba(108, 117, 125, 0.1)',

  // Error Colors
  error: '#d32f2f',
  errorHover: '#c62828',
  error10: 'rgba(211, 47, 47, 0.1)',
  error20: 'rgba(211, 47, 47, 0.2)',

  // Success Colors
  success: '#28a745',
  successHover: '#218838',
  success10: 'rgba(40, 167, 69, 0.1)',

  // Warning Colors
  warning: '#ff9800',
  warningHover: '#f57c00',
  warning10: 'rgba(255, 152, 0, 0.1)',

  // Info Colors
  info: '#17a2b8',
  infoHover: '#138496',
  info10: 'rgba(23, 162, 184, 0.1)',

  // Neutral / Surface Colors
  surface: '#ffffff',
  background: '#ffffff',
  border: '#ccc',
  borderStrong: '#e0e0e0',
  text: '#333',
  textMuted: '#666',
  disabled: '#999',
  disabledBg: '#f5f5f5',
} as const;

// Шрифты
export const FONTS = {
  sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif`,
} as const;

// Тени
export const SHADOWS = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
} as const;

// Радиусы границ
export const RADIUS = {
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '12px',
} as const;

// Отступы
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const;

// Переходы
export const TRANSITIONS = {
  fast: '0.15s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
} as const;

// Z-index
export const Z_INDEX = {
  dropdown: 1000,
  modal: 1300,
  tooltip: 1500,
  toast: 2000,
} as const;

// Focus ring
export const FOCUS_RING = `0 0 0 3px ${COLORS.primary20}`;

// Типы для TypeScript
export type ColorKey = keyof typeof COLORS;
export type ShadowKey = keyof typeof SHADOWS;
export type RadiusKey = keyof typeof RADIUS;
export type SpacingKey = keyof typeof SPACING;
export type TransitionKey = keyof typeof TRANSITIONS;
export type ZIndexKey = keyof typeof Z_INDEX;
