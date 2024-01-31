// ShowSummary.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Route ,Routes} from 'react-router-dom';
import './ShowSummary.css';
import BookingForm from './BookingForm';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  console.log('show:', show); // Add this line for debugging
  console.log("my name pasha")


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };

    fetchData();
  }, [id]);
 
  console.log('show:', show); // Add this line for debugging


  return (
    <div className="show-summary-container">
   {show && (
  <>
    <h1 className="show-title">{show.name}</h1>
    <p className="show-description">{show.summary}</p>

    {show.name && (
      <Link to={`/show/${id}/booking`} className="booking-link">
        Book Movie Ticket
      </Link>
    )}
    <Routes>
      <Route
        path={`/show/${id}/booking`}
        element={<BookingForm showName={show.name} show={show.name} />}
      />
    </Routes>
  </>
)}

    </div>
  );
};

export default ShowSummary;
