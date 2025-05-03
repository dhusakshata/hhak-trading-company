
import React, { useState } from "react";
import "./header.css";
import styled from "styled-components";
import { FaSearch, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logos from "../../Images/Sheetal_Rubber_Products__P__Ltd.__1__48__2_-removebg-preview.png";
import { useTranslation } from "react-i18next";
import brochure from "../../pdf/HHAK-BROCHURE-1-9-1.pdf";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BreakingNews from "./breaking-news";


import {
  FaPhoneAlt,
 FaEnvelope,
 
} from 'react-icons/fa';

import "./header.css";

// Styled components for the header
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  top: 10px;
  background-color: #000 !important;
  color: white;
  z-index: 1000;
    
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
   padding: 40px 20px 0 20px;
  background-color: #222;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 15px;


    @media (max-width: 768px) {
    display: flex; /* Show on smaller screens */
    flex-direction:column;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #444;
  padding: 8px 20px;
  gap: 10px;
  position: relative;
  z-index: 1010;
  font-size:14px;

  @media (max-width: 768px) {
    display: none; /* Show on smaller screens */
  }
`;

const NavItem = styled.div`
  position: relative;
  padding: 10px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  z-index: 1010;
  &:hover {
    background-color: #555;
  }
`;

const DropdownItems = styled.div`
  font-size: 14px;
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  top: 100%;
  left: 0;
  width: 250px;
    z-index: 1010;
  z-index: 1000000;

  ${NavItem}:hover & {
    display: flex;
    width: 300px;
  }

  .dropdown-item {
    padding: 8px 10px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
    cursor: pointer;
    color: white !important;
    text-decoration: none;
      z-index: 1010;
    background-color: transparent;  /* Default background */
    transition: background-color 0.3s ease;  /* Smooth transition for background color */
  }

  .dropdown-item:hover {
    background-color: #555 !important;  /* Change to your desired hover color */
    
  }
`;

//Facility dropdowns
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
    z-index: 1010;
`;

const DropdownButton = styled.div`
  padding: 10px 15px;
  background-color: #1e202c;
  color: white;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 101;
  &:hover {
    background-color: #555;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8) !important;
 
  z-index: 1010;
  padding: 10px;
  width: 250px;

`;

const DropdownItem = styled.div`
  position: relative;
  padding: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
 z-index: 1010;
  &:hover {
    background-color: #555;
  }
`;

const SubDropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 100%;
 background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1010;
  padding: 10px;
  width: 250px;
  
`;
//


const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  font-size: 20px;
  color: white; 
    z-index: 10000;
`;


const SearchInputWrapper = styled.div`
  display: ${({ showSearch }) => (showSearch ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 150px; 
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  height: calc(100vh - 70px); /* Subtract the navbar height from the full viewport height */
  z-index: 100;
  transform: translateY(${({ showSearch }) => (showSearch ? "0" : "-100%")});
  transition: transform 0.5s ease;
`;


const SearchInput = styled.input`
  width: 50%;
  padding: 5px;

  margin-left: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 40px;
  color: white;
  z-index: 1010;
  margin-top:-200px;
`;

const SearchButton = styled.button`
  padding: 10px 10px;
  margin-left: 10px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
font-size:16px;
  z-index: 101;
   margin-top:-200px;
  &:hover {
    background-color: #555;
  }
`;
const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 30px;
  right: 60px;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;
const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

// Sidebar components
const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  display: block;

  &:hover {
    background-color: #444;
  }
`;

const SidebarNavItem = styled.div`
  padding: 10px;
`;

const DropdownToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #444;
  }
`;

const SidebarDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding-left: 20px;
`;

const SidebarSubDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding-left: 20px;
`;
// Sidebar Components (Hamburger and Sidebar)
const HamburgerIcon = styled(FaBars)`
  cursor: pointer;
  font-size: 24px;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseSidebarIcon = styled(FaTimes)`
  cursor: pointer;
  font-size: 24px;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #222;
  z-index: 100;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  padding-top: 60px;

  @media (min-width: 769px) {
    display: none; /* Hide sidebar on large screens */
  }
`;

//For polylanguage




function Header() {

  const { t } = useTranslation();


  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const [activeFacility, setActiveFacility] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
    setSearchQuery("");
    setSearchError("");
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSearchError("");
  };
// Search functionality
const data = [
  { id: 1, name: "Home,home", link: "/" },
  { id: 2, name: "Products,product", link: "/Products" },
  { id: 5, name: "About Us,about", link: "/about-us" },
  { id: 6, name: "Contact Us,contact", link: "/contact-us" },

  { id: 7, name: "Bolt Former,Bolt", link: "/bolt-former" },
  { id: 8, name: "cold Heading Machine,Header", link: "/header-machine" },
  { id: 9, name: "Nut Former,Nut", link: "/nut-former" },
  { id: 10, name: "Part Former,Part", link: "/part-former" },
  { id: 11, name: "Slotting Machine,Slotting", link: "/slotting-machine" },
  { id: 12, name: "Thread Rolling Machine,Thread Rolling,Thread ", link: "/thread-rolling-machine" },
  { id: 13, name: "BT Cut Machine,BT Cut,BT ", link: "/vt-cut-machine" },
  { id: 14, name: "Washer Assembly , washer", link: "/washer-assembly" },
  { id: 15, name: "Alphine Tool", link: "/Alphine" },
];

  
  // performSearch function
  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchError("Please enter a search term.");
    } else {
      setSearchError("");
      const query = searchQuery.trim().toLowerCase();
  
      // Find the corresponding route from the data array
      const matchingItem = data.find(item => 
        item.name.toLowerCase().includes(query) // Check if the query matches part of the name
      );
  
      if (matchingItem) {
        // If an item is found, navigate to its link
        navigate(matchingItem.link);
      } else {
        // Default behavior: search results page
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
  
      setShowSearch(false);
    }
  };
  
  
  //

  const handleHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleFacilityHover = (facility) => {
    setActiveFacility(facility);
  };

  const handleLinkClick = () => {
    setShowSearch(false);
    setActiveDropdown(null);
  };

  const products = [
    { name: "Bolt Former", link: "/Bolt-former" },
    { name: "Nut Former", link: "/Nut-former" },
    { name: "Part Former", link: "/Part-former" },
    { name: " Cold Heading Machine", link: "/Header-Machine" },
    { name: " Slotting Machine", link: "/Slotting-machine" },
    { name: "Thread Rolling Machine", link: "/Threat-rolling-machine" },
    { name: "BT-Cut-Machine", link: "/VT-cut-machine" },
    { name: "Washer Assembly Machine", link: "/Washer-Assembly" },
  
  ];
// // facility
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [activeSubDropdown, setActiveSubDropdown] = useState(null);

   const facilityItems = [
     {
       name: "MANUFACTURING FACILITIES",
       link: "/manufacturing",
       subItems: [
         { name: "Hot Feed, Cold Feed & Co-Extrusion Extruders", link: "/hot-cold-feed" },
         { name: "Auto clave vulcanizer", link: "/Auto-clave-vulcanizer" },
         { name: "Dispersion Kneader to Internal Mixer & Stock Blenders", link: "/Dispersion-kneader" },
         { name: "3 Roll Calendaring Machine", link: "/3-role-calendaring-machine" },
         { name: "Compression-transfer-moulding", link: "/Compression-transfer-molding" },
         { name: "Rubber Mixing Mills", link: "/Rubber-mixing-mill" },
         { name: "Knitting Machines", link: "/Knitting-machine" },
       ],
     },
     {
       name: "INHOUSE TESTING FACILITIES",
       link: "/inhouse",
       subItems: [
         { name: "Moving Die Rheometer", link: "/Moving-Die-Rheometer" },
{ name: "Burst Pressure Test Machine", link: "/Burst-pressure-test-machines" },
         { name: "Ozone Test Chamber", link: "/Ozone-test-chamber" },
       { name: "UTM-1", link: "/UTM-tensil" },
         { name: "Heating Ovens", link: "/Heating-oven" },
        { name: "Muffle Furnace", link: "/Muffle-furnance" },
       ],
    },
   ];


  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  const toggleSubDropdown = (name) => {
    setActiveSubDropdown((prev) => (prev === name ? null : name));
  };
  return (
    <>
    <BreakingNews />
    <HeaderContainer>
  
      <TopSection style={{ backgroundColor: "black" }}>
      
        <Logo><img 
          src={Logos} 
          alt="Logo" 
          style={{ height: "70px", marginRight: "10px" }} 
        />
        </Logo>
        <ContactInfo>
          <span> <a href="tel: +91 9922058133 " className="Contact-item">
              <FaPhoneAlt className="icon" />+91 9922058133
             </a></span>
          <span>
            <a href="mailto:info.hhak@gmail.com" className="Contact-item">
              <FaEnvelope className="icon" /> info.hhak@gmail.com
             </a></span>
        
             <button className="download-btn "><a href={brochure} download="HHAK_Trading.pdf" style={{textDecoration:"none",color:"black"}} className="download-link">
            <i className="fas fa-download"></i> Download Brochure
          </a></button>
          
          <Link to="/Exhibition-page" className="download-btn exhibition">
  EXHIBITIONS
</Link>


        </ContactInfo>  
      </TopSection>
      <NavBar style={{ backgroundColor: "#1e202c", borderTop: "1px solid gray" }}>
        <NavItem>
          <Link to="/" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>   {t("home")}</Link>
        </NavItem>
        <NavItem>
          <Link to="/about-us" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>   {t("about")}</Link>
        </NavItem>
        <NavItem>
          <Link to="/Alphine" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>   {t("Alpine-Tool")}</Link>
        </NavItem>

        <NavItem
  onMouseEnter={() => handleHover("products")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <Link
    to="/Products"
    style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
  >
    PRODUCTS <FaChevronDown style={{ fontSize: "15px", marginLeft: "5px" }} />
  </Link>
  {activeDropdown === "products" && (
    <DropdownItems className="Product-dropdown">
      {products.map((product, index) => (
        <div
          key={index}
          className="dropdown-item"
        >
          <Link
            to={product.link}
            onClick={handleLinkClick}
            style={{
              color: "inherit", // Inherit text color from parent
              textDecoration: "none",
              display: "block", // Ensures full area is clickable
            }}
          >
            {product.name}
          </Link>
        </div>
      ))}
    </DropdownItems>
  )}
</NavItem>




{/* <DropdownContainer
      onMouseLeave={() => {
        setIsDropdownOpen(false);
        setActiveSubDropdown(null);
      }}
    >
      <DropdownButton onMouseEnter={() => setIsDropdownOpen(true)}>
        FACILITY <FaChevronDown />
      </DropdownButton>

      <DropdownMenu isOpen={isDropdownOpen}>
        {facilityItems.map((facility, index) => (
          <DropdownItem
            key={index}
            onMouseEnter={() => setActiveSubDropdown(facility.name)}
            onMouseLeave={() => setActiveSubDropdown(null)}
          >
            <Link to={facility.link} style={{ color: "white", textDecoration: "none" }}>
              {facility.name}
            </Link>

            <SubDropdownMenu isOpen={activeSubDropdown === facility.name}>
              {facility.subItems.map((subItem, idx) => (
                <DropdownItem key={idx}>
                  <Link to={subItem.link} style={{ color: "white", textDecoration: "none" }}>
                    {subItem.name}
                  </Link>
                </DropdownItem>
              ))}
            </SubDropdownMenu>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer> */}

        <NavItem>
          <Link to="/career" style={{ color: 'white', textDecoration: 'none', fontWeight: "bold" }}>Career</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact-us" style={{ color: 'white', fontWeight: "bold", textDecoration: 'none' }}>Contact</Link>
        </NavItem>

        <NavItem>
          <SearchIcon onClick={toggleSearchBar} />
        </NavItem>
      </NavBar>

      <SearchInputWrapper showSearch={showSearch}>
      <CloseButton onClick={toggleSearchBar}
      
      
      />
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <SearchButton onClick={performSearch}>Search</SearchButton>
        {searchError && <ErrorMessage>{searchError}</ErrorMessage>}
      </SearchInputWrapper>


      

      <HamburgerIcon onClick={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen}>
        <CloseSidebarIcon onClick={toggleSidebar} />
        <SidebarNavItem>
          <SidebarLink to="/" onClick={toggleSidebar}>Home</SidebarLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarLink to="/about-us" onClick={toggleSidebar}>About Us</SidebarLink>
        </SidebarNavItem>
        <SidebarNavItem>
  <DropdownToggle onClick={() => toggleDropdown("products")}>
    <SidebarLink to="/Products" onClick={toggleSidebar}>Products</SidebarLink>
    <FaChevronDown />
  </DropdownToggle>
  <SidebarDropdown isOpen={openDropdown === "products"}>
    {products.map((product, index) => (
      <SidebarLink
        key={index}
        to={product.link}
        onClick={toggleSidebar}
      >
        {product.name}
      </SidebarLink>
    ))}
  </SidebarDropdown>
</SidebarNavItem>

  
{/* <SidebarNavItem>
  <DropdownToggle onClick={() => toggleDropdown("facilities")}>
    <SidebarLink to="/facility" onClick={toggleSidebar}>
      Facility
    </SidebarLink>
    <FaChevronDown className={`icon ${openDropdown === "facilities" ? "rotate-180" : ""}`} />
  </DropdownToggle>


  <SidebarDropdown isOpen={openDropdown === "facilities"}>
    {facilityItems.map((facility, index) => (
      <div key={index} className="facility-item">
       
        <DropdownToggle onClick={() => toggleDropdown(facility.name)}>
          <SidebarLink to={facility.link} onClick={toggleSidebar}>
            {facility.name}
          </SidebarLink>
          <FaChevronDown
            className={`icon ${openDropdown === facility.name ? "rotate-180" : ""}`}
          />
        </DropdownToggle>

       
        <SidebarDropdown isOpen={openDropdown === facility.name}>
          {facility.subItems.map((subFacility, idx) => (
            <SidebarLink key={idx} to={subFacility.link} onClick={toggleSidebar} className="subitem">
              {subFacility.name}
            </SidebarLink>
          ))}
        </SidebarDropdown>
      </div>
    ))}
  </SidebarDropdown>
</SidebarNavItem> */}



        <SidebarNavItem>
          <SidebarLink to="/career" onClick={toggleSidebar}>Career</SidebarLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarLink to="/ContactUs" onClick={toggleSidebar}>Contact</SidebarLink>
        </SidebarNavItem>
      </Sidebar>
    </HeaderContainer>
    </>
  );
}

export default Header;

