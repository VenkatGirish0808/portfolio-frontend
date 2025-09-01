import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css' // ✅ FIXED

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
