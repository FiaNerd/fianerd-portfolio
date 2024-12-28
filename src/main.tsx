// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import '../public/assets/i18n/i18n.ts'
import translation from '../public/assets/i18n/i18n.ts'
import { ThemeProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={translation}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
)
