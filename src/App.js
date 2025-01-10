// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from "./Components/Scrolltotop.js";
import BackToTopButton from './Components/BacktoTop/backtotop.js';

import "./App.css";
import NavigationBar from './Components/Header/header.js';
import Home from "./Components/Home/home.js";
import AboutUs from "./Components/AboutUs/About-us.js"
import Products from "./Components/Product/Products.js";
import ContactUs from './Components/ContactUs/ContactUs.js';
import Footer from "./Components/Footer/Footer.js"

import ProductPage1 from "./Components/Product/Bolt-former.js";
import ProductPage2 from "./Components/Product/Header-Machine.js";
import ProductPage3 from "./Components/Product/Nut-former.js";
import ProductPage4 from "./Components/Product/Part-former.js";
import ProductPage5 from "./Components/Product/Slotting-machine.js";
import ProductPage6 from "./Components/Product/Threat-rolling-machine.js";
import ProductPage7 from "./Components/Product/VT-cut-machine.js";
import ProductPage8 from "./Components/Product/Washer-Assembly.js";

const App = () => {
  return (
    <Router>
   
      <ScrollToTop />
      
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} /> 

        <Route path="/Bolt-former" element={<ProductPage1 />} />
        <Route path="/Header-Machine" element={<ProductPage2 />} />
        <Route path="/Nut-former" element={<ProductPage3 />} />
        <Route path="/Part-former" element={<ProductPage4 />} />
        <Route path="/Slotting-machine" element={<ProductPage5 />} />
        <Route path="/Threat-rolling-machine" element={<ProductPage6 />} />
        <Route path="/VT-cut-machine" element={<ProductPage7 />} />
        <Route path="/Washer-Assembly" element={<ProductPage8 />} />
        <Route path="/Contact-us" element={<ContactUs />} />
      </Routes>
    
      <Footer />
      
    </Router>
  );
};

export default App;
