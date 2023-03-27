import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import Heren from "./Heren";
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function NavBarBurgr (){
  

    return (
      <Navbar id="NavBar" bg="light" expand="lg" className="center-navbar ">
        <Container fluid>
          <Navbar.Brand  href="#">LinderMode</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
    
            bg="dark"
            variant="light"
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
              <NavLink className="center-link" to="/">Home</NavLink>
              <NavLink className="center-link" to="/Dames">Dames</NavLink>
              <NavLink className="center-link" to="/Heren">Heren</NavLink>
              <NavLink className="center-link" to="/Contact">Contact</NavLink>
              <NavLink className="center-link" to="/About">About</NavLink>
          
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark"><SearchIcon/></Button>
            </Form>
          </Navbar.Collapse>
          <Dropdown >
          <Dropdown.Toggle variant="outline-dark"><LanguageIcon/>
              </Dropdown.Toggle>
         
      
              <Dropdown.Menu variant="dark">
              <Dropdown.Item href="">€</Dropdown.Item>
                <Dropdown.Item href="#">$</Dropdown.Item>
                <Dropdown.Item href="#">£</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         
          <Button variant="outline-dark"><LocalMallIcon/></Button>
        </Container>
      </Navbar>
    );
}

export default NavBarBurgr;