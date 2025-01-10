
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  // Annimation Aos->
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
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
      <ProductSection2/>
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
        <div className="about-us-section" data-aos="flip-left">
          <h2>ABOUT US <hr /></h2>
          <div className="about-para">
            <p>
              <h5 style={{ color: "#bc865a", fontWeight: "bold" }}><i>Trusted Fastener Machine Experts with a Commitment to Quality and Precision!</i></h5>
              Fastener Trading Solutions is a key expertise area of <b><i>HHAK Trading Company</i></b>, specializing in supplying a comprehensive range of premium-quality fastener-making machines to meet diverse industrial needs. As trusted dealers, we source machines from reputable global manufacturers, ensuring durability, precision, and high performance. Whether you are starting a new project, maintaining operations, or replenishing inventory, our commitment to quality, timely delivery, competitive pricing, and exceptional customer service ensures your business goals are supported effectively. With HHAK Trading Company, you can rely on expert solutions to keep your operations running smoothly and efficiently.
            </p>
            <p>
            Alpine Tool Tech, a unit of <b><i>HHAK Trading Company</i></b>, is dedicated to producing top-grade carbide and steel tools designed for the cold forging sector. Emphasizing accuracy and long-lasting performance, the company addresses diverse industrial requirements, offering dependable solutions for even the most challenging applications. 
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
<ProductSection />

    </div>
  );
};

export default Home;
