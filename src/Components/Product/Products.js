


import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

import image1 from "../../Images/bolt-former/bolt-former-removebg-preview.png";
import image2 from "../../Images/header-machine/Headermachine.png";
import image3 from "../../Images/nut-former/nut_former.png";
import image4 from "../../Images/part-former/Part-former.png";
import image5 from "../../Images/sloting-machine/SLOTTING-MACHINE-removebg-preview(1).png";
import image6 from "../../Images/thread-rolling-machine/Thread-rolling.png";
import image7 from "../../Images/vt-cut/BT.png";
import image8 from "../../Images/washer-assembly/washer-assembly1.png";

const products = [
  {
    id: 1,
    name: "Bolt Former",
    image: image1,
    link: "/bolt-former",
    
  },
  {
    id: 2,
    name: "Nut Former",
    image: image3,
    link: "/nut-former",
  },
  {
    id: 3,
    name: "Part Former",
    image: image4,
    link: "/part-former",
  },
  {
    id: 4,
    name: "Header Machine",
    image: image2,
    link: "/header-machine",
  },
  {
    id: 5,
    name: "Slotting Machine",
    image: image5,
    link: "/Slotting-machine",
  },
  {
    id: 6,
    name: "Thread Rolling Machine",
    image: image6,
    link: "/Threat-rolling-machine",
  },
  {
    id: 7,
    name: "BT Cutting Machine",
    image: image7,
    link: "/VT-cut-machine",
  },
  {
    id: 8,
    name: "Washer Assembly Machine",
    image: image8,
    link: "/Washer-Assembly",
  },
];

const ProductPage = () => {
  return (

    <div className="product-page-container">
      <Breadcrumb currentPage="Products" />
      <section className=" Product-hero" >
        <div className="Product-hero-content">
          {/* Left Section */}
         
          <div className="Product-hero-heading">
          <div className="Product-vertical-line">
            </div>

           <div className="product-herodata">
           <h1 style={{textAlign:"left",marginLeft:"120px"}}>
           HIGH PERFORMANCE PRODUCTS
            </h1>
           <h2  style={{textAlign:"left",margin:"20px", marginLeft:"100px" ,fontWeight:"bold",fontSize:"24px"}}>Flexible Solutions. Lasting Performance.
            </h2>
            
 


           </div>
          </div>

          
        </div>
      </section>


    
      <div className="product-page">
        <div className="product-list">
          <h4>+ PRODUCTS LIST</h4>
          <div className="product-grid">
            {products.map((product) => (
              <Link to={product.link} key={product.id} className="product-card">
                <div className="product-card-inner">
                  {/* Front Side */}
                  <div className="product-card-front">
                    <img src={product.image} alt={product.name} />
                 
                  </div>
                  {/* Back Side */}
                  <div className="product-card-back">
                    <div className="product-back-info">
                      Learn more about....
                     <div className="Back-name"> {product.name}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

<section className="product-end-section"></section>

    </div>
  );
};

export default ProductPage;
