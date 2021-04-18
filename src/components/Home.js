import React from 'react';

import Pizza from '../Assets/Pizza.jpg';


const Home = () => {
  return (
    <div className="home-container">
      <img src={Pizza} alt="Pizza photo" />
    </div>
  )
}

export default Home;