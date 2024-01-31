// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Add an element or component for the "/" route */}
        <Route path="/" element={<Home />} />
        
        {/* Add your other routes here */}
        <Route path="/show/:id" element={<ShowSummary />} />

        <Route path="/show/:id/booking" element={<BookingForm />} />

      </Routes>
    </Router>
  );
};

export default App;
