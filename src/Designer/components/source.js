import * as Icon3 from 'react-icons/vsc';
import React from 'react';
import Popup from 'reactjs-popup';
import './source.css'
export default function Sourcecode(){
    return (
       
        <Popup contentStyle={{width:"500px"}} trigger={ <button className='source' title='sourcecode ' href="#popup1"><Icon3.VscCode/> </button>} position="bottom center">
{close => (
   
    <div className="mytabs">
    <input type="radio" id="tabfree" name="mytabs" checked="checked"/>
    <label for="tabfree">HTML</label>
    <div className="tab">
      <h4>html code</h4>
      <p></p>
    </div>

    <input type="radio" id="tabsilver" name="mytabs"/>
    <label for="tabsilver">CSS</label>
    <div className="tab">
      <h4>css code</h4>
      <p></p>
    </div>

   
    </div>
)}
</Popup>



    )
    
}



