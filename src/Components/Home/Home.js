
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.css';
import ProductSection from "./Product-Section";

import ProductSection2 from "./Productsection2.js";
import { Link } from "react-router-dom";


// Import images from the src/assets/images folder
import product1 from '../../Images/bolt-former/bold-machine-removebg-preview(2).png';
import product2 from '../../Images/header-machine/automatic-heavy-duty-screw-header-machine-removebg-preview(1).png';
import product3 from '../../Images/nut-former/nut-former-machine-removebg-preview.png';
import product4 from '../../Images/part-former/partformer1-removebg-preview.png';
import product5 from '../../Images/sloting-machine/high-grade-10-inch-slotting-machine-removebg-preview(1).png';
import product6 from '../../Images/thread-rolling-machine/thread-rolling2.png';
import product7 from '../../Images/img-removebg-preview.png';
import product8 from '../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.png';

const Home = () => {

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
  // const productDescriptions = [
  //   "Bolt Making Machine",
  //   "Automatic Heavy Duty Screw Header Machine",
  //   "Self Drilling Screw Washer Assembly Machine",
  //   "Flat Die Thread Rolling Machine",
  //   "High Grade Slotting Machine",
  //   "Precision Screw Machine",
  //   "Advanced Forged Machine",
  //   "Thread Rolling Machine"
  // ];

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: { slidesToShow: 3 },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: { slidesToShow: 2 },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: { slidesToShow: 1 },
  //     },
  //   ],
  // };

  return (
    <div className="Home section">
      <div className="hero-section">
        {/* Left Section */}
        <div className="left-content">
          <div className="feature-circle">
            <div className="circle-item"><p>Quality <br /> Products</p></div>
            <div className="circle-item"><p>Advanced<br /> Forged</p></div>
            <div className="circle-item"><p>Specialized <br />Screws</p></div>
          </div>
          <div className="text-content">
            <h2>Future of Fastener Manufacturing is Here</h2>
            <h3>Driving Innovation in Sustainable Fastener Manufacturing</h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-content">
          <div className="slideshow">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`slide ${currentSlide === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="triangle-div">
        <div className="about-us-section">
          <h2>ABOUT US <hr /></h2>
          <div className="about-para">
            <p>
              <h5 style={{ color: "#bc865a", fontWeight: "bold" }}><i>Trusted Fastener Machine Experts with a Commitment to Quality and Precision!</i></h5>
              Fastener Trading Solutions is a vital area of expertise at <b><i>HHAK Trading Company</i></b>, where we specialize in supplying a comprehensive range of premium-quality fasteners to meet the diverse needs of industries worldwide. As trusted dealers, we offer an extensive inventory of bolts, nuts, screws, washers, rivets, and other essential fastener components, ensuring our clients have access to the best solutions for their specific requirements.
            </p>
            <p>
            Whether you are initiating a new project, maintaining existing operations, or replenishing your inventory, our commitment to quality and reliability remains steadfast. We source fasteners from reputable manufacturers globally, ensuring durability, precision, and performance in every product. Additionally, we pride ourselves on providing timely deliveries, competitive pricing, and exceptional customer service to support your business goals effectively. With <b><i>HHAK Trading Company</i></b>, you can rest assured that your fastener needs are in expert hands, enabling your operations to run smoothly and efficiently.  
            </p>
          </div>
          <div className="square-button-container">
      <Link to="/about-us" className="square-button">
      More Details...
      </Link>
    </div>
        </div>
      </div>
      
      {/* Product Section */}
      {/* <div className="Product-section">
        <h2>PRODUCTS <hr /></h2>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div className="product-item" key={index}>
               <img src={image} alt={productDescriptions[index]} />
              <div className="product-description">
            
                <h4>{productDescriptions[index]}</h4>
              
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
<ProductSection/>

    </div>
  );
};

export default Home;
