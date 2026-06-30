import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './lib/store.jsx'
import App from './App.jsx'
import './index.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
)
