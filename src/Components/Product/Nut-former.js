// NutFormerPage.js
import React, { useEffect } from 'react';
import './ProductPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import productImage from '../../Images/nut-former/nut-former-machine-removebg-preview.png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const NutFormerPage = () => {
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
      <Breadcrumb currentPage="Nut Former" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Nut Former</h1>
      </div>

      <div className="subproduct-content">
      <img src={productImage} alt="Nut Former" className="subproduct-image"
         style={{
          width: '100%',
          height: '450px',
          objectFit: 'contain',
        marginTop:'-70px'
        
        }}
        data-aos="zoom-in" 
        />
        <div className="subproduct-details" data-aos="fade-up">
          <p className="subproduct-description">
            A nut former is a specialized machine used to manufacture nuts and similar fasteners through cold forging. It forms metal wire or rods into the desired shape with heating and without heating, ensuring high precision and efficiency.
          </p>
          <div className="subproduct-features">
            <h2>Key Features:</h2>
            <ul>
              <li><strong>Multi-station Operation:</strong> Performs several processes like cutting, forming in one cycle.</li>
              <li><strong>High Production Speed:</strong> Produces large quantities of nuts in a short time.</li>
              <li><strong>Versatility:</strong> Can create nuts in various shapes and sizes (hexagonal, square, triangular, etc.).</li>
              <li><strong>Material Efficiency:</strong> Minimizes waste during the forming process.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications:</h2>
            <p>
              Commonly used in industries like automotive, construction, and manufacturing for creating durable and standardized nuts used in assemblies.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};


export default NutFormerPage;