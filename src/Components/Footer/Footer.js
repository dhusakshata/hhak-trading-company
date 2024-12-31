// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // For layout
import { Link } from 'react-router-dom'; // For navigation
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Contact Us</h5>
            <p>Email: info@hhaktrading.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="social-media">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a> */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
            </div>
          </Col>

          {/* Map Section */}
          <Col md={4} className="footer-col">
            <h5>Find Us</h5>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.146983604372!2d144.963158!3d-37.813629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d456f2f3d2f%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1638237391583!5m2!1sen!2sus"
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} HHAK Trading Machine. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
