import React from 'react';
import '../cta/cta.css';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate=useNavigate();
  return(
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button"  onClick={()=>{console.log("hello");navigate("/Form")}}>Get Started</button>
    </div>
  </div>
  )

}

export default CTA;
