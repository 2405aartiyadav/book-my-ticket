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
import BookTickets from './Component/BookTickets.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducer/movieReducer.js'
import FinalTicket from './Component/FinalTicket.jsx'
import bookingReducer from './reducer/bookingReducer.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="latestMovie" element={<LatestMovie />} />
      <Route path="movieDetail/:id" element={<MovieDetail />} />
      <Route path="upcomingMovies" element={<UpcomingMovie />} />
      <Route path="nearbyEvents" element={<Events />} />
      <Route path="recommendMovies" element={<Recommendation />} />
      <Route path="bookTickets" element={<BookTickets />} />
      <Route path="finalTicket" element={<FinalTicket/>} />

      
    </Route>
  )
)

const store = configureStore({
  reducer: {
    movieStore: movieReducer,
    bookingStore:bookingReducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
