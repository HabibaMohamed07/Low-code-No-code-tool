import { data } from "../DnD/Data";
import { objectprop } from "./objectprop";
import './Properties.css';
import update from 'immutability-helper'
import { useCallback, useState } from 'react';
import { SketchPicker } from 'react-color';
import Sketch from "react-color/lib/components/sketch/Sketch";
import { SketchPresetColors } from "react-color/lib/components/sketch/SketchPresetColors";
import { changecolor } from "./changecolor";
import { changetitle } from "./changetitle";
import { changeprop } from "./changeprop";
import { indexar } from "../components/indexar";
import { clear } from "@testing-library/user-event/dist/clear";
import { getValue } from "@testing-library/user-event/dist/utils";
import { changeitemtitle } from "./changeitemtitle";
import { Widgets, WidgetType } from "../components/SidebarData";
import { widgetpropertiesdata, Propertiesdata, PropertyUnitdata, Unitsdata } from "./propertiesdata"
import { ChangeStyle } from './ChangeStyle';
import { ChangePropofData } from "./ChangePropofData";
let i=0;
let id;
let value;
let index = 0;
function changeproptitle() {
  var title = document.getElementById("innertext").value;
  console.log("title changed into: " + title);
  changetitle(title);

}
function changepropitemtitle(item) {
  document.getElementById(id).innerHTML = document.getElementById("innertextofitem").value;
  let itemtitle = document.getElementById("innertextofitem").value;
  changeitemtitle(itemtitle, id);
}
function changetitleofitem(item) {
  id = document.getElementById(this.id).id;
  document.getElementById("innertextofitem").setAttribute("placeholder", this.innerHTML);

}
function addelement(item, widgetId, Type) {
  let arr = { id: item.id, widgetId: widgetId, text: item.innerHTML };
  console.log("empty");
  data.at(objectprop.at(0).id).nesteditems.push(arr);
}

function add() {
  let selection = document.getElementById("selection");
  let selected = selection.value;
  selected = selected.substring(1, selected.length - 1);
  let id = selection.options[selection.selectedIndex].id;
  console.log("adding" + selected);
  let item = document.createElement(selected);
  item.innerHTML = "item";
  document.getElementById(objectprop.at(0).id).appendChild(item);
  item.setAttribute("id", selected + index);
  index++;
  item.ondblclick = changetitleofitem;
  addelement(item, id, selected);

}

function changestyle() {
  let style = "";



  for (let i = 0; i < document.getElementsByName("Propertieslabel").length; i++) {
    console.log("unit is: " + document.getElementsByName("unitselect")[i].value);
    if (document.getElementsByName("unitselect")[i].value == "px") {
      if (document.getElementsByName("Properties")[i].value != "") {
        style += (document.getElementsByName("Propertieslabel")[i].innerHTML) + ":" + (document.getElementsByName("Properties")[i].value) + "px;";
        // data.at(objectprop.at(0).id).properties.push(document.getElementsByName("Properties")[i].value);
      // console.log("hellooss");
      }
      else { style += (document.getElementsByName("Propertieslabel")[i].innerHTML) + ":" + (document.getElementsByName("Properties")[i].getAttribute("placeholder")) + "px;";
     
      }
    }
    else {
      if (document.getElementsByName("Properties")[i].value != "") {
        style += (document.getElementsByName("Propertieslabel")[i].innerHTML) + ":" + (document.getElementsByName("Properties")[i].value) + ";";
        // data.at(objectprop.at(0).id).properties.push(document.getElementsByName("Properties")[i].value);
   
      
      }
      else {
        style += (document.getElementsByName("Propertieslabel")[i].innerHTML) + ":" + (document.getElementsByName("Properties")[i].getAttribute("placeholder")) + ";";
   
      }
    }
    console.log("propeties changinginto " + JSON.stringify(document.getElementsByName("Propertieslabel")[i].innerHTML) + ":" + JSON.stringify(document.getElementsByName("Properties")[i].value));
  }
  console.log("style " + style);
  document.getElementsByName(objectprop.at(0).id)[0].setAttribute("style", style);
  document.getElementsByName(objectprop.at(0).id)[1].setAttribute("style", style);


  ChangeStyle(style);
}

