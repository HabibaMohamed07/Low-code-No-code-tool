import React from 'react';
import './article.css';
import { projectsmade } from '../Projectsdata';
import { useNavigate } from 'react-router-dom';
import { chosen_project_data } from '../chosenproject_data';
import { data } from '../../Designer/DnD/Data';

const Article = ({ imgUrl, date, text,projectindex }) => {
  const navigate = useNavigate();

  function ChosenProject(projectindex)
  {
    chosen_project_data.id=projectsmade[projectindex].id;

    chosen_project_data.title=projectsmade[projectindex].title;

    chosen_project_data.creationDate=projectsmade[projectindex].creationDate;
    
    chosen_project_data.userID=projectsmade[projectindex].userID;
    
    chosen_project_data.appTypeID=projectsmade[projectindex].appTypeID;
    
    chosen_project_data.targetFrameworkID=projectsmade[projectindex].targetFrameworkID;
    
    chosen_project_data.generatedAppPath=projectsmade[projectindex].generatedAppPath;
    
    chosen_project_data.widgets=projectsmade[projectindex].widgets;
    
    chosen_project_data.description=projectsmade[projectindex].description;
    // let html=chosen_project_data.widgets.substring(chosen_project_data.widgets.indexOf("html"),chosen_project_data.widgets.indexOf("style"));
    // let widgetsid =chosen_project_data.widgets.substring(chosen_project_data.widgets.indexOf(" ",chosen_project_data.widgets.indexOf("WidgetID")),chosen_project_data.widgets.indexOf(","));
    // let widgetclassstart=chosen_project_data.widgets.substring(chosen_project_data.widgets.indexOf(widgetsid)+5,chosen_project_data.widgets.indexOf(",",widgetsid+1)+1);  
    // let widgetclass=widgetclassstart.substring(31,widgetclassstart.indexOf(",")-1);
    // let textstart=chosen_project_data.widgets.substring(chosen_project_data.widgets.indexOf(widgetclass)+widgetclass.length+2,chosen_project_data.widgets.indexOf("Nested")-1);
    // let text=textstart.substring(textstart.indexOf("text")+7,textstart.indexOf(",")-1);
    // let htmlz=JSON.parse(chosen_project_data.widgets);
    // let htmlz2=JSON.parse(htmlz);
    // console.log("the whole widget "+htmlz2);
    // console.log("widgetsid "+widgetsid);
    // let start=widgetclass.substring(0,widgetclass.length-1);
    // console.log("widgetclass "+start.toLowerCase());
    // console.log("text "+text);
    // data.push({id:1,widgetsid:widgetsid,title:text,start:"<"+start+">"})
    



 let json=JSON.parse(JSON.stringify(chosen_project_data.widgets));
 let html=json.html;
 console.log("raaawr "+json.style);








    navigate("/Designer");
  }



return(
  <div className="gpt3__blog-container_article" onClick={(e)=>ChosenProject(projectindex)}>
    {/* <div className="gpt3__blog-container_article-image"> */}
       {/* <img src={imgUrl} alt="blog_image" />  */}
    {/* </div> */}
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h2>{text}</h2>
      </div>
      {/* <p>Read Full Article</p> */}
    </div>
  </div>
  );
};

export default Article;
