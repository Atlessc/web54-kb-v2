import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0ProviderWithNavigate } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
      <Router>
        <App />
      </Router>
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
)
