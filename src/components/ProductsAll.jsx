import React from "react";
import Event from "./Event";
import DamesProduct from "../DamesProduct";


function ProductAll(AllProducts){
return <Event
key={AllProducts.id}
img={AllProducts.img}
name={AllProducts.name}
price={AllProducts.price}
salePrice={AllProducts.salePrice} />
}

export default ProductAll;