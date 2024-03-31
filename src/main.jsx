import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LatestMovie from './Component/LatestMovie.jsx'
import Home from './Component/Home/Home.jsx'
import MovieDetail from './Component/MovieDetail/MovieDetail.jsx'
import UpcomingMovie from './Component/UpcomingMovie.jsx'
import Events from './Component/Events.jsx'
import Recommendation from './Component/Recommendation/Recommendation.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="latestMovie" element={<LatestMovie />} />
      <Route path="movieDetail/:id" element={<MovieDetail />} />
      <Route path="upcomingMovies" element={<UpcomingMovie/>}/>
      <Route path="nearbyEvents" element={<Events/>}/>
      <Route path="recommendMovies" element={<Recommendation/>}/>
      
     
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
