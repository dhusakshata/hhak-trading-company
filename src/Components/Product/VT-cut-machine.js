// VTCuttingMachinePage.js
import React, { useEffect } from 'react';
import './ProductPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import productImage from '../../Images/vt-cut/die-cutting-machine-vt-series.png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const VTCuttingMachinePage = () => {
   useEffect(() => {
      AOS.init({
        duration: 2000, 
        once: true,     
      });
    }, []);
  return (
    <div
      className="subproduct-page-container"
     
    >
      <Breadcrumb currentPage="VT Cut Machine" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">VT Cut Machine</h1>
      </div>

      <div className="subproduct-content"   style={{
     padding:"40px"
        
        }}>
                  <img src={productImage} alt="VT Cut Machine" className="subproduct-image"  style={{
          width: '100%',
          height: '500px',
          objectFit: 'contain',
        marginTop:"-80px"
        
        }}  data-aos="zoom-in" />
        <div className="subproduct-details"data-aos="fade-up">
          <p className="subproduct-description">
            A VT Cut Machine is a specialized cutting machine designed for precise and efficient cutting of materials, often used in manufacturing and fabrication industries. It is typically associated with processes requiring high accuracy, such as metal cutting or component shaping.
          </p>
          <div className="subproduct-features">
            <h2>Key Features:</h2>
            <ul>
              <li><strong>High Precision:</strong> Ensures clean and accurate cuts for complex designs.</li>

              <li><strong>Versatile Material Handling:</strong> Suitable for cutting metals or other materials depending on the application.</li>

            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications:</h2>
            <p>
              Commonly used in industries such as automotive, aerospace, fabrication, and construction for precise cutting of metal and other materials for complex parts and components.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};
export default VTCuttingMachinePage;