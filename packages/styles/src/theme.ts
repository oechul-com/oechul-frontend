const fontSize = {
  '5xl': '4.5rem',
  '4xl': '4.0rem',
  '3xl': '3.375rem',
  '2xl': '2.0rem',
  xl: '1.25rem',
  lg: '1.125rem',
  md: '1.0rem',
  sm: '0.9375rem',
  xs: '0.875rem',
  '2xs': '0.75rem',
  '3xs': '0.6875rem',
  '4xs': '0.625rem',
};

const colors = {
  red: {
    main: '#F56565',
    alert: '#DA4040',
    accent: '#FF4B4B',
    alertBg: '#FBECEC',
  },
  green: {
    main: '#1CC54B',
  },
  blue: {
    main: '#0085FF',
    style: '#F2F9FF',
  },
  black: {
    1: '#FFFFFF',
    2: '#FCFCFC',
    3: '#F5F5F5',
    4: '#F0F0F0',
    5: '#D9D9D9',
    6: '#BFBFBF',
    7: '#8C8C8C',
    8: '#595959',
    9: '#454545',
    10: '#262626',
    11: '#1F1F1F',
    12: '#141414',
    13: '#000000',
  },
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

export const theme = { fontSize, colors, layout, responsive };
