import React,{useState} from "react";
import { Routes ,Route } from "react-router-dom";
import './App.css'
import {Login} from "./login";
import {Register} from "./register";
import Medicinesfrontend from "./Components/Medicinesfrontend";
import Profile from "./Components/Profile";
import NavigationBar from "./Components/NavigationBar";


function App() {
  
  const [currentForm,setCurrentForm] = useState('login');
  
  const toggleForm =() =>{
   
    if ( currentForm == "login"){
      setCurrentForm("register");
    }
    else if( currentForm == "register"){
      setCurrentForm("login");
    }
  } 
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<> <Login/></> } />
      
        <Route path="/register" element={ <Register/> } />
        <Route path="/profile" element={<>  <NavigationBar/> <Profile/></> } />
        <Route path="/medicine" element={<>  <NavigationBar/> <Medicinesfrontend/></> } />
        
      </Routes>
    
    
    </div>
  );
}
export default App;
