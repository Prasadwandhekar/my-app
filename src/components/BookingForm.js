import React, { useState, useEffect } from 'react';
import './BookingForm.css';
import { useParams } from 'react-router-dom';


const BookingForm = ({ showName }) => {

    const { id } = useParams();
  const [shows, setShows] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
      const data = await response.json();
      setShows(data);
    };

    fetchData();


    


    // Retrieve user details from local storage and populate the form
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setFormData(storedUserData);
    }
}, [id]);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieName = shows && shows.length > 0 ? shows[0].show.name : 'Unknown Movie';
    console.log('Form submitted:', {
      movieName,
      ...formData,
    });

    // Store user details in local storage
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  console.log('show:', shows);

  return (
    <div className="booking-form-container">
      <h2>Book Movie Ticket - {showName}</h2>
      <form onSubmit={handleSubmit}>
        {/* Display movie name directly in the form */}
        <p>Movie: {showName}</p>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
