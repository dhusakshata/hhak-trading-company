// ThreadRollingMachinePage.js
import React, { useEffect } from 'react';
import './ProductPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productImage from '../../Images/thread-rolling-machine/thread-rolling1.png';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const ThreadRollingMachinePage = () => {
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
      <Breadcrumb currentPage="Thread Rolling Machine" isSubProduct={true} />

      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Thread Rolling Machine</h1>
      </div>

      <div className="subproduct-content"   style={{
     padding:"50px"
        
        }}>
          <img src={productImage} alt="Thread Rolling Machine" className="subproduct-image"  style={{
          width: '100%',
          height: '400px',
          objectFit: 'contain',
        marginTop:"-40px"
        
        }} 
        data-aos="zoom-in"/>
        <div className="subproduct-details"data-aos="fade-up">
          <p className="subproduct-description">
            A thread rolling machine is specialized equipment used to create threads on fasteners such as bolts, screws, and studs. It forms threads by rolling a blank (unthreaded part) between dies, without cutting the material, which increases the strength and durability of the threads.
          </p>
          <div className="subproduct-features">
            <h2>Key Features:</h2>
            <ul>
              <li><strong>Cold Forming Process:</strong> Threads are formed through pressure, not cutting, maintaining material integrity.</li>

              <li><strong>Precision and Consistency:</strong> Produces accurate and uniform threads.</li>

              <li><strong>High Efficiency:</strong> Suitable for mass production of threaded components.</li>

              <li><strong>Versatility:</strong> Can create different thread types (metric, self tapping screws, etc.) and pitches.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications:</h2>
            <p>
              Used in industries like fastener manufacturing, automotive, aerospace, and construction to produce high-strength threaded components such as bolts, screws, and threaded rods.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};
export default ThreadRollingMachinePage;
