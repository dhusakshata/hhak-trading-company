import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <hr></hr><hr></hr>
      <h1>Contact Us</h1>
      <hr></hr><hr></hr>
      <div className="contact-boxes">
        {/* Office Box */}
        <div className="contact-box">
          <div className="box-inner">
            <div className="box-front">
              <h2>Reg. Office Address</h2>
            </div>
            <div className="box-back">
             
              <p>Plot No.11A/1,Gat No.120,</p>
              <p>Village Karodi,Bombay Highway ,</p>
              <p>Tq.Dist. Aurangabad - 431 136 </p>
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
            <p>Plot No.1,Gat No.48,</p>
              <p>Near Bharat Weight Bridge,</p>
              <p>Talawade-Chikhali Road,Talwade, </p>
            <p>Pune - 411 062</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
