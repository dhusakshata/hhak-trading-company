

import React, { useState, useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import brochure from "../../pdf/brocher.pdf";

// Navigation Data
const data = [
  { id: 1, name: "Home,home", link: "/" },
  { id: 2, name: "Products,product", link: "/Products" },
  { id: 5, name: "About Us,about", link: "/about-us" },
  { id: 6, name: "Contact Us,contact", link: "/contact-us" },
  { id: 7, name: "Bolt Former,Bolt", link: "/bolt-former" },
  { id: 8, name: "Header Machine,Header", link: "/header-machine" },
  { id: 9, name: "Nut Former,Nut", link: "/nut-former" },
  { id: 10, name: "Part Former,Part", link: "/part-former" },
  { id: 11, name: "Slotting Machine,Slotting", link: "/slotting-machine" },
  { id: 12, name: "Thread Rolling Machine,Thread Rolling,Thread ", link: "/thread-rolling-machine" },
  { id: 13, name: "VT Cut Machine,VT Cut,VT ", link: "/vt-cut-machine" },
  { id: 14, name: "Washer Assembly , washer", link: "/washer-assembly" },
];

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //Search bar ->
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Track if search is open
  const [searchInput, setSearchInput] = useState(""); // Store search query
  const [searchDisabled, setSearchDisabled] = useState(false); // Track if search input should be disabled
  const searchInputRef = useRef(null); // Ref for the search input to focus
  const navigate = useNavigate();
//<-
//Dropdown here->
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
//<-
  // Search functionality ->
  const handleSearch = () => {
    const query = searchInput.toLowerCase();
    const match = data.find((item) => item.name.toLowerCase().includes(query));
    if (match) {
      navigate(match.link);
    } else {
      alert("No results found.");
    }

    // Disable the search input after search
    setSearchDisabled(true);
    setIsSearchOpen(false); // Close search bar after search
  };

  const handleInputChange = (e) => setSearchInput(e.target.value);

  const handleSearchIconClick = () => {
    if (isSearchOpen) {
      // If search is already open, perform the search
      handleSearch();
    } else {
      // Otherwise, open the search bar and reset the state
      setIsSearchOpen(true);
      setSearchDisabled(false); // Enable search input again
      setSearchInput(""); // Clear the previous search query
      setTimeout(() => {
        // Focus the input once it's visible
        searchInputRef.current.focus();
      }, 100);
    }
  };

  const handleBlur = () => {
    // Close search bar when clicked outside (but only if input is empty)
    if (!searchInput) {
      setIsSearchOpen(false);
    }
  };
//<-
  return (
    <div className="header-section">
      {/* Main Header Section */}
      <div className="main-header">
        <div className="logo">
          <img src="/path-to-logo.png" alt="HHAK Trading Machine" className="logo-img" />
        </div>

        <div className="contact-info">
          <a href="mailto:sheetalrubber@gmail.com" className="email-button">
            <i className="fas fa-envelope"></i> info.hhak@gmail.com
          </a>
         
          <a href="tel:+91 9922058133"className="email-button" >
          <i className="fas fa-phone"></i>+91 9922058133
            </a>

          <button className="download-btn "><a href={brochure} download="HHAK_Trading.pdf" style={{textDecoration:"none",color:"black"}} className="download-link">
            <i className="fas fa-download"></i> Download Brochure
          </a></button>
          
          <button className="download-btn exibhision">EXHIBITIONS</button>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar expand="lg"className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>

              <nav
                className="products-items"
                style={{ display: "flex", position: "relative" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link
                  as={Link}
                  to="/Products"
                  className="products-link"
                  onClick={toggleDropdown}
                >
                  Products
                </Nav.Link>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Nav.Link as={Link} to="/Bolt-former" className="dropdown-item" onClick={closeDropdown}>
                      Bolt Former
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Nut-former" className="dropdown-item" onClick={closeDropdown}>
                      Nut Former
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Part-former" className="dropdown-item" onClick={closeDropdown}>
                      Part Former
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Header-Machine" className="dropdown-item" onClick={closeDropdown}>
                      Header Machine
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Slotting-machine" className="dropdown-item" onClick={closeDropdown}>
                      Slotting Machine
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Threat-rolling-machine" className="dropdown-item" onClick={closeDropdown}>
                      Thread Rolling Machine
                    </Nav.Link>
                    <Nav.Link as={Link} to="/VT-cut-machine" className="dropdown-item" onClick={closeDropdown}>
                      BT Cut Machine
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Washer-Assembly" className="dropdown-item" onClick={closeDropdown}>
                      Washer Assembly
                    </Nav.Link>
                  </div>
                )}
              </nav>

              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>

             
            </Nav>
          </Navbar.Collapse>
            {/* Search Icon and Input */}
            <div className="search-bar">
                {isSearchOpen ? (
                  <div style={{ display: "flex" }}>
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Go with hhak here..."
                      value={searchInput}
                      onChange={handleInputChange}
                      onBlur={handleBlur} // Close search input if clicked outside
                      disabled={searchDisabled} // Disable input after search
                    />
                    <button onClick={handleSearch} disabled={searchDisabled}>
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                ) : (
                  <button className="search-icon" onClick={handleSearchIconClick}>
                    <i className="fas fa-search"></i>
                  </button>
                )}
              </div>
        </Container>
        
      </Navbar>
    </div>
  );
};

export default NavigationBar;

