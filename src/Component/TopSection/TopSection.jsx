import React, { useState } from 'react'
import './TopSection.css'
import { Link } from 'react-router-dom';

function TopSection() {
    const [sections, setSections] = useState([{ "sectionName": "Latest Movies", "path": "/latestMovie" }, { "sectionName": "Upcoming Movies", "path": "/upcomingMovies" }, { "sectionName": "Nearby Events", "path": "/nearbyEvents" }]);
    return (
        <div className='row justify-content-around' id="topSection" >

            {sections.map((movies,index) => {
                return (
                    <div className="col-3 topsection" key={index} >
                        <Link to={movies.path}>
                            <h3>{movies.sectionName}</h3>
                        </Link>
                        {console.log(movies.path)}


                    </div>

                )
            })}
        </div>
    )
}

export default TopSection;