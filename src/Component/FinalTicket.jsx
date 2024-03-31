import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QRCode from "react-qr-code";

function FinalTicket() {
  const selectedMovie = useSelector((state) => state.bookingStore);

  return (
    <div className="container row detail" id='finalTicket'>
      <h3>Booking Confirmed!</h3>
      {console.log(selectedMovie)}
      <div className=" col-5 qrImg">
      <QRCode size={256} value={selectedMovie} viewBox={`0 0 256 256`} />
      </div>
      <div className="col finalTickets">
        <h1>{selectedMovie.movieName}</h1>
        <h3>Timing :- {selectedMovie.timeSlot}</h3>
        <h3>Number of seat :- {selectedMovie.seat}</h3>
        <h3>Movie Date :- {selectedMovie.date}</h3>


      </div>
    </div>

  )
}

export default FinalTicket