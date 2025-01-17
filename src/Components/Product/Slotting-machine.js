// SlottingMachinePage.js
import React, { useEffect } from 'react';
import './ProductPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productImage from '../../Images/sloting-machine/high-grade-slotting-machine-removebg-preview(1).png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const SlottingMachinePage = () => {
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
      <Breadcrumb currentPage="Slotting Machine" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Slotting Machine</h1>
      </div>

      <div className="subproduct-content"     style={{
     padding:"50px"
        
        }}>
          <img src={productImage} alt="Slotting Machine" className="subproduct-image"
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'contain',
        marginTop:"-40px"
        
        }} 
         data-aos="zoom-in"
        />
        <div className="subproduct-details"data-aos="fade-up">
          <p className="subproduct-description">
            A slotting machine is a machining tool used to create vertical slots, metals workpieces. It operates by moving a single-point cutting tool up and down, removing material in a controlled manner.
          </p>
          <div className="subproduct-features">
            <h2>Key Features:</h2>
            <ul>
              <li><strong>Vertical Cutting Motion:</strong> The cutting tool moves vertically while the workpiece remains stationary.</li>

              <li><strong>Precision Machining:</strong> Ideal for creating accurate slots and grooves.</li>

              <li><strong>Adjustable Table:</strong> Allows for positioning the workpiece at consistent angles.</li>

              <li><strong>Versatility:</strong> Can handle various materials, including metals.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications:</h2>
            <p>
              Commonly used for creating keyways and grooves in mechanical components like gears, pulleys, and shafts. Also utilized in industries like automotive, aerospace, and machinery for producing precise vertical slots and intricate parts.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};
export default SlottingMachinePage;