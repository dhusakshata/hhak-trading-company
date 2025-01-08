// WasherAssemblyPage.js
import React from 'react';
import './ProductPage.css';
import productImage from '../../Images/washer-assembly/washer-assembly1.png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const WasherAssemblyPage = () => {
  return (
    <div
      className="subproduct-page-container"
      
    >
      <Breadcrumb currentPage="Washer Assembly Machine" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Washer Assembly Machine</h1>
      </div>

      <div className="subproduct-content"
        style={{
          padding:"35px"
             
             }}
      >
        <div className="subproduct-details">
          <p className="subproduct-description">
            A washer assembly machine is a specialized automated system designed to assemble washers onto bolts, screws, or other components. It streamlines the process of combining these parts, ensuring precision and high production efficiency.
          </p>
          <div className="subproduct-features">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Automation:</strong> Handles the assembly process without manual intervention.</li>
              <li><strong>High Speed:</strong> Assembles large quantities of washers efficiently.</li>
              <li><strong>Precision Placement:</strong> Ensures washers are securely and accurately positioned on fasteners.</li>
              <li><strong>Customization:</strong> Adjustable for different sizes and types of washers and fasteners.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications</h2>
            <p>
              Commonly used in industries like automotive, electronics, construction, and machinery. Washer assembly machines are essential for efficiently assembling washers onto fasteners like bolts and screws in high volumes.
            </p>
          </div>
        </div>

        <img src={productImage} alt="Washer Assembly Machine" className="subproduct-image" 
         style={{
          width: '100%',
          height: '450px',
          objectFit: 'contain',
        marginTop:"-20px"
        
        }} 
        />
      </div>
    </div>
  );
};


export default WasherAssemblyPage;