import React from "react";
import Navbar from "./Mainpage/Navbar";
// import Homeslider from "./Mainpage/Homeslider";
import Home from "./Mainpage/Home";
import{Routes,Route} from 'react-router-dom'
import Medicalstore from "./Routerscompo/Medicalstore";
import Testcard from "./Testandsurgery/Testcard";
import Surgeryform from "./Testandsurgery/Surgeryform";

function App() {

  
  return (
    <div>
       <Navbar/>
       
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='store' element={<Medicalstore/>}/>
        <Route path='test' element={<Testcard/>}/>
        <Route path='surgery' element={<Surgeryform/>}/>
        
       </Routes> 
    </div>
  );
};
export default App;

