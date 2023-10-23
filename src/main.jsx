import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PageProvider } from './providers/PageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageProvider>
        <App />
      </PageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
