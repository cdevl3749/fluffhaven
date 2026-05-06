import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import Dashboard from './Dashboard.jsx'

import Blog from './blog/Blog.jsx'
import CleanDogPaws from './blog/clean-dog-paws.jsx'
import RemovePetHair from './blog/remove-pet-hair.jsx'
import ProtectCarFromDogHair from './blog/protect-car-from-dog-hair.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      window.location.pathname === "/dashboard" ? (
        <Dashboard />
      ) : window.location.pathname === "/blog" ? (
        <Blog />
      ) : window.location.pathname === "/blog/clean-dog-paws" ? (
        <CleanDogPaws />
      ) : window.location.pathname === "/blog/remove-pet-hair" ? (
        <RemovePetHair />
      ) : window.location.pathname === "/blog/protect-car-from-dog-hair" ? (
        <ProtectCarFromDogHair />
      ) : (
        <App />
      )
    }
  </StrictMode>,
)