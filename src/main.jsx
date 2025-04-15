import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TailwindTest from './TailwindTest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TailwindTest /> */}
    <App />
  </StrictMode>,
)
