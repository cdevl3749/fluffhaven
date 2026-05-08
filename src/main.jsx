import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import Dashboard from './Dashboard.jsx'

import Blog from './blog/Blog.jsx'
import CleanDogPaws from './blog/clean-dog-paws.jsx'
import RemovePetHair from './blog/remove-pet-hair.jsx'
import ProtectCarFromDogHair from './blog/protect-car-from-dog-hair.jsx'
import BestDogAccessoriesSummerWalks from './blog/best-dog-accessories-summer-walks.jsx'
import KeepDogCoolSummer from './blog/keep-dog-cool-summer.jsx'
import KeepCatEntertainedIndoors from './blog/keep-cat-entertained-indoors.jsx'

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
      ) : window.location.pathname === "/blog/best-dog-accessories-summer-walks" ? (
        <BestDogAccessoriesSummerWalks />
      ) : window.location.pathname === "/blog/keep-dog-cool-summer" ? (
        <KeepDogCoolSummer />
      ) : window.location.pathname === "/blog/keep-cat-entertained-indoors" ? (
        <KeepCatEntertainedIndoors />
      ) : (
        <App />
      )
    }
  </StrictMode>,
)