import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import { useNavigate } from 'react-router-dom';
import validate from './validateInfo';
import useForm from './useForm';
import getverificationcode from './verfication';
import { user } from './user';
import { checkauth } from './checkauth';


const Form = () => {
  const navigate = useNavigate();


  function send() {

    // console.log("email sending is "+ document.getElementById("email").getAttribute("value"));
    user.email = document.getElementById("email").getAttribute("value");
    user.password = document.getElementById("password").getAttribute("value");
    user.username = document.getElementById("username").getAttribute("value");
    let userdata = `
    {
      "fullName": "`+ user.username + `",
      "email": "`+ user.email + `",
      "phoneNo": 0,
      "password": "`+ user.password + `"
    }
    `;
    getuserdata(userdata);

  }
  function getuserdata(userdata) {
    let responseStatus = 400;
    let TokenResponseStatus = 400;

    const api_url = "http://www.lcnc.somee.com/api/User/InsertUser";
    const api_url2 = "https://localhost:7283/api/User/InsertUser";




    fetch(api_url,
      {
        method: 'POST',
        body: userdata,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status == 200 || response.status == 204) responseStatus = 200;
        console.log("Response Status: " + responseStatus);
        return response.json();
      })
      .then(data => {
        let sendData = `{
                "fullName": "${data.fullName}",
                "email": "${data.email}",
                "phoneNo": ${data.phoneNo},       
                "password": "${data.passwordHash}"
            }`;

        // console.log("json:   "+userdata);
        if (responseStatus == 200) {
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
              if (TokenResponseStatus == 200) {
                document.cookie = `token=${data2.token}`;
                console.log("data2: " + JSON.stringify(data2));

              }
            });
        }
        //client.setHeader("authorization",Bearer ${data})
        show(data);
      });

  }


  async function show(data) {
    if (data.id == null) {
      document.getElementById("error").style.display = "flex";
    } else {

      user.valid = true;
      user.id = data.id;
      console.log("userid:   " + user.id);
      console.log("useremail:   " + user.email);
      console.log("userpassword:   " + user.password);
      console.log("username:   " + user.username);

       getverificationcode(user.email);
      await checkauth();
      navigate("/FormSuccess");

    }

  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn' onClick={() => { navigate("/") }}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Get started with us today! Create your account by filling out the
              information below.
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                id='username'
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className='form-inputs'>
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
              <p id='error' style={{ display: "none" }}> Email already exists</p>
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                id='password'
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit' onClick={send}>
              Sign up
            </button>
            <span className='form-input-login'>
              Already have an account? Login <a href='/FormSignIn'>here</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
