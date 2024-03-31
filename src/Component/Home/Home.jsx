import React from 'react'
import TopSection from '../TopSection/TopSection'
import Slider from '../Slider/Slider'
import Recommendation from '../Recommendation/Recommendation'
import MovieDetail from '../MovieDetail/MovieDetail'


function Home() {
  return (
    <div>
      <TopSection />
      <Slider />
      <Recommendation />
    </div>
  )
}

export default Home