import React,{useState} from "react";
import {useParams} from "react-router-dom";
import AllProducts from "../AllProducts";
import Button from 'react-bootstrap/Button';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CounterInput from 'react-bootstrap-counter';


function ProductDetail(){


const {AllProductsId}=useParams();

const singleProduct=AllProducts.find((ProductsAll)=>ProductsAll.id==AllProductsId)|| {};

const {name,img}= singleProduct;

    const [count, setCount] = useState(0);
  
    function increase() {
      setCount(count + 1);
    }
  
    function decrease() {
        if(count>0){
      setCount(count - 1);}
      else {setCount(0);}}


    return <div className="telefondiv ">

      
      <img className="productDetail" src={img}/>
     
      <div className="productNameDetail">
        <h1 >{name}</h1>
        <div className="container counterDetails">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
        <Button className="productButton" variant="dark" size="lg">Buy</Button>
        </div>
       
        </div>
}

export default ProductDetail;