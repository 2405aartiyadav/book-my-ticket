import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className='container nav'>
                <span className='title'>Book MY Ticket</span>
                <div className="collapse navbar-collapse headerheading " id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className="nav-item navlist">
                         <Link to="">Home</Link>
                        </li>
                        <li className="nav-item navlist">
                         <Link to="/recommendMovies">Movies</Link>
                        </li>
                        <li className="nav-item navlist">
                         <Link to="/">Policy</Link>
                        </li>
                        </ul>
                        </div>

                        <span>
                            <input type="text" placeholder='Search' />
                            <button className="btn btn-primary" type="button" >
                                Search
                            </button>
                        </span>

                </div>
        </nav>

    )
}

export default Navbar