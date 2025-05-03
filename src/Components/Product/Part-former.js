


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./boltformer.css";
import productImage from '../../Images/partformer-machine-removebg-preview.png';
import { Link } from "react-router-dom"; 

import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

import img1 from "../../Images/partformer12.jpg";
import img2 from "../../Images/partformer13.jpg";
import img3 from "../../Images/partfoermer14.jpg";
import img4 from "../../Images/partformer15.jpg";
import img5 from "../../Images/partformer16.jpg";
import img6 from "../../Images/partformer17.jpg";
import img7 from "../../Images/partformer18.jpg";
import img8 from "../../Images/partformer19.jpg";

import img9 from "../../Images/parformer20.jpg";
import img10 from "../../Images/partformer21.jpg";
import img11 from "../../Images/partformer22.jpg";
import img12 from "../../Images/partformer23.jpg";

import img13 from "../../Images/partformer24.jpg";
import img14 from "../../Images/partformer25.jpg";
import img15 from "../../Images/partformer26.jpg";
import img16 from "../../Images/partformer27.jpg";
import img17 from "../../Images/partformer28.jpg";

const ProductPage = () => {
  
useEffect(() => {
         AOS.init({ duration: 1000, once: true });
       }, []);

  // const images = [
  //   { src: img1},
  //   { src: img2, },
  //   { src: img3, description: "Pneumatic clutch and brake system provide a quick heading process." },
  //   { src: img4, description: "Motorized digital adjustment length with a screen on the control panel allows the operator to save time when changing tools (on demand)." },
  //   { src: img5, description: "Machines are equipped with the gear lever and the cutting mechanism." },
  //   { src: img6, description: "The trim die is installed at the last forging station. The ejector stroke of the trim die can be adjusted by adjusting the ejector cam with a digital readout handwheel or using a digital controller. The stroke length can be changed to make it easier to customize the cutting process." },
  //   { src: img7, description: "Universal transfer finger system. The equipment supports three types of blanks feeding depending on the parameters of the heading (on demand)",
     
  //    },
  //   { src: img8, description: "The frame provides absolute stability and a straight forward process of heading. Made of cast iron with nodular graphite grade JIS FCD 55. Die Holders are made of stainless steel grade FCD 70, arranged parallel to each other and can be adjusted independently of each other. The equipment is switched off automatically in case of overload R.K.O." },
  //   { src: img9, description: "Motorized digital rod blank length adjustment with a lenght indication screen on the operator control panel." },
  //   { src: img10, description: "Motorized digital limiter adjustment allows the operator to quickly and accurately adjust the cutting length (on demand)." },
  //   { src: img11, description: "Straightener rollers with digital gauges. Adjustment of the position of the rollers of the straightening mechanism is individual, manually." },
  //   { src: img12, description: "Wire winder is equipped with horizontal pointing and correct hydraulic mechanism, able to quickly and easily process heavy wire rods." },
  // ];

  const imagess = [
    { src: img13, description: "These products are produced on equipment of RNP Series with 5, 6, 7-position forging stations. Maximum cutting diameter: 45 mm, maximum cutting length: 180 mm." },
    { src: img14, description: "These products are produced on equipment of RBP Series with 5, 6, 7 and 8-position forging stations. Maximum cutting diameter 34 mm, maximum cutting length 450 mm." },
    
   
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
    title: "Multi-station Capability",
    points: [
      "Performs multiple operations like cutting, punching, and forming in a single cycle."
    ]
  },
  {
    title: "High Precision",
    points: [
      "Ensures consistent dimensions and shapes, even for complex designs."
    ]
  },
  {
    title: "Material Versatility",
    points: [
      "Works with a wide range of metals, including steel, aluminum, and alloys."
    ]
  },
  {
    title: "Efficiency",
    points: [
      "Produces high volumes of parts with minimal material waste."
    ]
  }
];

  
  return (
    <div className="silicon-page">
      {/* Hero Section */}
      <Breadcrumb currentPage="Bolt-Former" isSubProduct={true} />
  <section className="siliconhero partformer-hero">
 
  <div className="siliconhero-content">
     <div className="Product-hero-heading silicon-hero-heading  ">
              <div className="subvertical-line">
              </div>
               
               <div className="subproduct-herodata">
               <h1 style={{textAlign:"left",marginLeft:"120px",fontWeight:"bold",fontSize:"4rem",textTransform:"uppercase" }}>
               Part Former
                </h1>
               <h2  style={{textAlign:"left",marginLeft:"0px" ,fontSize:"22px"}}>Part Former: Streamlining Your Manufacturing.
                </h2>
                
             </div>
              </div>
  </div>
  </section>



      <section className="siliconinfo-section  partformer-info">
       
      </section>


    <section>
   <article  className="Product-article part-article">
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
             
              
            <div>
            <p>  A part former is a versatile cold-forging machine used to manufacture complex metal parts with high precision. It’s commonly used in industries requiring intricate shapes, such as automotive, aerospace, and electronics.
            </p>
                <p style={{marginLeft:"20px",marginTop:"30px"}}>
                  
                  {/* <h4 style={{fontSize:"20px"}}>
                    Key Features and Benefits:</h4>
                    <ul>
                    <li><strong>Multi-station Capability:</strong> Performs multiple operations like cutting, punching, and forming in a single cycle.</li>
                    <li><strong>High Precision:</strong> Ensures consistent dimensions and shapes, even for complex designs.</li>
                    <li><strong>Material Versatility:</strong> Works with a wide range of metals, including steel, aluminum, and alloys.</li>
                    <li><strong>Efficiency:</strong> Produces high volumes of parts with minimal material waste.</li>
  
</ul> */}


            <h4 style={{fontSize:"20px"}}>Applications:</h4>
            
            <p>
            Commonly used in industries such as automotive, aerospace, and electronics for manufacturing intricate parts, including gears, shafts, and other precision components.
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
              <img src={img16} alt={product.title} className="bolt-image" style={{width:"400px"}}/>
              </div>
              <h3 style={{fontSize:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>Samples of finished products</h3>
              
            </div>
          </div>
        ))}
	</figure>
	
