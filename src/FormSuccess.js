import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './authorization';
import { confirm } from './confirmcode';
import './Form.css';
import { user } from './user.js';


const FormSuccess = () => {
  const navigate = useNavigate();
  function checkcode() {
    console.log("confirmcode" + confirm.value);
    if (confirm.value == document.getElementById("code").value) {

       fetch("http://www.lcnc.somee.com/api/User/VerifyUser?UserId="+user.id,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((data) => data);

      navigate("/FormSignIn");
    }
    else {
      alert("Verfication code is Incorrect");

    }
  }
  return (
    <>

      <div className='form-container'>
        <span className='close-btn' onClick={() => { navigate("/"); auth.at(0).token = false; }}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        <div className='form-content-right'>
          <div>
            <h1 className='form-success'>We have received your request!</h1>
            <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
          </div>

          <div className='form-inputs2'>
            <label className='form-success'>Verfication Code</label>
            <input
              id='code'
              className='form-input'
              type='code'
              name='code'
              placeholder='Enter the verfication code sent to your email'
            />

            <button className='form-input-btn' type='submit' onClick={checkcode}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default FormSuccess;

