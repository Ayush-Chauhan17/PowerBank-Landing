import React from 'react';
import './Hero.css';
import heroVideo from '../assets/heroVideo.mp4';

const Hero = () => {
  return (
    <div id='home'className="hero-container">
      <h1 className="hero-heading">⚡ Power Up Your Life</h1>
      <p className="hero-subtext">Experience ultra-fast charging like never before.</p>

      <div className="video-box">
        <video autoPlay muted loop controls className="video-content">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <p className="hero-link">👉 <a href="#buy" className="buy-link">Explore Pricing</a></p> */}
      {/* <button className="hero-btn">🔋 Buy Now</button> */}
    </div>
  );
};

export default Hero;
