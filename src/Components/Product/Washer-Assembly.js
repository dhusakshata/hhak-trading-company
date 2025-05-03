

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./boltformer.css";
import productImage from '../../Images/washer-assembly/washer-assembly1.png';
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
      title: "Automation",
      points: [
        "Handles the assembly process without manual intervention."
      ]
    },
    {
      title: "High Speed",
      points: [
        "Assembles large quantities of washers efficiently."
      ]
    },
    {
      title: "Precision Placement",
      points: [
        "Ensures washers are securely and accurately positioned on fasteners."
      ]
    },
    {
      title: "Customization",
      points: [
        "Adjustable for different sizes and types of washers and fasteners."
      ]
    }
  ];
  
  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero WasherAssembly-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               Washer Assembly Machine
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>
               Washer Assembly: Securely Fastened.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section washerAssembly-info">
       
      </section>


    <section>
   <article  className="Product-article washer-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
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
            <p style={{marginLeft:"20px",}}>   A washer assembly machine is a specialized automated system designed to assemble washers onto bolts, screws, or other components. It streamlines the process of combining these parts, ensuring precision and high production efficiency.
            </p>
                <p style={{marginLeft:"20px",marginTop:"30px"}}>
                  
                  {/* <h4 style={{fontSize:"20px"}}>
                    Key Features and Benefits:</h4>
                    <ul>
                    <li><strong>Automation:</strong> Handles the assembly process without manual intervention.</li>
                    <li><strong>High Speed:</strong> Assembles large quantities of washers efficiently.</li>
                    <li><strong>Precision Placement:</strong> Ensures washers are securely and accurately positioned on fasteners.</li>

                    <li><strong>Customization:</strong> Adjustable for different sizes and types of washers and fasteners.</li>
  
</ul> */}


            <h4 style={{fontSize:"20px"}}>Applications:</h4>
            
            <p>
            Commonly used in industries like automotive, electronics, construction, and machinery. Washer assembly machines are essential for efficiently assembling washers onto fasteners like bolts and screws in high volumes.
            </p>

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