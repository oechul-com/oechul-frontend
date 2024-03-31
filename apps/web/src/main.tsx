import { ResetStyle, theme } from '@oechul/styles';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import LoginPage from '@/pages/auth/LoginPage.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <LoginPage />
  </ThemeProvider>,
);
