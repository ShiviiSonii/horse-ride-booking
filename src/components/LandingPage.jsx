import React from 'react';
import { Link } from 'react-router-dom';
import "../LandingPage.css"

const horses = [
  { name: 'Thunder', image: 'https://images.pexels.com/photos/516929/pexels-photo-516929.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Lightning', image: 'https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Shadow', image: 'https://images.pexels.com/photos/634613/pexels-photo-634613.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Star', image: 'https://images.pexels.com/photos/209065/pexels-photo-209065.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

const LandingPage = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Horse Ride Booking System</h1>
      <div className="horse-gallery">
        {horses.map((horse, index) => (
          <div key={index} className="horse-card">
            <img src={horse.image} alt={horse.name} />
            <h2>{horse.name}</h2>
          </div>
        ))}
      </div>
      
      <Link to="/book">
        <button className='btn-book'>Book Now</button>
      </Link>
    </div>
  );
};

export default LandingPage;
