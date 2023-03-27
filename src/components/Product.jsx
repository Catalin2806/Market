import React from "react";
import Event from "./Event";
import HerenProduct from "../HerenProduct";
import jacket1 from "../images/jacket1.png";

function Product(HerenProduct){
return <Event
key={HerenProduct.id}
img={HerenProduct.img}
name={HerenProduct.name}
price={HerenProduct.price}
salePrice={HerenProduct.salePrice} />
}

export default Product;