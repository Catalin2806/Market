import React from "react";
import home from "../images/home.png"
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import jacket1 from "../images/jacket1.png";
import jacket2 from "../images/jacket2.png";
import jacket3 from "../images/jacket3.png";
import jacket4 from "../images/jacket4.png";
import jacket5 from "../images/jacket5.png";
import pulover1 from "../images/pulover1.png";
import pulover2 from "../images/pulover2.png";
import shoes1 from "../images/shoes1.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.jpg";
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";


function Home(){
    return <div>
        <div className="">
        <img className="homeImg" src={home} alt="image"/>
        <div className="paralel mobile "><h1><em>LINDENMODE</em></h1>
        <p className="par1"><i>50% HerfstKorting</i></p>
        <NavLink to="/Products">
<Button className="centru" variant="dark" size="lg">Ontdek nu</Button>
</NavLink>
        </div>
    </div>
    <div><h2 className="h2Center">Onze bestsellers %</h2>
    </div>
    <div className="carousel-down">
    <Carousel variant="dark">
      <Carousel.Item>
      <NavLink to="/Products/2"> <img
          className="re-sizeImg d-block w-100"
          src={jacket1}
          alt="First slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
        <h5>Ladovico Jas</h5>
          <p>$64.95</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$129.95</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/1"> <img
          className="re-sizeImg d-block w-100"
          src={jacket2}
          alt="Second slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
        <h5>Armina Jas</h5>
          <p>$54.99</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$109.99</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/6"> <img
          className="re-sizeImg d-block w-100"
          src={jacket3}
          alt="Third slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
          <h5>Tullio Shirt</h5>
          <p>
           $49.95
          </p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$99.95</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/8"> <img
          className="re-sizeImg d-block w-100"
          src={jacket4}
          alt="Second slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
          <h5>Diano Jas</h5>
          <p>$59.95</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$119.95</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/4"><img
          className="re-sizeImg d-block w-100"
          src={jacket5}
          alt="Second slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
          <h5>Waterdichte Militaire <br/> Jas & Broek</h5>
          <p>$79.95</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$110.99</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/10"> <img
          className="re-sizeImg d-block w-100"
          src={pulover1}
          alt="Second slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
          <h5>Piero Cardigan</h5>
          <p>$49.99</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$99.99</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/9"> <img
          className="re-sizeImg d-block w-100"
          src={pulover2}
          alt="Second slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
          <h5>Alsuina Warm <br/>Gebreid Vest</h5>
          <p>$49.99</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$95.99</s></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to="/Products/11"> <img
          className="re-sizeImg d-block w-100"
          src={shoes1}
          alt="Second slide"
        /></NavLink>
        <Carousel.Caption className="caption-right">
          <h5>Cara Sneakers</h5>
          <p>$39.90</p>
        </Carousel.Caption>
        <Carousel.Caption className="caption-left">
          <h5>Best Price!</h5>
          <p><s>$79.90</s></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
    <img className="homeImg telImg" src={home2} alt="image2"/>
        <div className="paralel2 mobile typeMobile writeImg"><h1><em>KLASSE</em></h1>
        <h5>LINDEN BRENGT DE NEDERLANDSE FASHION 
            <br/> NAAR EEN HOGER NIVEAU</h5>
        <p><i>Ons team heeft een uistekend begrip van de nieuwste trends op het<br/> gebied van stedelike mode en schoonheid in Nederland & Belgie.
            <br/>Wij geloven dat mode betaalbaar moet zn met behoud van optimale stijl en kwaliteit.
            <br/> Onze producten zijn geinspireerd door Amsterdamse modestromingen waardoor <br/> we altijd de nieuwste trends kinnen aanbieden. </i></p></div>  
    </div>
    <div>
    <img className="home3" src={home3} alt="image2"/>
    <div className="infoHome infoHomeMobile"><h3>LINDENMODE</h3>
    <p>Heeft u vragen over uw bestelling?</p>
    <p>Contacteer ons <br/>
    op: @mail.com</p>
    <p>Maandag - Vrijdag<br/>
    9:00 - 17:00</p>
    <p>Zaterdag<br/>
    9:00 - 17:00</p>
    <p>
        Wij proberen binnen 24 uur al uw vragen te beantwoorden.
    </p>
    </div>
    </div>
    </div>
}

export default Home;