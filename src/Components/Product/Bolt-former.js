

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./boltformer.css";
import productImage from '../../Images/bolt-former/bolt-former-removebg-preview.png';
import img1 from "../../Images/boltformer11.jpg";
import img2 from "../../Images/boltformer12.jpg";
import img3 from "../../Images/boltformer13.jpg";
import img4 from "../../Images/boltformer14.jpg";
import img5 from "../../Images/boltformer15.jpg";
import img6 from "../../Images/boltformer16.jpg";
import img7 from "../../Images/boltformer17.jpg";
import img8 from "../../Images/boltformer18.jpg";

import img9 from "../../Images/workshop-bolt.jpg";
import img10 from "../../Images/workshop-bolt-2.jpg";
import img11 from "../../Images/workshop-bolt-3.jpg";
import img12 from "../../Images/workshop-bolt-4.jpg";

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";



const features = [
  {
    title: "High Speed :",
    points: [
      "Produces bolts in large quantities quickly."
    ]
  },
  {
    title: "Precision Forming :",
    points: [
      "Ensures consistent shapes and sizes."
    ]
  },
  {
    title: "Durability :",
    points: [
      "Designed to handle tough metals like steel and alloy."
    ]
  },
  {
    title: "Multi-station Capability :",
    points: [
      "Performs multiple forming operations in one cycle."
    ]
  }
];

const ProductPage = () => {

   useEffect(() => {
       AOS.init({ duration: 1000, once: true });
     }, []);
  
  const images = [
    { src: img1, description: "The frame provides absolute stability and a straight forward process of heading. Made of cast iron with nodular graphite grade JIS FCD 55, which ensures its durability.Holders of the matrix are made of stainless steel grade FCD 70 are arranged parallel to each other and can be adjusted independently." },
    { src: img2, description: "The rollers provide blanks feeding for small size bolts heading." },
    { src: img3, description: "Hand wheel control allows setting the length of the KO" },
    { src: img4, description: "Pneumatic type of SACMA blank feeding provides high-speed and stable process of heading." },
    { src: img5, description: "The mechanism of power failure by S-CAM system is controlled by crankshaft horizontally." },
    { src: img6, description: "Transmitting clicks provide a secure blanks grip" },
    { src: img7, description: "Stop of bolts cold heading equipment occurs automatically in the case of:",
      points: [
        "fault,",
        "the need to clean the blank."
      ]
     },
    { src: img8, description: "Pneumatic clutch and brake system maintain flywheel in torsion movement." },
  ];

  const siliconproducts = [
    {
      id: 1,
     
      image: productImage,
      description: "Silicone-Polyester hoses </b>are designed specifically for use in demanding radiator, heater, and coolant transfer applications. Constructed from high-quality silicone reinforced with durable polyester fabric, these hoses offer excellent resilience and reliable performance in harsh conditions. This combination of versatility, durability, and adaptability to extreme environments makes Silicone-Polyester hoses a premium choice for automotive, industrial, and other applications requiring reliable coolant and heat transfer solutions.",
    },
    {
      id: 2,
      
      image: productImage,
    
    },
    
  ];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem" }}>
              BOLT FORMER
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>Bolt Former: Where Strength Takes Shape.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section boltformerinfo">
       
      </section>


    <section>
   <article  className="Product-article bolt-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div className="products-images">
              <img src={productImage} alt={product.title} className="bolt-image1" />
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
            <p>The Bolt Former is a high-efficiency machine designed for manufacturing bolts with precision and durability. It features advanced technology for multi-stage forming and ensures consistent production quality.
            </p>


            <h4 style={{fontSize:"18px",marginTop:"20px"}}>Applications:</h4>
         <ul>
          <li>
          Used in industries like automotive, construction, and aerospace to
          produce bolts for various applications.
          </li>
         </ul>
       
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

{/* 
    <section className="bolt-grid">
      {images.map((item, index) => (
        <div key={index} className="grid-item">
          <img src={item.src} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.points && (
            <ul className="bullet-list">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>

   <section className="slotting-dubblecutter-info">
  <h3 className="heading-with-line">
    Workshop with equipment for the production of bolts by the method of cold heading
  </h3>
  <div className="image-container" >
  <img src={img9} alt="Control Panel 1"  style={{height:"90vh"}}/>
     
     <p>4-Die 4 Blow Cold heading Bolt Former RBF-24B4S</p>
     <img src={img10} alt="High-Speed Cutter" style={{height:"90vh"}}/>
    
    <p>4-Die 4 Blow Cold heading Bolt Former RBF-30B4S
    </p>
   
  
      <img src={img11} alt="Heavy Duty Machine" style={{height:"90vh"}}/>
 
      <p>5-Die 5 Blow Cold heading Bolt Former RBF-36B5S</p>
   
   
      <img src={img12} alt="Final Assembly" style={{height:"90vh"}} />
   
    
   
  </div>
</section> */}


 
    </div>
  );
};

export default ProductPage;
