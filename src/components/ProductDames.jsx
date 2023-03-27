import React from "react";
import Event from "./Event";
import DamesProduct from "../DamesProduct";
import jacket1 from "../images/jacket1.png";

function ProductDames(DamesProduct){
return <Event
id={DamesProduct.id}
key={DamesProduct.id}
img={DamesProduct.img}
name={DamesProduct.name}
price={DamesProduct.price}
salePrice={DamesProduct.salePrice} />
}

export default ProductDames;