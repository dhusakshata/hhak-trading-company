import React from 'react';
import './ProductPage.css';
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

 import productImage from '../../Images/bolt-former/bold-machine-removebg-preview(2).png';
// import product1Img1 from '../../Images/bolt-former/bold-machine-removebg-preview(2).png';
// import product1Img2 from '../../Images/bolt-former/bolt-former-removebg-preview.png';
// import product1Img3 from '../../Images/bolt-former/bolt-making-machine-1-removebg-preview.png';
// import product1Img4 from '../../Images/bolt-former/multi-station-bolt-former-machine-removebg-preview(1).png';

const BoltFormerPage = () => {
  return (
    <div className="subproduct-page-container"
    >
      <Breadcrumb currentPage="Bolt Former" isSubProduct={true} />
      <div className="subproduct-title-container">
        <h1 className="subproduct-title">Bolt Former</h1>
      </div>
      <div className="subproduct-content"   style={{
     padding:"85px",
        marginTop:'-60px'
        }}>
        <div className="subproduct-details">
          <p className="subproduct-description">
            The Bolt Former is a high-efficiency machine designed for manufacturing bolts with precision and durability. 
            It features advanced technology for multi-stage forming and ensures consistent production quality.
          </p>
          <div className="subproduct-features">
            <h2>Key Features</h2>
            <ul>
              <li><strong>High Speed:</strong> Produces bolts in large quantities quickly.</li>
              <li><strong>Precision Forming:</strong> Ensures consistent shapes and sizes.</li>
              <li><strong>Durability:</strong> Designed to handle tough metals like steel and alloy.</li>
              <li><strong>Multi-station Capability:</strong> Performs multiple forming operations in one cycle.</li>
            </ul>
          </div>
          <div className="subproduct-applications">
            <h2>Applications</h2>
            <p>
              Used in industries like automotive, construction, and aerospace to produce bolts for various applications.
            </p>
          </div>
        </div>
        <img 
  src={productImage} 
  alt="Bolt Former" 
  className="subproduct-image" 
  style={{
    width: '100%',
    height: '450px',
    objectFit: 'contain',
  marginTop:'-100px'
  
  }} 
/>

      </div>
    </div>
  );
};

export default BoltFormerPage;
