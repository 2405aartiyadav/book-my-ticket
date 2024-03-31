import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addSelectedMovie } from '../reducer/movieReducer.js';
import { addBooking } from "../reducer/bookingReducer.js";


function BookTickets() {
  const selectedMovie = useSelector((state) => state.movieStore);
  const [movieToBeBooked, setMovieToBeBooked] = useState({});
  const [bookingDetails, setBookingDetails] = useState({
    movieName:"",
    date: "",
    seat:"",
    theatre: "",
    timeSlot: "",
    ticketType: "",
  });
  const dispatch = useDispatch();


  let handleBookBtnClick = (event) => {
    event.preventDefault();
    console.log(bookingDetails);
    setMovieToBeBooked({ ...movieToBeBooked, bookingDetails: bookingDetails });
    dispatch(addBooking(bookingDetails));
    navigate('/finalTicket');
  };


  useEffect(() => {
    console.log(selectedMovie);
    setMovieToBeBooked(selectedMovie);
    setBookingDetails({...bookingDetails,movieName:selectedMovie.title})
  }, [dispatch]);

  const navigate = useNavigate();

  
  return (
    <div className="bookMovie row" id="bookTickets">
      <h3>Book Ticket</h3>
      <div className="left">

      </div>
      <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Movie Name
            </span>

            <input
              id="movieName"
              type="text"
              className="form-control"
              placeholder="Movie Name"
              aria-label="Movie Name"
              aria-describedby="basic-addon2"
              defaultValue={movieToBeBooked.title}
              readOnly={true}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Select Date
            </span>
            <input
              type="date"
              className="form-control"
              value={bookingDetails.date}
              onChange={(event) => {
                setBookingDetails({
                  ...bookingDetails,
                  date: event.target.value,
                });
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Add no of seat
            </span>
            <input
              type="text"
              className="form-control"
              value={bookingDetails.seat}
              onChange={(event) => {
                setBookingDetails({
                  ...bookingDetails,
                  seat: event.target.value,
                });
              }}
            />
          </div>


          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Theatre
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              value={bookingDetails.theatre}
              onChange={(event) => {
                setBookingDetails({
                  ...bookingDetails,
                  theatre: event.target.value,
                });
              }}
            >
              <option>Select Theatre</option>
              <option value="Inox">Inox</option>
              <option value="Moive Max">Movie Max</option>
              <option value="Cinepolis">Cinepolis</option>
              <option value="PVR">PVR</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Timing
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              value={bookingDetails.timeSlot}
              onChange={(event) => {
                setBookingDetails({
                  ...bookingDetails,
                  timeSlot: event.target.value,
                });
              }}
            >
              <option>Select Slot</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="03:30 PM">03:30 PM</option>
              <option value="06:30 PM">06:30 PM</option>
              <option value="09:30 PM">09:30 PM</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Ticket Type
            </span>
            <select
              className="form-select"
              name=""
              aria-label="Default select example"
              value={bookingDetails.ticketType}
              onChange={(event) => {
                setBookingDetails({
                  ...bookingDetails,
                  ticketType: event.target.value,
                });
              }}
            >
              <option>Ticket Type</option>
              <option value="200">Silver</option>
              <option value="300">Gold</option>
              <option value="600">Platinum</option>
            </select>
          </div>
          <button
            type="sumbit"
            className="btn btn-lg btn-danger"
            onClick={(event) => handleBookBtnClick(event)
            }
          >
            Book
          </button>
        </form>
    </div>
  );
}

export default BookTickets;