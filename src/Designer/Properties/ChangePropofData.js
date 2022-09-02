import { data } from "../DnD/Data";
import { objectprop } from "./objectprop";

export function ChangePropofData()
{/* I want to check on the data if it exists if it does check if it's the same if it is then do nothing else reset the data so it doesn't duplicate*/
 
for(let i=0;i<document.getElementsByName("Properties").length;i++)
 { console.log("here at the for");
    if(data.at(objectprop.at(0).id).propertyisset==false)
   { console.log("here at the value");
       if(document.getElementsByName("Properties")[i].value!="")
    {   
         data.at(objectprop.at(0).id).properties.push({value:document.getElementsByName("Properties")[i].value})

    } 
    else
    {
        data.at(objectprop.at(0).id).properties.push({value:document.getElementsByName("Properties")[i].getAttribute("placeholder")});

    }  

  }
  else if( data.at(objectprop.at(0).id).propertyisset)
  
  {console.log("here at the not value");
       if(document.getElementsByName("Properties")[i].value!="")
  { console.log("The value is "+data.at(objectprop.at(0).id).properties[i+1].value+"The placeholder is = "+document.getElementsByName("Properties")[i].getAttribute("placeholder"));
    
//   if(document.getElementsByName("Properties")[i].getAttribute("placeholder")==data.at(objectprop.at(0).id).properties[i+1].value)  
//     {console.log("not equal oh no!");
    
//     } 
   console.log("the value it was the value");
   if(document.getElementsByName("Properties")[i].value!=data.at(objectprop.at(0).id).properties[i+1].value)
    data.at(objectprop.at(0).id).properties[i+1].value=document.getElementsByName("Properties")[i].value;
  
}
  
    
  }
 }
 data.at(objectprop.at(0).id).propertyisset=true;
}
