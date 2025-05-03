
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.css';
import Banner from "./banner.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProductSection from "./Product-Section";

import ProductSection2 from "./Productsection2.js";
import { Link } from "react-router-dom";


// Import images from the src/assets/images folder
import product1 from '../../Images/bolt-former/bolt-former-removebg-preview.png';
import product2 from '../../Images/nut-former/nut_former.png';
import product3 from '../../Images/part-former/Part-former.png';
import product4 from '../../Images/header-machine/Headermachine.png';
import product5 from '../../Images/sloting-machine/SLOTTING-MACHINE-removebg-preview(1).png';
import product6 from '../../Images/thread-rolling-machine/Thread-rolling.png';
import product7 from '../../Images/vt-cut/BT.png';
import product8 from '../../Images/washer-assembly/washer-assembly1.png';

const Home = () => {
  // Annimation Aos->
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true,     // Ensure the animation happens only once
    });
  }, []);//<-

  // Hero Section Slider show 
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [product1, product2, product3, product4, product5, product6, product7, product8];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [images.length]);


  // // Product Section
  const productData = [
    { name: "BOLT FORMER", image: product1, link: "/Bolt-former" },
    { name: "NUT FORMER", image: product2, link: "/Nut-former" },
    { name: "PART FORMER", image: product3, link: "/Part-former" },
    { name: "HEADER MACHINE", image: product4, link: "/Header-Machine" },
    { name: "SLOTTING MACHINE", image: product5, link: "/Slotting-machine" },
    { name: "THREAD ROLLING MACHINE", image: product6, link: "/Threat-rolling-machine" },
    { name: "BT CUT MACHINE", image: product7, link: "/VT-cut-machine" },
    { name: "WASHER ASSEMBLY MACHINE", image: product8, link: "/Washer-Assembly" },
  ];

 const sliderSettings = {
     dots: true,
    infinite: true,
   speed: 500,
   slidesToShow: 4,
  slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
  responsive: [
    {
     breakpoint: 1200,      settings: { slidesToShow: 3 },
    },
    {
       breakpoint: 992,
       settings: { slidesToShow: 2 },
      },
     {
       breakpoint: 768,
        settings: { slidesToShow: 1 },
       },
     ],
   };

  return (
    <div className="Home section">

    
      <Banner/>
      {/* About Us Section */}
      <div className="triangle-div">
        <div className="about-us-section" data-aos="flip-left">
          <h1>ABOUT US <hr /></h1>
          <div className="about-para">
            <p>
              <h5 style={{ color: "#bc865a", fontWeight: "bold" }}><i>Trusted Fastener Machine Experts with a Commitment to Quality and Precision!</i></h5>
              Fastener Trading Solutions is a key expertise area of <b><i>HHAK Trading Company</i></b>, specializing in supplying a comprehensive range of premium-quality fastener-making machines to meet diverse industrial needs. As trusted dealers, we source machines from reputable global manufacturers, ensuring durability, precision, and high performance. Whether you are starting a new project, maintaining operations, or replenishing inventory, our commitment to quality, timely delivery, competitive pricing, and exceptional customer service ensures your business goals are supported effectively. With HHAK Trading Company, you can rely on expert solutions to keep your operations running smoothly and efficiently.
            </p>
            <p>
            Alpine Tool Tech, a unit of <b><i>HHAK Trading Company</i></b>, is dedicated to producing top-grade carbide and steel tools designed for the cold forging sector. Emphasizing accuracy and long-lasting performance, the company addresses diverse industrial requirements, offering dependable solutions for even the most challenging applications. 
            </p>
         
            <div className="square-button-container">
      <Link to="/about-us" className="square-button">
      More Details...
      </Link>
    </div>
          </div>
         
        </div>
      </div>
      
    
      <ProductSection2/>

      <section className="alpine-tool">
     <div className="alphine-heading">
      <h1 style={{textTransform:"uppercase"}} data-aos="fade-down">Alpine Tool Tech</h1>
     </div>
      <div className="alphine-para" data-aos="fade-up">
      <p>Alpine Tool Tech, a distinguished division of HHAK Trading
Company, is a trusted name in the manufacturing of
premium-quality carbide and steel tools designed specifically
for the cold forging industry. </p>
      </div>
      <Link to="/Alphine" className="learn-more" data-aos="fade-up">Learn More</Link>
    </section>


    </div>
  );
};

export default Home;
