// 3DSection.jsx
import React from 'react';
import './3DSection.css';

const ThreeDSection = () => {
  return (
    <div id='3dmodel' className="three-d-section">
      <h2>Explore Our Power Bank in 3D</h2>
      <p>Rotate, zoom, and get a closer look at every detail of our premium design.</p>
      <div className="three-d-embed">
      <iframe
  title="Aula 18 - Power Bank"
  frameBorder="0"
  allowFullScreen
  mozallowfullscreen="true"
  webkitallowfullscreen="true"
  allow="autoplay; fullscreen; xr-spatial-tracking"
  xr-spatial-tracking="true"
  execution-while-out-of-viewport="true"
  execution-while-not-rendered="true"
  web-share="true"
  width="100%"
  height="480"
  src="https://sketchfab.com/models/6e936210b74343fa883861d223bdf163/embed"
/>


      </div>
    </div>
  );
};

export default ThreeDSection;
