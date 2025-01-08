// HeaderMachinePage.js
import React from 'react';
import './ProductPage.css';
import productImage from '../../Images/header-machine/automatic-heavy-duty-screw-header-machine-removebg-preview(1).png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const HeaderPage = () => {
  return (
    <div
      className="subproduct-page-container"
      
    >
      <Breadcrumb currentPage="Header Machine" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Header Machine</h1>
      </div>

      <div className="subproduct-content">
        <div className="subproduct-details">
          <p className="subproduct-description">
            A header machine is a specialized cold-forging machine used to produce fasteners like bolts, screws, and rivets by shaping metal wire into heads and shanks. It is commonly used in industries requiring large quantities of precision fasteners.
          </p>
          <div className="subproduct-features">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Cold Forging:</strong> Shapes metal at room temperature, maintaining material strength.</li>
              <li><strong>High Speed:</strong> Produces fasteners quickly for mass production.</li>
              <li><strong>Precision Forming:</strong> Ensures uniform shapes and sizes for quality control.</li>
              <li><strong>Multi-die Options:</strong> Allows for multiple forming operations in a single cycle.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications</h2>
            <ul>
              <li><strong>Fastener Production:</strong> For bolts, screws, rivets, and pins.</li>
              <li><strong>Automotive and Aerospace:</strong> Producing high-strength fasteners.</li>
              <li><strong>Construction and Electronics:</strong> Creating durable components for assemblies.</li>
            </ul>
          </div>
        </div>

        <img src={productImage} alt="Header Machine" className="subproduct-image"
         style={{
          width: '100%',
          height: '380px',
          objectFit: 'contain',
        
        
        }} 
        />
      </div>
    </div>
  );
};

export default HeaderPage;