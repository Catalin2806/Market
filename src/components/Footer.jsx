import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";
import { Info } from "@mui/icons-material";
import Button from 'react-bootstrap/Button';

function Footer(){
    const year = new Date().getFullYear();
    return <div className="footerColor">
<div className="info">
<h5>Over ons</h5>
<p>Ons team bestaat uit enthousiaste dames met een passie voor mode.<br/> Elke dag gaan we op zoek narr de beste trends en op<br/>
basis daarvan creeren we onze kleding voor jou!</p>
<p><EmailIcon/> @mail.com</p>
<p>Copyright ⓒ {year}</p>
</div>
<div className="infoLinks">
<h5>Info</h5>
<NavLink className="linkContact"to="/">Home</NavLink><br/>
              <NavLink className="linkContact" to="/Algemene Bedrijfsvoorwaarden">Algemene Bedrijfsvoorwaarden</NavLink>
              <br/>
              <NavLink className="linkContact" to="/Verzendinformatie">Verzendinformatie</NavLink>
              <br/>
              <NavLink className="linkContact" to="/Privacybeleid">Privacybeleid</NavLink>
              <br/>
              <NavLink className="linkContact" to="/Contact">Contact</NavLink>
              <br/>
              <NavLink className="linkContact" to="/About">About</NavLink>
</div>
<Button className="buttonFooter" href="#NavBar" variant="outline-dark">^<br/>
Up</Button>
    </div>
}

export default Footer;