import { ResetStyle, theme } from '@oechul/styles';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <></>
  </ThemeProvider>,
);
