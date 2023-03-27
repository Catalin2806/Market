import React from "react";
import DamesTop1 from "../images/DamesTop1.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import DamesProduct from "../DamesProduct";
import ProductDames from "./ProductDames";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";

function Dames(){
    function PaginationRounded() {
        return (
          <Stack spacing={2}>
            <Pagination count={10} shape="rounded" />
          </Stack>
        );
      }
    
        function ButtonDarkExample() {
            return (
              <>
                <Dropdown >
                  <Dropdown.Toggle className="btn-dark" id="dropdown-button-dark-example1" variant="secondary">
                    Sorteer op
                  </Dropdown.Toggle>
          
                  <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1">Uitgelicht</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Alfabetisch: A-Z</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Alfabetisch: Z-A</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Prijs:laag naar hoog</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Prijs:hoog naar laag</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Datum:oud naar nieuw</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">Datum:nieuw naar oud</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </>
                );}
    
        return <div>
            <div>
                <h1 className="herenTitle">Dames</h1>
                <img className="herenTopImg" src={DamesTop1} alt="image" />
            </div>
            <div className="herenDropDownButton">  
                <ButtonDarkExample  />
                </div>
                <div className="mapDiv">
                    <dl className="dictionary">
    {DamesProduct.map((ProductDames)=><div key={ProductDames.id} className="term">
  <dt>
      <span className="product" role="img" aria-label="products">
        <img className="propsImg" src={ProductDames.img}/>
      </span>
       <span>
      <NavLink className="navImportant" to={"/Products/"+ProductDames.id}>{ProductDames.name}</NavLink></span>
    </dt>
    <dd>
     <h4><s>{ProductDames.salePrice}</s> <br/><br/> {ProductDames.price}  </h4>
    </dd>
    
  </div>)
}
    </dl>
    <div className="pagination">
    <PaginationRounded className="paginationCenter"/>
    </div>
    </div>
            </div>
}

export default Dames;