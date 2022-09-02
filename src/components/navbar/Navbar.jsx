import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
import './navbar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { user } from '../../user';
import { chosen_project_data } from '../chosenproject_data';
const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  function createproject() {
    let newDate = new Date();
    let projecttitle = document.getElementById("projname").value;
    console.log("project title " + projecttitle);
    let createproject =
      ` {
       "title": "`+ projecttitle + `",
       "creationDate": "2022-08-31T16:02:57.195Z",
       "userID": `+ user.id + `,
       "appTypeID": 1,
       "targetFrameworkID": 1,
       "generatedAppPath": "",
       "widgets": "",
       "description": ""
     }`
    console.log("CreatedProject: " + createproject);

    const api_url = "http://www.lcnc.somee.com/api/Project/InsertProject";


    fetch(api_url,
      {
        method: 'POST',
        body: createproject,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => addtochosenprojectdata(data));


    function addtochosenprojectdata(data) {
      if (data.id == null) {
        alert("Project already exists");
      } else {

        chosen_project_data.id = data.id;

        chosen_project_data.title = data.title;

        chosen_project_data.creationDate = data.creationDate;

        chosen_project_data.userID = data.userID;

        chosen_project_data.appTypeID = data.appTypeID;

        chosen_project_data.targetFrameworkID = data.targetFrameworkID;

        chosen_project_data.generatedAppPath = data.generatedAppPath;

        chosen_project_data.widgets = data.widgets;

        chosen_project_data.description = data.description;
        navigate("/Designer");


      }
    }
  }
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="/">LCNC</a></p>
          <p><a href="#home">My Projects</a></p>

        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Popup trigger={<button>Create new project</button>} position="bottom left">
          {close => (
            <div>
              <div className='form-inputs3'>
                <input
                  id='projname'
                  className='form-input3'
                  type='text'
                  name='projname'
                  placeholder='Enter your project name'
                />
                <button className='form-input3-btn' type='submit' onClick={createproject} >
                  Create
                </button>
              </div>
            </div>
          )}
        </Popup>
        {/* <button type="button" onClick={()=>{console.log("heyy");navigate("/Designer")}}>Create new project</button> */}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#blog">Ready-made Templates</a></p>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
