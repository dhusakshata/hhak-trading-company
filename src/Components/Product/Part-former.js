// PartFormerPage.js
import React from 'react';
import './ProductPage.css';
import productImage from '../../Images/part-former/partformer1-removebg-preview.png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const PartFormerPage = () => {
  return (
    <div
      className="subproduct-page-container"
      
    >
      <Breadcrumb currentPage="Part Former" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Part Former</h1>
      </div>

      <div className="subproduct-content" style={{
     padding:"53px"
        
        }} >
        <div className="subproduct-details">
          <p className="subproduct-description">
            A part former is a versatile cold-forging machine used to manufacture complex metal parts with high precision. It’s commonly used in industries requiring intricate shapes, such as automotive, aerospace, and electronics.
          </p>
          <div className="subproduct-features">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Multi-station Capability:</strong> Performs multiple operations like cutting, bending, punching, and forming in a single cycle.</li>
              <li><strong>High Precision:</strong> Ensures consistent dimensions and shapes, even for complex designs.</li>
              <li><strong>Material Versatility:</strong> Works with a wide range of metals, including steel, aluminum, and alloys.</li>
              <li><strong>Efficiency:</strong> Produces high volumes of parts with minimal material waste.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications</h2>
            <p>
              Commonly used in industries such as automotive, aerospace, and electronics for manufacturing intricate parts, including gears, shafts, and other precision components.
            </p>
          </div>
        </div>

        <img src={productImage} alt="Part Former" className="subproduct-image"    style={{
          width: '100%',
          height: '300px',
          objectFit: 'contain',
        marginTop:'-120px'
        
        }} />
      </div>
    </div>
  );
};
export default PartFormerPage;