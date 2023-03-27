import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Home from "./components/Home";
import Heren from "./components/Heren";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dames from "./components/Dames";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import Algemene from "./components/Algemene";
import Verzendinformatie from "./components/Verzendinformatie";
import Privacybeleid from "./components/Privacybeleid";
import ProductDetail from "./components/ProductDetail";

ReactDOM.render((<BrowserRouter>
<Routes>
    <Route path="/" element={<App/>}>
  <Route index element={<Home/>}/>
  <Route path="Heren" element={<Heren/>}/>
  <Route path="Dames" element={<Dames/>}/>
  <Route path="Products" element={<Products/>}/>
  
  <Route path="Contact" element={<Contact/>}/>
  <Route path="About" element={<About/>}/>
  <Route path="Algemene Bedrijfsvoorwaarden" element={<Algemene/>}/>
  <Route path="Verzendinformatie" element={<Verzendinformatie/>}/>
  <Route path="Privacybeleid" element={<Privacybeleid/>}/>
  <Route path="/Products/:AllProductsId" element={<ProductDetail/>}/>
  </Route>
    </Routes>
    </BrowserRouter>), document.getElementById("root"));



