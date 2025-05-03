

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./boltformer.css";
import productImage from '../../Images/nut-former/nut_former.png';
import { Link } from "react-router-dom"; 

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

import img1 from "../../Images/nutformer11.jpg";
import img2 from "../../Images/nutformer12.jpg";
import img3 from "../../Images/nut-former13.jpg";
import img4 from "../../Images/nutformer14.jpg";
import img5 from "../../Images/nutformer15.jpg";
import img6 from "../../Images/nutformer16.jpg";
import img7 from "../../Images/nutformer17.jpg";
import img8 from "../../Images/nutformer18.jpg";
import img9 from "../../Images/nutformer19.jpg";
import img10 from "../../Images/nutformer20.jpg";
import img11 from "../../Images/nutformer22.jpg";
import img12 from "../../Images/nuts-4.jpg";
import img13 from "../../Images/nuts-5.jpg";
import img14 from "../../Images/nut6.png";

const ProductPage = () => {
  useEffect(() => {
         AOS.init({ duration: 1000, once: true });
       }, []);
       
  const images = [
    { src: img8, description: "The frame provides absolute stability and straight forward process of heading" },
    { src: img9, description: "Ejection device. Cold heading machines for nuts are equipped with a die block. Retractable rods are easy to install from the die side for easy tool change." },
    { src: img10, description: "Aluminum alloy bushing for the crank & brass lining for the ram." },
    { src: img11, description: "Large presses are equipped with a series of RNF cutting mechanism and pneumatic cylinders. Springs are isolated on series RNF-24B equipment of smaller size." },
   
  ];

  const imagess = [
    { src: img12, description: "These products are produced on RNF Series equipment with 5, 6-position forging stations.Product Size from M5 to M30." },
    { src: img13, description: "These products are produced on RNL series equipment with 5, 6- position forging stations.Product Size from M5 to M30." },
    
   
  ];
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
      title: "Multi-station Operation",
      points: [
        "Performs several processes like cutting, forming in one cycle."
      ]
    },
    {
      title: "High Production Speed",
      points: [
        "Produces large quantities of nuts in a short time."
      ]
    },
    {
      title: "Precision Forming",
      points: [
        "Ensures uniform shapes and sizes for quality control."
      ]
    },
    {
      title: "Versatility",
      points: [
        "Can create nuts in various shapes and sizes (hexagonal, square, triangular, etc.)."
      ]
    },
    {
      title: "Material Efficiency",
      points: [
        "Minimizes waste during the forming process."
      ]
    }
  ];
  

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero nutformer-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               Nut Former
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>Nut Former: Precision in Every Thread.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section Nutformerinfo">
       
      </section>


    <section>

   <article  className="Product-article nut-article">
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
            <div className="product-content bolty" >
           <div className="bolt-content">
            <p>  A nut former is a specialized machine used to manufacture nuts and similar fasteners through cold forging. It forms metal wire or rods into the desired shape with heating and without heating, ensuring high precision and efficiency.
            </p>
                
                  

            <h4 style={{fontSize:"18px",marginTop:"20px"}}>Applications:</h4>
            
            <p>
              Commonly used in industries like automotive, construction, and manufacturing for creating durable and standardized nuts used in assemblies.
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

    {/* <section className="slotting-dubblecutter-info">
  <h3 className="heading-with-line">
    Workshop with Cold Heading Machines for the Production of Nuts
  </h3>
  <div className="image-container" >
  <img src={img1} alt="Control Panel 1"  style={{height:"90vh"}}/>
     <p>
Nut cold heading machine RNFR-32B5S series
</p>
     

     <img src={img2} alt="High-Speed Cutter" style={{height:"90vh"}}/>
     <p>RNFR-24B5S Nut Former Operator Panel</p>
   
  
      <img src={img3} alt="Heavy Duty Machine" style={{height:"90vh"}}/>
 
      <p>Operator for setting up a cold heading machine RNFR-32B5S
    </p>
   
   
   
      <img src={img4} alt="Final Assembly" style={{height:"90vh"}} />
   <p>Wire feed unit and straightening device of RNFR-24B5S nut upsetting machine</p>
      <img src={img5} alt="Control Panel 1"  style={{height:"90vh"}}/>
     
     <p>RNFR-32B5S PKO cam with 3-shift stroke adjustment. Digital gauge for punch wedge adjustment.</p>
     <img src={img6} alt="High-Speed Cutter" style={{height:"90vh"}}/>
     <p>
     The transfer mechanism of the workpieces between positions on the RNFR-32B5S cold heading machine for the production of nuts moves straight or rotates 180 degrees depending on the requirement.
     4-Die 4 Blow Cold heading Bolt Former RBF-30B4S
    </p>
   
  
      <img src={img7} alt="Heavy Duty Machine" style={{height:"90vh"}}/>
 
      <p>KO & stopper adjustment by 0.01mm. Motorized KO adjustment.</p>
   
  </div>
</section> */}

{/* <section className="bolt-grid">
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
    </section> */}

   <div>
    <h3 style={{textAlign:"center",margin:"10px",border:"1px solid gray",padding:"20px"}}>Products manufactured on Nut Formers</h3>
    <p style={{margin:"0 100px"}}>The multi-station cold heading equipment can produce a wide range of nuts and nut products in sizes M5, M6, M8, M10, M12, M16, M18, M22, M24, M27, M30, M32 with a productivity from 45 to 450 products per minute:</p>
  
   <section className="bolt-grid">
      
      {imagess.map((item, index) => (
        
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
   </div>
    </div>
  );
};

export default ProductPage;
