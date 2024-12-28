// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For navigation
import './header.css';

const NavigationBar = () => {
  return (
    <div className="header-section">
      {/* Main Header Section */}
      <div className="main-header">
        {/* Left: Logo */}
        <div className="logo">
          <img src="/path-to-logo.png" alt="HHAK Trading Machine" className="logo-img" />
        </div>
        {/* Right: Contact Info and Download Option */}
        <div className="contact-info">
        <a href="mailto:sheetalrubber@gmail.com" className="email-button">
                 Email: info@hhaktrading.com
              </a>
         
          <span className="phone">Phone: +123 456 7890</span>
          <Button  className="download-btn">
            <a href="/path-to-your-file" download="HHAK_Trading_Info.pdf" className="download-link">Download Attachment</a>
          </Button>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar expand="lg">
        <Container>
        
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>

              {/* Products Dropdown */}
              <NavDropdown title="Products" id="products-dropdown">
                <NavDropdown.Item as={Link} to="/products/product1">Product 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/product2">Product 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/product3">Product 3</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar; 