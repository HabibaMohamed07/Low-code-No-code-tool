import React from 'react';
import * as DiIcons from "react-icons/di";
import * as icon from "react-icons/md";
import { Link } from 'react-router-dom';
import { data } from '../DnD/Data';
import { chosen_project_data } from '../../components/chosenproject_data';
function save() {

  // {
  //     'WidgetID':5,
  //     'widgetclass':'.btnclass',
  //     'text':'Click Me'
  // }
  let json = "{ ";
  json += `"html":"[`;
  console.log("saving");
  for (let i = 1; i < data.length; i++) {
    if (!data.at(i).isdeleted) {
      json += `  
            {  'WidgetID':  `+ data.at(i).widgetID + `,
               'widgetclass': '`+ data.at(i).classname + `',
               'text':'`+ data.at(i).title + `'`;

      if (data.at(i).nesteditems != null) {
        json += `,'NestedWidgets':[ `;
        for (let x = 0; x < data.at(i).nesteditems.length; x++) {
          json += `{'WidgetID':  ` + data.at(i).nesteditems.at(x).widgetId + `,'text':'` + data.at(i).nesteditems.at(x).text + `'},`;
        }
        json += `]`;
      }
      json += `},`;

    }
  }
  json=json.substring(0,json.length-1);
  json += `]",`;

  json += `"style":"`;

  for (let i = 1; i < data.length; i++) {
    if (!data.at(i).isdeleted) {
      json +=
       '.'+ data.at(i).classname + `{`+data.at(i).style+"position: absolute;"+`}`
    }
  }
  json += `"}`;
  // let json=`
  // {\r\nbackground-color:` + data.at(i).color + `;\r\n top:` +
  // Math.abs(data.at(i).top) + `;\r\n left:` + Math.abs(data.at(i).left) + `; \r\n position: absolute; \r\n}
  //     "html":"[
  //         {
  //             'WidgetID':5,
  //             'widgetclass':'.btnclass',
  //             'text':'Click Me'
  //         },
  //         {
  //             'WidgetID':3,
  //             'widgetclass':'',
  //             'text':'',
  //             'NestedWidgets': [{'WidgetID':4,'widgetclass':'','text':'item 1'},{'WidgetID':4,'widgetclass':'','text':'item 2'}]
  //         }]",
  //     "style":"class1{font:15px}"
  // }`;
  json = JSON.stringify(json);
  let result = `{
    "title": "`+ chosen_project_data.title + `",
    "creationDate": "`+ chosen_project_data.creationDate + `",
    "userID": "`+ chosen_project_data.userID + `",
    "appTypeID": "`+ chosen_project_data.appTypeID + `",
    "targetFrameworkID": "`+ chosen_project_data.targetFrameworkID + `",
    "generatedAppPath": "`+ chosen_project_data.generatedAppPath + `",
    "widgets": `+ json + `,
    "description": "`+ chosen_project_data.description + `"
  }`;

  console.log(json);

  // fetch('http://www.lcnc.somee.com/api/Project/UpdateProject?id'+chosen_project_data.id, 
  // {
  //     method: 'PUT',
  //     body: result,
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //     }
  // }).then(function (response) {
  //     // if (response.ok) {
  //     //     return response.json();
  //     // }
  //     return Promise.reject(response);
  // }).then(function (data) {
  //     console.log(data);
  // }).catch(function (error) {
  //     console.warn('Something went wrong.', error);
  // });

  fetch('http://www.lcnc.somee.com/api/Project/UpdateProject?id='+chosen_project_data.id,
    {
      method: 'PUT',
      body: result,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => downloadfiles(data));

    function downloadfiles(data)
    {
      console.log('nihaw:   '+chosen_project_data.id);
      window.open('http://www.lcnc.somee.com/api/File/DownloadFile?filename='+chosen_project_data.generatedAppPath);
    }

}

function Save() {
  return (
    <button className='save' title="Save"/*onClick={click()}*/ onClick={save} > < icon.MdOutlineSaveAlt color="white" /> </button>
  );
}
export default Save;