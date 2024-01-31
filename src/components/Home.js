// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    };

    fetchData();
  }, []);

  return (
    <div className='web'>
    <div className="home-container">
      <h1>Show List</h1>
      <ul className="show-list">
        {shows.map((show) => (
          <li key={show.show.id} className="show-item">
            <Link to={`/show/${show.show.id}`} className="show-link">
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='name'>Book your Ticket Now</div>
    </div>
    </div>
  );
};

export default Home;
