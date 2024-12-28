// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Header/header.js';
import Home from "./Components/Home/Home.js";
import AboutUs from "./Components/AboutUs/About-us.js"
import Products from "./Components/Product/Products.js";
import ContactUs from './Components/ContactUs/ContactUs.js';
import 'typeface-poppins';
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/Contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
