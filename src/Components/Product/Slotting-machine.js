
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./boltformer.css";

import { Link } from "react-router-dom"; 

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

// Import Images
import productImage from '../../Images/slotting_machine_1__1_-removebg-preview.png';
import productImage2 from '../../Images/slotting-finished-product.jpg';

import image1 from "../../Images/dubblecutter-slotting machine.jpg";
import image2 from "../../Images/slotting-cutter2.jpg";
import image3 from "../../Images/slotting-cutter3.jpg";
import image4 from "../../Images/slotting-cutter4.jpg";

import vibrationbowl from "../../Images/vibration-bowl-1200.jpg";
import gripperImage from "../../Images/gripper.png";
import ControlPanel from "../../Images/slotting control-panel.jpg"
import Electric from "../../Images/electrical-equipment-1200.jpg"
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
    title: "Vertical Cutting Motion",
    points: [
      "The cutting tool moves vertically while the workpiece remains stationary."
    ]
  },
  {
    title: "Precision Machining",
    points: [
      "Ideal for creating accurate slots and grooves."
    ]
  },
  {
    title: "Adjustable Table",
    points: [
      "Allows for positioning the workpiece at consistent angles."
    ]
  },
  {
    title: "Versatility",
    points: [
      "Can handle various materials, including metals."
    ]
  }
];

  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero Slottingmachine-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               Slotting Machine
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>Slotting Machine: Mastering the Art of the Slot.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section slottingmachine-info">
     
      </section>


    <section>
   <article  className="Product-article slotting-article">
	<figure className="silicon-card">
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
              <img src={productImage} alt={product.title} className="bolt-image" style={{width:"400px"}}/>
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
            <p style={{marginLeft:"20px",}}>   A slotting machine is a machining tool used to create vertical slots, metals workpieces. It operates by moving a single-point cutting tool up and down, removing material in a controlled manner.
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

	 <figure className="silicon-card" style={{height:"60vh"}}>
  {siliconproducts.map((product, index) => (
          <div key={product.id} className="siliconproduct-section"  style={{marginTop:"-100px"}}>
            <div className="product-content">
              
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img src={productImage2} alt={product.title} className="bolt-image" style={{width:"400px"}}/>
              </div>
              <h3 style={{fontSize:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>Samples of finished products</h3>
              
            </div>
          </div>
        ))}
	</figure>
	
 

</article>
    </section>
    
    {/* <section className="slotting-dubblecutter-info">
  <h3 className="heading-with-line">Double Cutter for slotting Screw Head</h3>
  <div className="image-container">
    <img src={image1} alt="Image 1" />
    <img src={image2} alt="Image 2" />
    <img src={image3} alt="Image 3" />
    <img src={image4} alt="Image 4" />
  </div>
</section>
    <section className="slotting-dubblecutter-info">
    <div className="image-container">
     
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
      </div>
    </section>


<section className="workpiece-gripper">
<h3 className="heading-with-gripline" style={{fontSize:"20px",marginLeft:"200px"}}>Workpiece gripper
</h3>
      <div className="gripper-image"> 
        <img src={gripperImage} alt="Workpiece Gripper" /></div>
    </section>


    <section className="workpiece-gripper">
<h3 className="heading-with-gripline" style={{fontSize:"20px",marginLeft:"150px"}}>Vibratory Feed Bowl
</h3>
<div style={{marginLeft:"150px"}}>
  <p>For workpieces of different sizes, vibrating bowls of the appropriate diameter are used:</p>
  <ul>
    <li>Ø300 / Ø400 for M1 - M3</li>
    <li>Ø520 for M3 - M6</li>
    <li>Ø620 for M6 - M10</li>
  </ul>
  <p>The minimum length of the product is 4 mm.</p>
</div>
      <div className="image-container"> 
        <img src={vibrationbowl} alt="Workpiece Gripper" style={{width:"80%"}} /></div>
    </section>

    <section className="slotting-dubblecutter-info">
  <h3 className="heading-with-line">Slotting Machine Control Panel
  </h3>
  <div className="image-container">
    <img src={ControlPanel} alt="ControlPanel 1" />
    
  </div>
</section>

<section className="workpiece-gripper">
<h3 className="heading-with-gripline electric" style={{fontSize:"20px",marginLeft:"150px"}}>Electrical equipment of the slot milling machine
</h3>
<div style={{marginLeft:"150px"}}>
  <p>Slot milling machine is controlled by a controller, one operator is able to operate more than ten machines.

</p>
 
</div>
      <div className="image-container"> 
        <img src={Electric} alt="Workpiece Gripper" style={{width:"80%"}} /></div>
    </section> */}

    </div>
  );
};

export default ProductPage;
