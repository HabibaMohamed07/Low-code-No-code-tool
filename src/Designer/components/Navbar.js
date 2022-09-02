import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { WidgetType } from './SidebarData';
import { Widgets } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as DiIcons from "react-icons/di";
import Save from './Save';
import Example from '../DnD/ex';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import changeData from './Change';
import Collapsible from 'react-collapsible';
import { data } from '../DnD/Data';
import { indexar } from './indexar';
import Sourcecode from './source';
import { auth } from '../../authorization';
let i = 0;
let obj = new Array;


/** Drag Event Handler */
const dragStrated = (e, id, index, cName, start, isnest, parentid) => {
  // console.log("it is dragging");
  e.dataTransfer.setData("id", id);
  let Id = (e.dataTransfer.getData("id"));
  // obj[i]= Widgets.find(item=>item.id==id);
  obj[i] = getwidgetbyid(id);

  obj[i].left = 50;
  obj[i].top = 50;
  obj[i].color = "white";
  obj[i].type = cName;
  obj[i].index = indexar.index + 1;
  obj[i].id = id;
  obj[i].start = start;
  obj[i].isnestable = isnest;
  obj[i].parentid = parentid;
  obj[i].isdeleted = false;
  i++;
  indexar.index++;
  // console.log(JSON.stringify(obj));
  changeData(obj[i - 1]);

}

function getwidgetbyid(x) {
  for (let i = 0; i < Widgets.length; i++) {
    for (let j = 0; j < Widgets[i].length; j++) {
      if (x == Widgets[i][j].id) {
        return Widgets[i][j];
      }
    }
  }
}

function getcurrentindex(WidgetTypeindex, widgetsindex) {
  let result = 0;
  for (let j = WidgetTypeindex - 1; j >= 0; j--) {
    result += Widgets[j].length;
  }
  return (result + widgetsindex);
}

export default function Navbar() {
  console.log("Authentication is :"+auth.at(0).token);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Sourcecode/>
          <Save />
          <span className='title'> Project Name</span>
        </div>
        <nav className={'nav-menu active'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='/Projects' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {
              WidgetType.map((_WidgetType, WidgetTypeindex) => {
                // console.log(_WidgetType.title+'  '+_WidgetType)
                return (
                  <>
                    <div className='data'>
                      <Collapsible trigger={_WidgetType.title} className={Collapsible}>


                        {
                          Widgets[WidgetTypeindex].map((_Widgets, widgetsindex) => {
                            let currentindex = getcurrentindex(WidgetTypeindex, widgetsindex);
                            console.log(_Widgets.title + '  ' + currentindex);
                            return (
                              <div key={currentindex} className='data' draggable="true" onDragStart={(e) => dragStrated(e, _Widgets.id, currentindex, _Widgets.title, _Widgets.startcodesnippet, _Widgets.isonlynested, _Widgets.parentid)}>
                                <li key={currentindex} className={_Widgets.cName}>

                                  {_Widgets.icon}
                                  <span>{_Widgets.title}</span>

                                </li>
                              </div>
                            );

                          })
                        }
                      </Collapsible>
                    </div>
                  </>
                );
              })
            }

          </ul>

        </nav>


      </IconContext.Provider>

    </>
  );


}