function remove() {
  var idx = objectprop.at(0).id;
  data.at(idx).isdeleted = true;
}
export function Properties() {

  const [color, setColor] = useState(objectprop.at(0).color);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState(document.getElementsByName("Properties")[1].value = ""), []);

  console.log("objectpropnest" + objectprop.at(0).isnestable);
  return (

    <nav className={'nav active'} >

      <div>
        <header className="nav-text3">Properties</header>
      </div>

      <div style={{ marginLeft: -147, marginTop: 20 }} onMouseLeave={forceUpdate} onMouseOut={ChangePropofData}>

        <div className={objectprop.at(0).isnestable ? "test" : "test2"}>
          <p>Select the Item to put inside</p>
          <select id="selection">
            {WidgetType.map((_WidgetType, WidgetTypeindex) => {
              return (
                Widgets[WidgetTypeindex].map((_Widgets, widgetsindex) => {
                  if (objectprop.at(0).widgetID == _Widgets.parentid) {
                    console.log("hrereds:" + _Widgets.title);
                    return (<option id={_Widgets.id} value={_Widgets.startcodesnippet} >{_Widgets.title}</option>)
                  }
                }
                )
              )
            }
            )
            }
          </select>
          <button type="submit" onClick={add}>Add</button>
        </div>
        <div id="titleitem" className={objectprop.at(0).isnestable ? "test" : "test2"}>   <p> title for the item</p> <div className="nav-text"><input id="innertextofitem" onKeyUp={changepropitemtitle} type="text" style={{ backgroundColor: "#060b26", color: "white" }}></input>    </div>
        </div>{/* <input type="submit" value="changeTitle" onClick={ changeproptitle}></input> */}
        {/* <div className="nav-text" ><p>X:</p> <p>{objectprop.at(0).top}</p></div>
        <div className="nav-text"> <p>Y:</p><p>{objectprop.at(0).left}</p></div>
        <div className="nav-text"><p>Text:</p><input id="innertext" onKeyUp={changeproptitle} type="text" style={{ backgroundColor: "#060b26", color: "white" }} placeholder={objectprop.at(0).title}></input></div>
        <div className="nav-text"> <p> Color: </p></div>
        <div>
          <SketchPicker
            width="70%"
            color={color}
            onChangeComplete={(color) => { setColor(color.hex); changecolor(color.hex); }}
          />
          <br></br>

        </div> */}

        {

          widgetpropertiesdata.map((widgetpropertiesdata_widgetpropertiesitems, widgetpropertiesdata_widgetpropertiesindex) => {
      
       if (objectprop.at(0).widgetID == widgetpropertiesdata_widgetpropertiesitems.widgetid) {
    

       return (
                <>
                  {
                    Propertiesdata.map((Propertiesdata_propertiesitem, Propertiesdata_propertiesindex) =>
                    //propertyid,propertyname,desc
                    { console.log("index:"+Propertiesdata_propertiesindex);
                      if (Propertiesdata_propertiesitem.propertyid == widgetpropertiesdata_widgetpropertiesitems.propertyID ) {
                        var propertyname = Propertiesdata_propertiesitem.propertyName;
                        var defaultValue = widgetpropertiesdata_widgetpropertiesitems.defaultValue;
                        

                        return (
                          <>
                            <div className="Properties-inputs">
                              <label name="Propertieslabel" className="nav-text2 Properties-label">{propertyname}</label>
                              <input name='Properties' className="Properties-input" type="text" onKeyUp={changestyle} placeholder={data.at(objectprop.at(0).id).propertyisset?(data.at(objectprop.at(0).id).properties.at(Propertiesdata_propertiesindex).value):defaultValue}></input>
                              
                              <select className="Properties-input" name="unitselect">

                                {
                                  PropertyUnitdata.map((PropertyUnitdata_propertyunititems, PropertyUnitdata_propertyunitindex) => {

                                    if (PropertyUnitdata_propertyunititems.propertyid == Propertiesdata_propertiesitem.propertyid) {
                                      return (
                                        <>
                                          {
                                            Unitsdata.map((unitsdata_unitsitems, unitsdata_unitsindex) => {
                                              if (unitsdata_unitsitems.unitid == PropertyUnitdata_propertyunititems.unitid) {
                                                return (
                                                  <>
                                                    <option value={unitsdata_unitsitems.unitname}>{unitsdata_unitsitems.unitname}</option>
                                                  </>
                                                )
                                              }
                                            })
                                          }
                                        </>
                                      )
                                    }
                                  })
                                }
                              </select>
                            </div>
                          </>
                        )
                      }
                  })
                    
                  }
                </>
              )
            }


          })
        }
        <div>
          <br></br>
          {/* <button >Show properties</button> */}

          <button className="Properties-input-btn" style={{ display: objectprop.at(0).id == 0 ? "none" : "" }} onClick={remove}> remove</button>
        </div>

      </div>




    </nav>
  )

}