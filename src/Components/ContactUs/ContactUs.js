import React from 'react';
import './ContactUs.css';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
  <Breadcrumb currentPage="Contact-Us" />
   <h1 className="contact-heading">Contact Us</h1>
   <div className='contact-details'>
    
   <div  className='left-contact-section'>
      <div className="form-section">
          <form>
            <div className="form-group">
              <label htmlFor="company">Name of Company *</label>
              <input type="text" id="company" placeholder="E.g. John" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="E.g. john@doe.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" placeholder="E.g. +1 3004005000" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" maxLength="180" placeholder="Enter your message..." required></textarea>
            </div>
            
            <button className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      
    <div className='right-contact-section'>
    <div className="contact-boxes">
        {/* Office Box */}
        <div className="contact-box">
          <div className="box-inner">
            <div className="box-front">
              <h2>Reg. Office Address</h2>
            </div>
            <div className="box-back">
             
              <p>Plot No.11A/1,Gat No.120,
             Village Karodi,Bombay Highway ,
              Tq.Dist. Aurangabad - 431 136 </p>
            </div>
          </div>
        </div>

        {/* Warehouse Box */}
        <div className="contact-box">
          <div className="box-inner">
            <div className="box-front warefront">
              <h2>Warehouse Address</h2>
            </div>
            <div className="box-back wareback">
            <p style={{color:"black"}}>Plot No.1,Gat No.48,
              Near Bharat Weight Bridge,
              Talawade-Chikhali Road,Talwade, 
            Pune - 411 062</p>
            </div>
          </div>
        </div>
      </div>

      
      {/* Maps Section */}
      <div className="maps-section">
        <h2><i>The HHAK at Your Fingertips . . . </i>
       </h2>
        <div className="maps-container">
          {/* Reg. Office Map */}
          <div className="map circle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3408509795686!2d75.97098997960751!3d22.900795525780854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396268404cba037f%3A0xbebb1b188659a18!2sMumbai%20-%20Agra%20Rd!5e0!3m2!1sen!2sin!4v1735894501229!5m2!1sen!2sin"
            title="Register Office Map"
            loading="lazy"
            style={{ border: '0', width: '100%', height: '100%' }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
         
          </div>

          {/* Warehouse Map */}
          <div className="map circle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3779.8547318425663!2d73.79609847489597!3d18.670513664577477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.1%2CGat%20No.48%2C%20Near%20Bharat%20Weight%20Bridge%2C%20Talawade-Chikhali%20Road%2CTalwade%2C%20Pune%20-%20411%20062!5e0!3m2!1sen!2sin!4v1735808820617!5m2!1sen!2sin"
            title="Warehouse Map"
            loading="lazy"
            style={{ border: '0', width: '100%', height: '100%' }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
   </div>
    </div>
  );
};

export default ContactUs;
