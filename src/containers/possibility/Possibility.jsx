import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>You didn't get started yet?</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>With LCNC, everyone works towards a shared goal. This enables teams to ship new products faster and feel more confident in their decisions.</p>
      
    </div>
  </div>
);

export default Possibility;
