import { BottomSheetModal, ResetStyle, theme } from '@oechul/styles';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@/routers/AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <BottomSheetModal />
    <ResetStyle />
    <Router>
      <AppRouter />
    </Router>
  </ThemeProvider>,
);