</article>
    </section>
 
   {/* <section className="quick-tooling-section">
  <h3 style={{ textAlign: "center", fontSize: "20px",margin:"30px 100px", border: "1px solid gray", padding: "15px" }}>
    QUICK TOOLING CHANGE SYSTEM
  </h3>
  <div className="content-wrapper">
    <div className="partcontent">
      <p>
        The tool module is easily mounted and dismantled (this is an option).
        To change the tool in the production of various types of products or
        the need to replace dies/punches, the machine operator can use a
        crane-beam to dismantle the tool module and replace it with a module
        with other tooling, which significantly reduces labor costs and adds
        ease of use.
      </p>
      <p>
        This option is also applicable for the production of a larger range of
        products in small batch production. The system is applicable for the
        production of products larger than M20.
      </p>
    </div>
    <div className="image-container">
      <img src={img17} alt="Parts Forming Machine" />
      <p style={{fontWeight:"bold" ,fontSize:"14px"}}>Parts Forming Machine RBP-36B6SL with installed Quick Tooling Change System.</p>
    </div>
  </div>
</section> */}

{/*   
    <div>
      <h3 style={{textAlign:"center",border:"1px solid gray",margin:"0 100px",padding:"20px",fontSize:"20px"}}>TECHNICAL FEATURES OF THE EQUIPMENT FOR BOLT PARTS AND NUT PARTS PRODUCTION</h3>
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
    </div> */}

    <div>
      <h3 style={{textAlign:"center",border:"1px solid gray",margin:"0 100px",padding:"20px",fontSize:"20px"}}>Products manufactured on Special Parts Formers</h3>
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

    {/* <section className="slotting-dubblecutter-info">
    <h3 style={{textAlign:"center",border:"1px solid gray",margin:"10px 100px",padding:"20px",fontSize:"20px"}}>Workshop with Nut Parts Former</h3>
    <div className="image-container">
     
        <img src={img15} alt="Image 2"  style={{height:"100vh"}}/>
       
      </div>
    </section> */}

    </div>
  );
};

export default ProductPage;
