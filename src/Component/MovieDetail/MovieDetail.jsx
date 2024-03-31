import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useParams } from 'react-router-dom';
import rating_img from '../../assets/rating.png'
import axios from 'axios';



function MovieDetail() {
  const [movie, setMovie] = useState({});
  let img_path = '/src/assets/movies/';

  let params = useParams();
  let url = "http://localhost:3000/movies?id=" + params.id;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setMovie(res.data[0])

    }).catch((err) => {
      console.log(err);
    })
    console.log(params);
  }, [])
  return (
    <div className="container row detail" id='movieDetail'>
      <div className=" col-6 movieImgdiv">
        <Link to={movie.path}>
          <img src={img_path +movie.image} alt="movie image" className='movieImg' />
        </Link>
        <div>In Cinema</div>
      </div>

      <div className="col">
        <h3>Star War</h3>
        <div className='ratingDiv'>
          <img src={rating_img} alt="rating" /><span><b>9/10</b></span>
          <button className='btn btn-light btn-lg ratingBtn'>Rate Now</button>
        </div>
        <div className='movieLang'>English,Hindi,Telgu,Tamil</div>
        <div className='moviedes'>{movie.duration}.{movie.releasedate}</div>
        <button className='btn btn-danger btn-lg'>Book Tickets</button>
      </div>

    </div>
  )
}

export default MovieDetail