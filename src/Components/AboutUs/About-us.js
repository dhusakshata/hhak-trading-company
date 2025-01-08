import React from 'react';
import './aboutus.css'; // CSS for styling the page
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const AboutUs = () => {
  return (
    <div className='About-section'>
        <Breadcrumb currentPage="About-us" />
        <div className='about-heading'>
           <h1> 
              ABOUT US 
          </h1>
          </div>
        <div className="about-container">
      
         
          <span><i>Since 2016, Delivering Quality and Efficiency in Every Machine...</i></span>
          <p>
              At <strong>Hhak Trading Company</strong>, we understand that your success is our success. We are committed to providing exceptional customer service throughout the entire process, from initial consultation to machine installation and ongoing support. Our team of experts is always available to answer your questions, address your concerns, and ensure you have everything you need to achieve your business goals.
          </p>

          <p>
              We source our machines from trusted manufacturers around the world, ensuring that you receive only the highest quality equipment. We meticulously inspect each machine before delivery to guarantee its performance and reliability. Our commitment to quality extends beyond the initial sale, as we provide comprehensive after-sales support and maintenance services to keep your machines running smoothly for years to come.
          </p>

          <p>
              <strong>Hhak Trading Company</strong> has grown steadily since our establishment in 2016, consistently expanding our inventory and services to meet the evolving demands of the fastener industry.
          </p>
      </div>
    </div>
  );
};

export default AboutUs;
