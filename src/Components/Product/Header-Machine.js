

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./boltformer.css";
import productImage from '../../Images/header-machine/Headermachine.png';

import { Link } from "react-router-dom"; 

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

const ProductPage = () => {
  useEffect(() => {
         AOS.init({ duration: 1000, once: true });
       }, []);
    
  const siliconproducts = [
    {
      id: 1,
     
      image: productImage,
      
    },
    {
      id: 2,
      
      image: productImage,
    
    },
    
  ];
  const features = [
    {
      title: "Cold Forging",
      points: [
        "Shapes metal at room temperature, maintaining material strength."
      ]
    },
    {
      title: "High Speed",
      points: [
        "Produces fasteners quickly for mass production."
      ]
    },
    {
      title: "Precision Forming",
      points: [
        "Ensures uniform shapes and sizes for quality control."
      ]
    },
    {
      title: "One Die Two Blow Option",
      points: [
        "Allows two forming operations in a single cycle."
      ]
    }
  ];
  
  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Header-Machine" isSubProduct={true} />
  <section className="siliconhero headermachine-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               COLD Heading Machine
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>Get Ahead with Our Cold Heading Machine.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section header-machine-info">
       
      </section>


    <section>
   <article  className="Product-article header-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div className="products-images" style={{marginLeft:"-70px",}}>
              <img src={productImage} alt={product.title} className="bolt-image" />
              </div>
             
              
            </div>
          </div>
        ))}
	</figure>

	
	<figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content" >
             
              
            <div style={{marginLeft:"20px",marginTop:"-20px"}}>
            <p style={{marginLeft:"20px",}}>A header machine is a specialized cold-forging machine used to produce fasteners like bolts, screws, and rivets by shaping metal wire into heads and shanks. It is commonly used in industries requiring large quantities of precision fasteners.
            </p>
                <p style={{marginLeft:"20px",marginTop:"30px"}}>
                  
                  {/* <h4 style={{fontSize:"20px"}}>
                    Key Features and Benefits:</h4>
                    <ul>
  <li><strong>Cold Forging:</strong> Shapes metal at room temperature, maintaining material strength.</li>
  <li><strong>High Speed:</strong> Produces fasteners quickly for mass production.</li>
  <li><strong>Precision Forming:</strong> Ensures uniform shapes and sizes for quality control.</li>
  <li><strong>One Die Two Blow Option:</strong> Allows two forming operations in a single cycle.</li>
</ul> */}


            <h4 style={{fontSize:"20px"}}>Applications:</h4>
            <ul>
  <li><strong>Fastener Production:</strong> For screws, rivets, and pins.</li>
  <li><strong>Automotive and Aerospace:</strong> Producing high-strength fasteners.</li>
  <li><strong>Construction and Electronics:</strong> Creating durable components for assemblies.</li>
</ul>


          </p>
            </div>
            </div>




            
          </div>
        ))}
	</figure>
  
  <figure className="silicon-card">
	{siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section">
            <div className="product-content bolty" >
            <div className="bolt-content">
            

<section className="features-section">
<h4 style={{textAlign:"center",padding:"20px",fontSize:"20px"
  }}>
   Key Features and Benefits:
  </h4>
      {features.map((features, index) => (
        <div className="feature-row" key={index} data-aos="fade-right" data-aos-delay={index * 100}>
          <div className="feature-title">{features.title}</div>
          <ul className="feature-points">
            {features.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

       
            </div>
            </div>

          </div>
        ))}
	</figure>
	
	
</article>
    </section>
    {/* <section className="background-section">
  <div className="background-overlay">
    
  </div>
</section> */}


 
    </div>
  );
};

export default ProductPage;
