import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App.tsx'
import { StyleProvider } from '@ant-design/cssinjs'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <App />
    </StyleProvider>
  </React.StrictMode>
)
