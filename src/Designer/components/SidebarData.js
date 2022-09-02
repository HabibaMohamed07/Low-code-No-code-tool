import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { ItemTypes } from '../DnD/ItemTypes';
import { getallproperties } from '../Properties/propertiesdata';
export const WidgetType = [];
export var Widgets;
// getWidgetTypedata();


getwidgets_properties();
async function getwidgets_properties()
{
  await getWidgetsdata();
  await getallproperties();
}

async function getWidgetTypedata() {
  const api_url = "http://www.lcnc.somee.com/api/WidgetType/GetAllWidgetTypes";
  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    await AddWidgetTypeData(data);
  }
  // Calling that async function
  await getapi(api_url);
  return;
}

async function AddWidgetTypeData(data) {
  for (let r of data) {
    let arr =
    {
      id: r.id,
      title: r.typeName,
      // icon: <AiIcons.AiFillHome />,
      cName: 'nav-text',
      left: 50,
      top: 50
    };
    WidgetType.push(arr);
    // r.typeName
    // console.log(r.typeName);
  }

}
///////////////////////////////////
async function getWidgetsdata() {
  await getWidgetTypedata();
  Widgets = new Array(WidgetType.length);
  // console.log(Widgets.length);

  for (let i = 0; i < WidgetType.length; i++) {
    const api_url = "http://www.lcnc.somee.com/api/Widget/GetWidgetByType?type=" + WidgetType[i].id;
    async function getapi(url) {
      const response = await fetch(url);
      var data = await response.json();
      AddWidgetsData(data, i);
    }
    getapi(api_url);
  }
}
async function AddWidgetsData(data, i) {
  // console.log('the widget length '+WidgetType.length);
  Widgets[i] = new Array();
  for (let r of data) {
    let arr =
    {
      id: r.id,
      title: r.title,
      // icon: <AiIcons.AiFillHome />,
      cName: 'nav-text',
      left: 50,
      top: 50,
      startcodesnippet: await getcodesnippet(r.id),
      isonlynested: r.isOnlyNested,
      parentid: r.parentWidgetID
    };
    Widgets[i].push(arr);
    // console.log("arr parentid:"+arr.parentid);
    // console.log("arr isonlynested:"+arr.isonlynested)
    // console.log('codesnippet: '+arr.startcodesnippet);
  }

  // console.log('lenth of widgets is  '+Widgets[2].length);
}


async function getcodesnippet(id) {
  const api_url = "http://www.lcnc.somee.com/api/WidgetCodeSnippet/GetWidgetCodeSnippet?id=" + id;


  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    // result=data.startCodeSnippet;
    // console.log('the code snippet is: ');
    return data.startCodeSnippet;
  }
  // Calling that async function



  return getapi(api_url);

}