import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import './main.css'

const rootNode = document.getElementById('root')
const root = createRoot(rootNode)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
