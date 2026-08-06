import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import { AppRoutes } from './App';

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <LanguageProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </LanguageProvider>
    </StrictMode>,
  );
}
