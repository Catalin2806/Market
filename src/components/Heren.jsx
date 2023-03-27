import React from "react";
import herentop from "../images/herentop.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HerenProduct from "../HerenProduct";
import Product from "./Product";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import jacket1 from "../images/jacket1.png";
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";


function Heren(){

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
            <h1 className="herenTitle">Heren</h1>
            <img className="herenTopImg" src={herentop} alt="image" />
        </div>
        <div className="herenDropDownButton">  
            <ButtonDarkExample  />
            </div>
            <div className="mapDiv">
                <dl className="dictionary">
{HerenProduct.map((Product)=>
  <div key={Product.id} className="term">
  <dt>
      <span className="product" role="img" aria-label="products">
        <img className="propsImg" src={Product.img}/>
      </span>
       <span>
      <NavLink className="navImportant" to={"/Products/"+Product.id}>{Product.name}</NavLink></span>
    </dt>
    <dd>
     <h4><s>{Product.salePrice}</s> <br/><br/> {Product.price}  </h4>
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

export default Heren;