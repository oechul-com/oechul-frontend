import { ResetStyle, theme } from '@oechul/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@/routers/AppRouter.tsx';

export const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            staleTime: 1000 * 60 * 10,
            retry: 0,
          },
        },
      }),
  );

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ResetStyle />
        <Router>
          <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
