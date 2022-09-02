import React from 'react';
import './App.css';
import Form from './Form';
import Front from './frontpage/Front';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import FormSignIn from './Signin';
import Projects from './components/Projects';
import  Designer  from './Designer/Designer';
import FormSuccess from './FormSuccess';
import PrivateRoutes from './PrivateRoutes';

function App() {
 
  return (
<Router>  
  <Routes>
    <Route element={<PrivateRoutes/>}>
  <Route path="/Projects"element={<Projects/>}/>
  <Route path="/Designer"element={<Designer/>}/>
  </Route>
  <Route path="/FormSuccess" element={<FormSuccess/>}/>
  <Route path="/" element={<Front/>}/>
  <Route path="/FormSignIn"element={<FormSignIn/>}/>
  <Route path="/Form" element={<Form/>}/>
  </Routes>
  </Router>
  );
}

export default App;
