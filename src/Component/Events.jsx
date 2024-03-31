import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function Events() {
    const [events, setEvents] = useState([]);
    let img_path = '/src/assets/Events/';

    useEffect(() => {
        axios.get("http://localhost:3000/Events").then(res => {
            setEvents(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
   

    return (
        <div className='container-fluid my-3 row' id='nearbyEvents'>
            <h2><b>Events in Nagpur</b></h2>

            {
                events.map((event,index) => {
                    return (
                        <>

                            <div className='col eventcontainer' key={index} >
                                <img src={img_path + event.image} alt="eventImg" className='eventImg' />
                                <div className='eventdes'>
                                    <h3>{event.eventDate}</h3>
                                </div>

                            </div>


                        </>

                    )
                })
               
                }    </div>
                )
              }

export default Events;