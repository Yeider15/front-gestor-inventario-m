// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- ¡Nuestra pieza faltante!
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvemos la App para que entienda las rutas */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)