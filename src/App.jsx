import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import TopSection from './Component/TopSection/TopSection'
import Slider from './Component/Slider/Slider'
import Recommendation from './Component/Recommendation/Recommendation.jsx'
import LatestMovie from './Component/LatestMovie.jsx'
import MovieDetail from './Component/MovieDetail/MovieDetail.jsx'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
