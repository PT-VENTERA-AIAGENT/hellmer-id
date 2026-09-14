import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const rootEl = document.getElementById('root')!
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <StrictMode><App /></StrictMode>)
} else {
  createRoot(rootEl).render(<StrictMode><App /></StrictMode>)
}
