import React, { memo, useCallback, useState } from 'react'
import { objectprop } from '../Properties/objectprop';
import { data } from './Data';
import { changecolor } from '../Properties/changecolor';
import "./DnD.css";
import { coloring } from '../Properties/color';
import changeData from '../components/Change';
import { getPropertiesTypedata } from '../Properties/propertiesdata';
const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

let object;

function replaceTag(id, type) {
  var str = type;
  str = str.substring(1, str.length - 1);
  var that = document.getElementById(id);
  var p = document.createElement(str);
  if (str == "ol") {
    var li = document.createElement("li");
    li.innerHTML = that.innerHTML;

    p.appendChild(li);

  }
  p.setAttribute('id', that.getAttribute('id'));
  p.setAttribute("name",that.getAttribute('name'));
  p.setAttribute("style",that.getAttribute("style"));

  // move all elements in the other container.
  while (that.firstChild) {
    p.appendChild(that.firstChild);
  }
  that.parentNode.replaceChild(p, that);

}

function senddata(objects, id, type) {
  object = data.find(item => item.id == id);

  objectprop.at(0).id = object.id;
  objectprop.at(0).top = object.top;
  objectprop.at(0).left = object.left;
  objectprop.at(0).title = object.title;
  objectprop.at(0).type = object.type;
  objectprop.at(0).isnestable = object.isnestable;
  objectprop.at(0).widgetID = object.widgetID;
  console.log(JSON.stringify(objectprop));
  // console.log("type is here: " + type);
  
  replaceTag(id, type);

}
function here(e) { console.log("you clicked on the text") }
export const Box = memo(function Box({ title, yellow, preview, id, isdeleted, classname, type }) {

  return (
    <div name={id} onClick={(e) => senddata(e, id, data.at(id).start)}
      style={{ ...styles, backgroundColor: data.at(id).color }}
      role={preview ? 'BoxPreview' : 'Box'}
      className={data.at(id).isdeleted ? "disappear" : "all"}>
      <span name={id} id={id} >
         {title} 
      </span>
    </div>
  )
})
