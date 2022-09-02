import React, { startTransition } from "react";
import { getWidgetsdata, Widgets, WidgetType } from "../components/SidebarData";



export var widgetpropertiesdata=
[{
  widgetid:null,
  propertyID:null,
  defaultValue:null
}]
function fetchwidgetproperties()
{

    const api_url ="http://www.lcnc.somee.com/api/WidgetProperty/GetAllWidgetProperties";


  fetch(api_url,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
    .then((response) => response.json())
    .then((data) => assignwidgetproperties(data));
}

function assignwidgetproperties(widgetproperties_data) 
{
  for (let r of widgetproperties_data)
  {
    widgetpropertiesdata.push(
    {
      widgetid:r.widgetID,
      propertyID:r.propertyID,
      defaultValue:r.defaultValue
    });
  }

}

//////////////////////////

export var Propertiesdata=
[{
  propertyid:'',
  propertyName:'',
  description:''
}]

function fetchProperties()
{

    const api_url ="http://www.lcnc.somee.com/api/Property/GetAllProperties";


  fetch(api_url,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
    .then((response) => response.json())
    .then((data) => assignProperties(data));
}

function assignProperties(Properties_data) 
{
  for (let r of Properties_data)
  {
    Propertiesdata.push(
    {
      propertyid:r.id,
      propertyName:r.propertyName,
      description:r.description
    });
 
  }

}

////////////////////////////////////////////////////////

export var PropertyUnitdata=
[{
  propertyid:'',
  unitid:''
}]

function fetchPropertyUnit()
{

    const api_url ="http://www.lcnc.somee.com/api/PropertyUnit/GetAllPropertyUnits";


  fetch(api_url,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
    .then((response) => response.json())
    .then((data) => assignPropertyUnit(data));
}

function assignPropertyUnit(assignPropertyUnit_data) 
{
  for (let r of assignPropertyUnit_data)
  {
    PropertyUnitdata.push(
    {
      propertyid:r.propertyID,
      unitid:r.unitID
    });
 
  }
}

/////////////////////////////////////////////////
export var Unitsdata=
[{
  unitid:'',
  unitname:''
}]

function fetchUnits()
{

    const api_url ="http://www.lcnc.somee.com/api/Unit/GetAllUnits";


  fetch(api_url,
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
    .then((response) => response.json())
    .then((data) => assignUnits(data));
}

function assignUnits(assignassignUnits_data) 
{
  for (let r of assignassignUnits_data)
  {
    Unitsdata.push(
    {
      unitid:r.id,
      unitname:r.unitName
    });
  }

}



export function getallproperties()
{
  fetchwidgetproperties();
  fetchProperties();
  fetchPropertyUnit();
  fetchUnits();
}