import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AppRouter } from './AppRouter';

export function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}