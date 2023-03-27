import React from "react";
import ProductsTop from "../images/ProductsTop.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import AllProducts from "../AllProducts";
import ProductsAll from "./ProductsAll";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";

function Products(){
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
                <h1 className="herenTitle">Products</h1>
                <img className="herenTopImg" src={ProductsTop} alt="image" />
            </div>
            <div className="herenDropDownButton">  
                <ButtonDarkExample  />
                </div>
                <div className="mapDiv">
                    <dl className="dictionary">
    {AllProducts.map((ProductsAll)=>
    <div key={ProductsAll.id} className="term ">
    <dt>
      <span className="product" role="img" aria-label="products">
        <img className="propsImg" src={ProductsAll.img}/>
      </span>
       <span>
      <NavLink className="navImportant" to={"/Products/"+ProductsAll.id}>{ProductsAll.name}</NavLink></span>
    </dt>
    <dd>
     <h4><s>{ProductsAll.salePrice}</s> <br/><br/> {ProductsAll.price}  </h4>
    </dd>
    
  </div>)}
    </dl></div>
   
    <div className="pagination">
    <PaginationRounded className="paginationCenter"/>
    </div>
    </div>
            
}

export default Products;