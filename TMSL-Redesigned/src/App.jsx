import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ExplorePage from './pages/Explore.jsx'
import AcademicPage from './pages/Academics.jsx'
import FacilityPage from './pages/Facilities.jsx'
import ResearchPage from './pages/Research.jsx'
import CampusPage from './pages/CampusLife.jsx'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
        <Route path='/academics' element={<AcademicPage />}/>
        <Route path='/facility' element={<FacilityPage />}/>
        <Route path='/research' element={<ResearchPage />}/>
        <Route path='/campuslife' element={<CampusPage />}/>
    </Routes>
    </>
  )
}

export default App
