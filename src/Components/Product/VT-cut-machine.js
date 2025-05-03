

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./boltformer.css";
import productImage from '../../Images/vt-cut/BT.png';
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
      title: "High Precision",
      points: [
        "Ensures clean and accurate cuts for complex designs."
      ]
    },
    {
      title: "Versatile Material Handling",
      points: [
        "Suitable for cutting metals or other materials depending on the application."
      ]
    }
  ];
  
  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero BtCut-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               BT Cut Machine
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>BT Cut Machine: The Edge of Cutting Technology.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section">
       
      </section>


    <section>
   <article  className="Product-article bt-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
              <img src={productImage} alt={product.title} className="BT-image" style={{width:"600px"}}/>
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
            <p style={{marginLeft:"20px",}}> A BT Cut Machine is a specialized cutting machine designed for precise and efficient cutting of materials, often used in manufacturing and fabrication industries. It is typically associated with processes requiring high accuracy, such as metal cutting or component shaping.
            </p>
                <p style={{marginLeft:"20px",marginTop:"30px"}}>
                  
                  {/* <h4 style={{fontSize:"20px"}}>
                    Key Features and Benefits:</h4>
                    <ul>

                    <li><strong>High Precision:</strong> Ensures clean and accurate cuts for complex designs.</li>

                    <li><strong>Versatile Material Handling:</strong> Suitable for cutting metals or other materials depending on the application.</li>
  
</ul> */}


            <h4 style={{fontSize:"20px"}}>Applications:</h4>
            
            <p>
            Commonly used in industries such as automotive, aerospace, fabrication, and construction for precise cutting of metal and other materials for complex parts and components.
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