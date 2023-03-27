import React from "react";
import jacket1 from "../images/jacket1.png";
import {BrowserRouter,Router,Routes,Route,Navigate,NavLink} from "react-router-dom";
import AllProducts from "../AllProducts";

function Event(props){
    return  <div className="term">
      <dt>
        <span className="product" role="img" aria-label="products">
          <img className="propsImg" src={props.img}/>
        </span>
         <span>
        <NavLink to={`/Products/${props.id}`}>{props.name}</NavLink></span>
      </dt>
      <dd>
       <h4><s>{props.salePrice}</s> <br/><br/> {props.price}  </h4>
      </dd>
      
    </div>
  
}

export default Event;