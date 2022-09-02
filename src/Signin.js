import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import { user } from './user';
import { projectsmade } from "../src/components/Projectsdata";
import { checkauth } from './checkauth';
import { auth } from './authorization';
import getverificationcode from './verfication';

const FormSignIn = ({ submitForm }) => {

  const navigate = useNavigate();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function validatelogin() {

    user.email = document.getElementById("email").getAttribute("value");
    user.password = document.getElementById("password").getAttribute("value");
    checklogin();


  }

  function checklogin() {
    console.log("im hereee...");
    let TokenResponseStatus = 400;
    const api_url = "http://www.lcnc.somee.com/api/User/Login?_Email=" + user.email + "&password=" + user.password;


    fetch(api_url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then(data => {
        let sendData = `{"fullName": "${data.fullName}",
        "email": "${data.email}",
        "phoneNo": ${data.phoneNo},
        "password": "${data.passwordHash}",
        "isEmailConfirmed":${data.isEmailConfirmed}
      }`;
        fetch("http://www.lcnc.somee.com/api/User/GetToken",
          {
            method: 'post',
            body: sendData,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          })
          .then(response => {
            if (response.status == 200 || response.status == 204)
              TokenResponseStatus = 200;
            return response.json()
          })
          .then(data2 => {
            if (TokenResponseStatus == 200)
              document.cookie = `token=${data2.token}`;

          });

        userlogindata(data)
      });

  }


  function userlogindata(userlogin) {

    if (userlogin.id == null) {
      document.getElementById("error").style.display = "flex";
    }
    else {
      user.id = userlogin.id;
      user.username = userlogin.fullName;
      user.isEmailConfirmed = userlogin.isEmailConfirmed;
      console.log("userid:   " + user.id);
      console.log("useremail:   " + user.email);
      console.log("userpassword:   " + user.password);
      console.log("username:   " + user.username);
      if (!user.isEmailConfirmed) {
        auth.at(0).token = false;
        getverificationcode(user.email);
        navigate("/FormSuccess");
      }
      else {

        // console.log(userlogin);
        // navigate("/Projects");
        user.valid = true;
        const api_url = "http://www.lcnc.somee.com/api/Project/GetProjectsByUser?id=" + user.id;

        fetch(api_url,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then((response) => response.json())
          .then((data) => senddata(data));

        console.log("Projects: " + JSON.stringify(projectsmade));

      }
    }
  }
  async function senddata(data) {

    // projectsmade=null;

    while (projectsmade.length > 0) {
      projectsmade.pop();
    }

    for (let i = 0; i < data.length; i++) {
      console.log("title" + data.at(i).title);
      projectsmade.push({

        id: data.at(i).id,
        title: data.at(i).title,
        creationDate: data.at(i).creationDate,
        userID: data.at(i).userID,
        appTypeID: data.at(i).appTypeID,
        targetFrameworkID: data.at(i).targetFrameworkID,
        generatedAppPath: data.at(i).generatedAppPath,
        widgets: data.at(i).widgets,
        description: data.at(i).description

      });
    }
    console.log("PROJECTS:" + JSON.stringify(projectsmade));
    await checkauth(false);
    // setTimeout(() => console.log(myval), 0);
    // console.log("here too"+auth.at(0).token);
    navigate("/Projects");

  }



  return (
    <div className='form-container'>
      <span className='close-btn' onClick={() => { navigate("/") }}>×</span>
      <div className='form-content-left'>
        <img className='form-img' src='img/img-2.svg' alt='spaceship' />
      </div>
      <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h2>
            Welcome Back!
          </h2>
          <div className='form-inputs'>
            <p id='error' style={{ display: "none" }}> Email or Password are not valid</p>
            <p> <br></br></p>
            <label className='form-label'>Email</label>
            <input
              id='email'
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}

          </div>

          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              id='password'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}

          </div>


          <button className='form-input-btn' type='submit' onClick={validatelogin}>
            Sign In
          </button>
          <br></br>
          <span className='form-input-login'>
            Don't have an account? Sign up <a href="/form">here</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
