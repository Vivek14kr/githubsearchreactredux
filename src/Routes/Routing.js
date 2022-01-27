import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "../components/Home"
import Registration from "../components/Registration";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
export const Routing = ()=>{
   return (
     <div>
        <Navbar/>
       <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/registration" element={<Registration/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
       </Routes>
     </div>
   );
}