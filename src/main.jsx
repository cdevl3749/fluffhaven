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

import CatScratchSofa from './blog/cat-scratch-sofa.jsx'
import CatWakeUpNight from './blog/cat-wake-up-night.jsx'

import CatMeowNight from './blog/cat-meow-night.jsx'

import DogSmellRainyWalk from './blog/dog-smell-rainy-walk.jsx'
import DogHairCarSeats from './blog/dog-hair-car-seats.jsx'
import DogHairHome from './blog/dog-hair-home.jsx'

import CatBoredAtHome from './blog/cat-bored-at-home.jsx'
import StopCatScratchingFurniture from './blog/stop-cat-scratching-furniture.jsx'

import DogLickPawsAfterWalks from './blog/dog-lick-paws-after-walks.jsx'
import ReduceCatHairFurniture from './blog/reduce-cat-hair-furniture.jsx'

import CalmAnxiousDogHome from './blog/calm-anxious-dog-home.jsx'
import IndoorCatMentalStimulation from './blog/indoor-cat-mental-stimulation.jsx'

import DogFollowMeEverywhere from './blog/dog-follow-me-everywhere.jsx'
import CatHairOnClothes from './blog/cat-hair-on-clothes.jsx'

import SignsDogTooHotSummer from './blog/signs-dog-too-hot-summer.jsx'
import HelpDogCoolDownHome from './blog/help-dog-cool-down-home.jsx'

import CatPeeingOutsideLitterBox from './blog/cat-peeing-outside-litter-box.jsx'
import DogHairOnClothes from './blog/dog-hair-on-clothes.jsx'

import WhyDogEatGrass from './blog/why-dog-eat-grass.jsx'
import DogBarkingAtNight from './blog/dog-barking-at-night.jsx'

import CatKnockThingsOffTable from './blog/cat-knock-things-off-table.jsx'
import CatFollowMeEverywhere from './blog/cat-follow-me-everywhere.jsx'

import DogSensitiveSkinCauses from './blog/dog-sensitive-skin-causes.jsx'
import CatSensitiveSkinCauses from './blog/cat-sensitive-skin-causes.jsx'

import TravelSafelyWithDogSummer from './blog/travel-safely-with-dog-summer.jsx'
import SummerVacationChecklistPets from './blog/summer-vacation-checklist-pets.jsx'

import WhyCatSleepOnMe from './blog/why-cat-sleep-on-me.jsx'
import DogFollowMeBathroom from './blog/dog-follow-me-bathroom.jsx'

import CanCatsGetHeatstroke from './blog/can-cats-get-heatstroke.jsx'
import HowToKeepCatCoolHeatwave from './blog/how-to-keep-cat-cool-heatwave.jsx'

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
      ) : window.location.pathname === "/blog/cat-scratch-sofa" ? (
        <CatScratchSofa />
      ) : window.location.pathname === "/blog/cat-wake-up-night" ? (
        <CatWakeUpNight />
      ) : window.location.pathname === "/blog/cat-meow-night" ? (
        <CatMeowNight />
      ) : window.location.pathname === "/blog/dog-smell-rainy-walk" ? (
        <DogSmellRainyWalk />
      ) : window.location.pathname === "/blog/dog-hair-car-seats" ? (
        <DogHairCarSeats />
      ) : window.location.pathname === "/blog/dog-hair-home" ? (
        <DogHairHome />
      ) : window.location.pathname === "/blog/cat-bored-at-home" ? (
        <CatBoredAtHome />
      ) : window.location.pathname === "/blog/stop-cat-scratching-furniture" ? (
        <StopCatScratchingFurniture />
      ) : window.location.pathname === "/blog/dog-lick-paws-after-walks" ? (
        <DogLickPawsAfterWalks />
      ) : window.location.pathname === "/blog/reduce-cat-hair-furniture" ? (
        <ReduceCatHairFurniture />
      ) : window.location.pathname === "/blog/calm-anxious-dog-home" ? (
        <CalmAnxiousDogHome />
      ) : window.location.pathname === "/blog/indoor-cat-mental-stimulation" ? (
        <IndoorCatMentalStimulation />
      ) : window.location.pathname === "/blog/dog-follow-me-everywhere" ? (
        <DogFollowMeEverywhere />
      ) : window.location.pathname === "/blog/cat-hair-on-clothes" ? (
        <CatHairOnClothes />
      ) : window.location.pathname === "/blog/signs-dog-too-hot-summer" ? (
        <SignsDogTooHotSummer />
      ) : window.location.pathname === "/blog/help-dog-cool-down-home" ? (
        <HelpDogCoolDownHome />
      ) : window.location.pathname === "/blog/cat-peeing-outside-litter-box" ? (
        <CatPeeingOutsideLitterBox />
      ) : window.location.pathname === "/blog/dog-hair-on-clothes" ? (
        <DogHairOnClothes />
      ) : window.location.pathname === "/blog/why-dog-eat-grass" ? (
        <WhyDogEatGrass />
      ) : window.location.pathname === "/blog/dog-barking-at-night" ? (
        <DogBarkingAtNight />
      ) : window.location.pathname === "/blog/cat-knock-things-off-table" ? (
        <CatKnockThingsOffTable />
      ) : window.location.pathname === "/blog/cat-follow-me-everywhere" ? (
        <CatFollowMeEverywhere />
      ) : window.location.pathname === "/blog/dog-sensitive-skin-causes" ? (
        <DogSensitiveSkinCauses />
      ) : window.location.pathname === "/blog/cat-sensitive-skin-causes" ? (
        <CatSensitiveSkinCauses />
      ) : window.location.pathname === "/blog/travel-safely-with-dog-summer" ? (
        <TravelSafelyWithDogSummer />
      ) : window.location.pathname === "/blog/summer-vacation-checklist-pets" ? (
        <SummerVacationChecklistPets />
        ) : window.location.pathname === "/blog/why-cat-sleep-on-me" ? (
        <WhyCatSleepOnMe />
      ) : window.location.pathname === "/blog/dog-follow-me-bathroom" ? (
        <DogFollowMeBathroom />
      ) : window.location.pathname === "/blog/can-cats-get-heatstroke" ? (
        <CanCatsGetHeatstroke />
      ) : window.location.pathname === "/blog/how-to-keep-cat-cool-heatwave" ? (
        <HowToKeepCatCoolHeatwave />
      ) : (
        <App />
      )
    }
  </StrictMode>,
)