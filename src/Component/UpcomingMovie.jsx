import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UpcomingMovie() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  let img_path = '/src/assets/upcoming movies/';
  useEffect(() => {
    axios.get("http://localhost:3000/upcomingmovies").then(res => {
      setUpcomingMovies(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className='container-fluid my-3 row' id='upcomingMovies'>
      <div className='comingSoon'>
        Now Showing <b><Link to="/latestMovie">In Cinema near you</Link></b>
      </div>
      {
        upcomingMovies.map((movie,index) => {
          return (
            <>
              <div className='col latestMovie' key={index}>
                <img src={img_path + movie.image} alt="moviesImg" className='latestMovieImg' />
                <div className='des'>
                  <h3>{movie.eventDate}</h3>
                  </div>
                    
              </div>
              
            </>

          )
        })
      }    </div>
  )
}
export default UpcomingMovie