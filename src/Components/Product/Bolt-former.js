import React, { useEffect } from 'react';
import './ProductPage.css';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

import AOS from 'aos';
import 'aos/dist/aos.css';

 import productImage from '../../Images/bolt-former/bold-machine-removebg-preview(2).png';

const BoltFormerPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    });
  }, []);
  return (
    <div className="subproduct-page-container"
    >
      <Breadcrumb currentPage="Bolt Former" isSubProduct={true} />
      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Bolt Former</h1>
      </div>
      <div className="subproduct-content" >
                 <img 
  src={productImage} 
  alt="Bolt Former" 
  className="subproduct-image" 
  style={{
    width: '100%',
    height: '450px',
    objectFit: 'contain',
  marginTop:'-100px'
  
  }} 
  data-aos="zoom-in"
/>
        <div className="subproduct-details" data-aos="fade-up">
          <p className="subproduct-description">
            The Bolt Former is a high-efficiency machine designed for manufacturing bolts with precision and durability. 
            It features advanced technology for multi-stage forming and ensures consistent production quality.
          </p>
          <div className="subproduct-features">
            <h2>Key Features:</h2>
            <ul>
              <li><strong>High Speed:</strong> Produces bolts in large quantities quickly.</li>
              <li><strong>Precision Forming:</strong> Ensures consistent shapes and sizes.</li>
              <li><strong>Durability:</strong> Designed to handle tough metals like steel and alloy.</li>
              <li><strong>Multi-station Capability:</strong> Performs multiple forming operations in one cycle.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications:</h2>
            <p>
              Used in industries like automotive, construction, and aerospace to produce bolts for various applications.
            </p>
          </div>
        </div>
 

      </div>
    </div>
  );
};

export default BoltFormerPage;
