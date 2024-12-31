// // src/components/NavigationBar.js
// import React from 'react';
// import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // For navigation
// import './header.css';

// const NavigationBar = () => {
//   return (
//     <div className="header-section">
//       {/* Main Header Section */}
//       <div className="main-header">
//         {/* Left: Logo */}
//         <div className="logo">
//           <img src="/path-to-logo.png" alt="HHAK Trading Machine" className="logo-img" />
//         </div>
//         {/* Right: Contact Info and Download Option */}
//         <div className="contact-info">
//         <a href="mailto:sheetalrubber@gmail.com" className="email-button">
//                  Email: info@hhaktrading.com
//               </a>
         
//           <span className="phone">Phone: +123 456 7890</span>
//           <Button variant="outline-light" className="download-btn">
//             <a href="/path-to-your-file" download="HHAK_Trading_Info.pdf" className="download-link">Download Attachment</a>
//           </Button>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <Navbar expand="lg">
//         <Container>
        
//           <Navbar.Toggle aria-controls="navbar-nav" />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Link as={Link} to="/">Home</Nav.Link>
//               <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>

//              <nav className='Product-dropdown' style={{display:"flex", flexDirection:"row"}}>
//              <Nav.Link as={Link} to="/Products">Products</Nav.Link> {/* This is the main products link */}

// {/* Products Dropdown */}
// <NavDropdown  as={Link} to="/Products"  id="dropdown-menu">
// <NavDropdown.Item as={Link} to="/Bolt-former" id="dropdown-menu">Bolt-former</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/Header-Machine" id="dropdown-menu">Header-Machine</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/Nut-former" id="dropdown-menu">Nut-former</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/Part-former" id="dropdown-menu">Part-former</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/Slotting-machine" id="dropdown-menu">Slotting-machine</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/Threat-rolling-machine" id="dropdown-menu">Threat-rolling-machine</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/VT-cut-machine" id="dropdown-menu">VT-cut-machine</NavDropdown.Item>
// <NavDropdown.Item as={Link} to="/Washer-Assembly" id="dropdown-menu">Washer-Assembly</NavDropdown.Item>
// </NavDropdown>
//              </nav>

//               <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>

              
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default NavigationBar; 

// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For navigation
import './header.css';
import brochure from '../../pdf/HHAK_Trading_Info.pdf'; // Import your PDF file

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
            Email: info.hhak@gmail.com
          </a>
          <span className="phone">Phone: +9922058133</span>
          <Button  className="download-btn">
          <a href={brochure} download="HHAK_Trading_Info.pdf" className="download-link">
              Get Brochure
            </a>
          </Button>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>

              {/* Products Dropdown */}
              <NavDropdown
                title="Products"
                id="products-dropdown"
                className="product-dropdown" // Custom class for styling
              >
                <NavDropdown.Item as={Link} to="/Bolt-former">Bolt Former</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Header-Machine">Header Machine</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Nut-former">Nut Former</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Part-former">Part Former</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Slotting-machine">Slotting Machine</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Threat-rolling-machine">Thread Rolling Machine</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/VT-cut-machine">VT Cut Machine</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Washer-Assembly">Washer Assembly</NavDropdown.Item>
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
