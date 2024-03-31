import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function LatestMovie() {
  const [latestMovies, setLatestMovies] = useState([]);
  const [movieClicked, setMovieClicked] = useState(null)
  let img_path = '/src/assets/movies/';

  useEffect(() => {
    axios.get("http://localhost:3000/latestMovies").then(res => {
      setLatestMovies(res.data);
      setMovieClicked(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  let getDetail = (event) => {
    console.log(movieClicked);
  }
  return (
    <>
      <div className="container-fluid my-3 row" id="latestMovie">
        <h3>Latest Movies</h3>
        {
          latestMovies.map((latestmovies,index) => {
            return (
              
               <>
               <Link to={`/movieDetail/${latestmovies.id}`}key={index} className=' col latestMovie'>
                 <div>
                 <img src={img_path + latestmovies.image} alt="moviesImg" className='latestMovieImg' />
               </div>
               <div className='latestMovieTitle'>
                  <span>{latestmovies.title}</span>
                </div>
                <div className="latestMoviegenre">
                  <span>{latestmovies.genre}</span>
                </div>
                <div className='bookBtn'>
                  <button className='btn btn-danger '>Book</button>
                </div>

                   </Link>
              
                
               </>
           

            )
          })
        }
      </div>

    </>
  )
}

export default LatestMovie