


import React from "react";

import "./boltformer.css";
import productImage from '../../Images/Thread_ROlling_for_Nut-removebg-preview.png';
import { Link } from "react-router-dom"; 

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

import businessImg from "../../Images/nuts-01.jpg";
import businessImg2 from "../../Images/threadrolling-nut.jpg";
const ProductPage = () => {
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
      title: "Cold Forming Process",
      points: [
        "Threads are formed through pressure, not cutting, maintaining material integrity."
      ]
    },
    {
      title: "Precision and Consistency",
      points: [
        "Produces accurate and uniform threads."
      ]
    },
    {
      title: "High Efficiency",
      points: [
        "Suitable for mass production of threaded components."
      ]
    },
    {
      title: "Versatility",
      points: [
        "Can create different thread types (metric, self tapping screws, etc.) and pitches."
      ]
    }
  ];
  
  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero thread-rolling-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               Thread Rolling Machine
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>
               Thread Rolling Machine: Strength Rolled In.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section threadrolling-info">
       
      </section>


    <section>
   <article  className="Product-article thread-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
              <img src={productImage} alt={product.title} className="bolt-image" style={{width:"600px"}}/>
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
            <p style={{marginLeft:"20px",}}>A thread rolling machine is specialized equipment used to create threads on fasteners such as bolts, screws, and studs. It forms threads by rolling a blank (unthreaded part) between dies, without cutting the material, which increases the strength and durability of the threads.
            </p>
                <p style={{marginLeft:"20px",marginTop:"30px"}}>
                  
                 


            <h4 style={{fontSize:"20px"}}>Applications:</h4>
            
            <p>
            Commonly used for creating keyways and grooves in mechanical components like gears, pulleys, and shafts. Also utilized in industries like automotive, aerospace, and machinery for producing precise vertical slots and intricate parts.
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
  
  {/* <figure className="silicon-card">
  <section className="product-kinds-section">
   
      <div className="content-container">
      <h3 style={{color:"black",textAlign:"center"}}>NUMBER OF PRODUCT KINDS</h3>
        <div className="text-content">
         
          <ul>
            <li><strong>Lock nuts:</strong> DIN 980, 982, 985, 6924, 6925, 6926, 6927</li>
            <li><strong>Square weld nuts:</strong> DIN 928, 929</li>
            <li><strong>Square nuts:</strong> DIN 557</li>
            <li><strong>Square low nuts:</strong> DIN 562</li>
            <li><strong>Hex low castle nuts:</strong> DIN 937, 979</li>
            <li><strong>Hex low nuts:</strong> DIN 439, 936</li>
            <li><strong>Hex Nuts:</strong> DIN 555, 934, 971, 2510, 6915</li>
            <li><strong>Hexagon castle nuts:</strong> DIN 935</li>
            <li><strong>Hexagon nuts with flange:</strong> DIN 6923</li>
          </ul>
          <div className="image-container"> 
        <img src={businessImg} alt="Workpiece Gripper" style={{width:"80%"}} />
    
        </div>
      </div>
        </div>
       
    </section>
	</figure> */}

</article>
    </section>

  


 
    </div>
  );
};

export default ProductPage;