// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import '../public/assets/i18n/i18n'
import translation from '../public/assets/i18n/i18n'
import App from './App'
import { ThemeProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider>
    <I18nextProvider i18n={translation}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </I18nextProvider>
      </ThemeProvider>
  </React.StrictMode>
)
