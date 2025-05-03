import React from "react";
import "./Alphine.css";
// Import images for the gallery
import toolImage1 from "../../Images/carbide dies.jpg";
import toolImage2 from "../../Images/carbide.jpg";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";
const AlpineTool = () => {

  const siliconproducts = [
    {
      id: 1,
     
      image: toolImage1,
      
    },
    {
      id: 2,
      
      image: toolImage2,
    
    },
    
  ];


  return (
    <div className="alpine-tool-page">
      <Breadcrumb currentPage="Alphine-Tools" />
      {/* Hero Section */}
      <section className="alpine-hero">
      <div className="alphineoverlay">
      <h1 style={{marginBottom:"40px",textTransform:"uppercase"}}>Alpine Tool Tech</h1>
      <p>Precision-engineered tools for industrial excellence.</p>
      </div>
      
      </section>

      {/* Info Section */}
      <section className="alpine-info">
       
        <p>
        Alpine Tool Tech, a distinguished division of HHAK Trading
Company, is a trusted name in the manufacturing of
premium-quality carbide and steel tools designed specifically
for the cold forging industry. Renowned for its commitment
to precision and durability, Alpine Tool Tech offers innovative
solutions tailored to meet the rigorous demands of modern
industrial applications. By combining advanced technology
with unmatched expertise, the company ensures reliable and
efficient tools that empower industries to achieve superior
performance and productivity.
        </p>
        <p>
        With a strong foundation built on innovation and excellence,
Alpine Tool Tech continues to set benchmarks in the industry
by delivering tools that excel in both quality and reliability.
The company's dedication to understanding customer needs
enables it to create customized solutions that enhance
efficiency and reduce downtime. Supported by a team of
skilled professionals and cutting-edge manufacturing
facilities, Alpine Tool Tech is a trusted partner for industries
seeking durable, high-performance tools to tackle even the
most challenging cold forging processes.
        </p>
      </section>


      <section>
   <article  className="Product-article alpine-article"style={{backgroundColor:"white",padding:"1px",borderRadius:"2px"}}>
	<figure className="silicon-card">

          <div className="siliconproduct-section" >
            <div className="product-content">
              <div style={{marginLeft:"-70px",}}>
              <img src={toolImage1} alt="...." className="bolt-image" />
              </div>
             
              
            </div>
          </div>
      
	</figure>

	
	<figure className="silicon-card" style={{backgroundColor:"white",padding:"1px",borderRadius:"2px"}}>

         <div className="siliconproduct-section"style={{backgroundColor:"white",padding:"5px"}} >
         <div className="product-content" style={{backgroundColor:"white"}}>
           <div>
           <img src={toolImage2} alt="" className="bolt-image" />
           </div>
          
           
         </div>
       </div>
   
	</figure>
  
</article>
    </section>


          </div>
  );
};

export default AlpineTool;
