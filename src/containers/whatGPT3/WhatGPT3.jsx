import React from 'react';
import Feature from '../../frontpage/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is LCNC?" text="LCNC is a low-code/no-code tool that helps you create powerful designs for your website or mobile application. LCNC creates a new level of collaboration that never really existed before. The team is able to work together and ship products faster.”" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
     
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Create. Iterate. Repeat." text="Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the alone or in a team." />
      <Feature title="Powerful design systems" text="Increase design consistency with searchable assets and shareable styles in one home—centralized and accessible to your entire team." />
      <Feature title="Ship better outcomes" text="Deliver better products and make an impact with a platform that connects the dots across design, product, and development." />
    </div>
  </div>
);

export default WhatGPT3;
