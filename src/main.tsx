import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import { StyleProvider } from '@ant-design/cssinjs'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  </React.StrictMode>
)
