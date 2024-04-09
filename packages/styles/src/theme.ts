const fontSizes = {
  '5xl': '4.5rem', // 72px
  '4xl': '4.0rem', // 64px
  '3xl': '3.375rem', // 54px
  '2xl': '2.0rem', // 32px
  xl: '1.25rem', // 20px
  lg: '1.125rem', // 18px
  md: '1.0rem', // 16px
  sm: '0.9375rem', // 15px
  xs: '0.875rem', // 14px
  '2xs': '0.75rem', // 12px
  '3xs': '0.6875rem', // 11px
  '4xs': '0.625rem', // 10px
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const colors = {
  red: {
    main: '#F56565',
    alert: '#DA4040',
    alertBg: '#FBECEC',
    alertHover: '#F8DBDB',
    accent: '#FF4B4B',
    accentHover: '#FF6666',
    warningBg: '#FBF2EC',
  },
  green: {
    main: '#1CC54B',
    bg: '#E8F9ED',
  },
  blue: {
    main: '#0085FF',
    bg: '#F2F9FF',
    bgHover: '#DCEFFF',
  },

  white: '#FFFFFF',
  black: '#000000',

  gray100: '#FCFCFC',
  gray150: '#F8F8F8',
  gray200: '#F5F5F5',
  gray250: '#F0F0F0',
  gray300: '#D9D9D9',
  gray400: '#BFBFBF',
  gray500: '#8C8C8C',
  gray600: '#595959',
  gray700: '#454545',
  gray750: '#333333',
  gray800: '#262626',
  gray850: '#1F1F1F',
  gray900: '#141414',
};

const layout = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const responsive = {
  mobile: '(max-width: 600px)',
  tablet: '(min-width: 601px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px)',
};

const sizes = {
  app: '33.75rem', // 540px
};

export const theme = {
  fontSizes,
  fontWeights,
  colors,
  layout,
  responsive,
  sizes,
};
