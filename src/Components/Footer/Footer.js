import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import BackToTopButton from '../BacktoTop/backtotop.js';

// Import React Icons
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaHome, FaInfo, FaShoppingCart, FaAddressBook, FaLink,FaUserCircle } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5><FaLink className="icon" />Quick Links</h5>
            <ul>
              <li><Link to="/"> Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/products"> Products</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <div className="social-media">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter className="social-icons" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin className="social-icons" />
              </a>
            </div>
          </Col>
          <Col md={4} className="footer-col">
            <h5>   <FaUserCircle className="icon" /> Contact Us</h5>
            <div className="contact-address">
            <div className="address-item">
        <h5> REG. OFFICE: 
         </h5>
        <p>
          Plot No. 11A/1, Gat No. 120,<br />
          Village Karodi, Bombay Highway,<br />
          Tq. Dist. Aurangabad – 431136.
        </p>
       
      </div>

      <div className="address-item">
        <h5> WAREHOUSE:</h5>
        <p>
          Plot No. 1, Gat No.48, Near Bharat<br />
          Weight Bridge, Talawade-Chikhali<br />
          Road, Talawade, Pune – 411062.
        </p>
        
      </div>
  <div className="Contact-info">
  <a href="tel:+91 9922058133" className="Contact-item">
    <FaPhoneAlt className="icon" /> +91 9922058133
  </a>
  <a href="mailto:info.hhak@gmail.com" className="Contact-item">
    <FaEnvelope className="icon" /> info.hhak@gmail.com
  </a>
</div>

</div>     
          </Col>
          <Col md={4} className="footer-col">
            <h5>Find HHAK Trading Company Here. . . .</h5>
            <div className="map-container">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3779.8547318425663!2d73.79609847489597!3d18.670513664577477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.1%2CGat%20No.48%2C%20Near%20Bharat%20Weight%20Bridge%2C%20Talawade-Chikhali%20Road%2CTalwade%2C%20Pune%20-%20411%20062!5e0!3m2!1sen!2sin!4v1735808820617!5m2!1sen!2sin"
            title="Warehouse Map"
            loading="lazy"
            style={{ border: '0', width: '100%', height: '100%' }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center">
            <p style={{textAlign:"center",color:"white"}}>&copy; {new Date().getFullYear()}  HHAK – All rights reserved | Designed By <a href="https://bitshine.in/" className="bitshine-link" target="_blank" rel="noopener noreferrer">Bitshine Infotech</a></p> 
          </Col>
        </Row>
      </Container>
      <Container> <BackToTopButton/></Container>
    </footer>
  );
};

export default Footer;
