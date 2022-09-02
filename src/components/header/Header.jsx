import React from 'react';
import './header.css';
import Article from '../../components/article/Article';
import { Down } from '../header/imports';
import { user } from '../../user';
import { projectsmade } from '../Projectsdata';

const Header = () => {

  

return(
<div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">

      <h1 className="gradient__text">My Projects</h1>
      <p> <br></br></p>
      {/* <div className="gpt3__blog-container"> */}
      <div className="gpt3__blog-container_groupB ">
        {
          projectsmade.map((project, projectindex) => {
            console.log("projectitle l" + project.title);
            if (project.title != '') {
              return (
                <Article  text={project.title} projectindex={projectindex} ></Article>
              )
            }
          })

        }
      </div>
    </div>
    </div>
  // </div>
);
  
};

export default Header;
