import React from 'react';
import Feature from '../../frontpage/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'LCNC Works on Any Platform',
    text: 'LCNC works on any operating system that runs a web browser. Macs, Windows PCs, Linux.',
  },
  {
    title: 'Collaboration in LCNC Is Simple and Familiar',
    text: 'Because LCNC is browser-based, teams can collaborate as they would in Google Docs. People viewing and editing a file are shown in the top of the app as circular avatars.',
  },
  {
    title: 'LCNC Sharing Is Uncomplicated and Flexible',
    text: 'LCNC also allows permissions-based sharing of any file, page, or frame.',
  },
 
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">All design work, from ideation to execution, can be found in one place. Step into our platform & Make your design come to light.</h1>
      
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
