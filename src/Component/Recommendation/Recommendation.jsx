import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Recommendation() {
    const [moviesList, setMoviesList] = useState([]);
    let img_path = '/src/assets/movies/';

    useEffect(() => {
        axios.get("http://localhost:3000/movies").then(res => {
            setMoviesList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="container-fluid my-3 row" id="recommendMovies">
            <h3>Recommended Movies</h3>
            {console.log(moviesList)}
            {
                moviesList.map((recomdMovies) => {
                    return (
                        <Link to={`/movieDetail/${recomdMovies.id}`}className=' col recomdMovie'>
                            <div className='' >
                                <div>
                                    <img src={img_path + recomdMovies.image} alt="moviesImg" className='recomdMovieImg' />
                                </div>
                                <div className='movieTitle'>
                                    <span>{recomdMovies.title}</span>
                                </div>
                                <div className='bookBtn'>
                                    <button className='btn btn-danger '>Book</button>
                                </div>

                            </div>
                        </Link>

                    )

                })
            }

        </div>
    )
}

export default Recommendation