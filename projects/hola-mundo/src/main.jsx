import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import "./estilo.css"
import "./App.css"
const root = createRoot(document.getElementById('root'))
root.render()

root.render(
  <App />
)