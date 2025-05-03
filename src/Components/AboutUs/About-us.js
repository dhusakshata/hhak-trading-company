import React from 'react';
import './aboutus.css'; // CSS for styling the page
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const AboutUs = () => {
  return (
    <div className='About-section'>
        <Breadcrumb currentPage="About-us" />

        <section className="aboutus-hero">
      <div className="aboutoverlay">
        <h1>COMMITTED TO EXCELLENCE</h1>
        <p>Our Story, Your Success.</p>
      </div>
    </section>


        <section className="about-hero">
        <div className="about-hero-content">
          {/* Left Section */}
          {/* <div className="vertical-line" style={{height:"180px"}}></div>
          <div className="about-hero-heading">
            
            <h1>
              <span>COMMITTED TO EXCELLENCE</span>
            </h1>
            <h2>Our Story, Your Success.</h2>
            {/* <div className="scroll-down" onClick={handleScrollDown} >
                     <BsArrowDownCircle size={35} style={{marginTop:"20px"}}/>
                    </div> *
          </div> */}

          {/* Right Section */}
          <div className="about-hero-description">
            <h6 style={{ color: "#ffc107", fontSize:"18px" }}>
               
          <span><i>Since 2017, Delivering Quality and Efficiency in Every Machine...</i></span>
            </h6>

            <p style={{ color: "white", fontSize:"16px",marginLeft:"-10px",padding:"10px" }}>
            
              At <strong>Hhak Trading Company</strong>, we understand that your success is our success. We are committed to providing exceptional customer service throughout the entire process, from initial consultation to machine installation and ongoing support. Our team of experts is always available to answer your questions, address your concerns, and ensure you have everything you need to achieve your business goals.
          
            </p>
          
            <p style={{ color: "white", fontSize:"16px",marginLeft:"-10px",padding:"10px" }}>
          We source our machines from trusted manufacturers around the world, ensuring that you receive only the highest quality equipment. We meticulously inspect each machine before delivery to guarantee its performance and reliability. Our commitment to quality extends beyond the initial sale, as we provide comprehensive after-sales support and maintenance services to keep your machines running smoothly for years to come.
          </p>

       
         
          </div>
        </div>
      </section>

     
        <div className="about-container">
      
          <p>
              <strong>Hhak Trading Company</strong> has grown steadily since our establishment in 2017, consistently expanding our inventory and services to meet the evolving demands of the fastener industry.
          
          <b><i>Alpine Tool Tech</i></b> a division of HHAK Trading Company, specializes in manufacturing high-quality carbide and steel tools for the cold forging industry. With a focus on precision and durability, the company caters to a wide range of industrial needs, delivering reliable solutions for demanding applications.</p>
      </div>
      {/* <section className='imgs'></section> */}
    </div>
  );
};

export default AboutUs;
