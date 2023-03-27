import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from "react-router-dom";
import NavBarBurgr from "./NavBarBurgr";
import {Outlet} from "react-router-dom";

const App=() =>{
    return (
        <>
       <NavBarBurgr/> 
        <Outlet />
<Footer/>
</>);
        }

    export default App;