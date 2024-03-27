import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import LoginPage from '@/pages/auth/LoginPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
);
