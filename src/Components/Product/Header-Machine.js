// HeaderMachinePage.js
import React, { useEffect } from 'react';
import './ProductPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productImage from '../../Images/header-machine/automatic-heavy-duty-screw-header-machine-removebg-preview(1).png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const HeaderPage = () => {
   useEffect(() => {
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        once: true,     // Ensure the animation happens only once
      });
    }, []);
  return (
    <div
      className="subproduct-page-container"
      
    >
      <Breadcrumb currentPage="Header Machine" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Header Machine</h1>
      </div>

      <div className="subproduct-content">
        
      <img src={productImage} alt="Header Machine" className="subproduct-image"
         style={{
          width: '100%',
          height: '380px',
          objectFit: 'contain',
        
        
        }} 
         data-aos="zoom-in"
        />
        <div className="subproduct-details"data-aos="fade-up">
          <p className="subproduct-description">
            A header machine is a specialized cold-forging machine used to produce fasteners like bolts, screws, and rivets by shaping metal wire into heads and shanks. It is commonly used in industries requiring large quantities of precision fasteners.
          </p>
          <div className="subproduct-features">
            <h2>Key Features:</h2>
            <ul>
              <li><strong>Cold Forging:</strong> Shapes metal at room temperature, maintaining material strength.</li>

              <li><strong>High Speed:</strong> Produces fasteners quickly for mass production.</li>

              <li><strong>Precision Forming:</strong> Ensures uniform shapes and sizes for quality control.</li>
              
              <li><strong>One Die Two Blow Option:</strong> Allows two forming operations in single cycle.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications:</h2>
            <ul>
              <li><strong>Fastener Production:</strong> For screws, rivets, and pins.</li>
              <li><strong>Automotive and Aerospace:</strong> Producing high-strength fasteners.</li>
              <li><strong>Construction and Electronics:</strong> Creating durable components for assemblies.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeaderPage;