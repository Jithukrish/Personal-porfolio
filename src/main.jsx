import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { siteConfig } from './config/siteConfig'
import App from './App'
import './styles/variables.css'
import './styles/global.css'
import './styles/motion.css'
import './styles/responsive.css'

document.title = siteConfig.seo.title

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
