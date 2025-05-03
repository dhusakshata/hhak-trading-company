

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./banner.css"; // Import CSS file

// Import images
import technologyImg from "../../Images/boltforming.jpg";
import  natureImg2 from "../../Images/nutformerhero.jpg";
import businessImg from "../../Images/partformer-machine-removebg-preview.png";
import businessImg2 from "../../Images/cold_forging_parts_auto.jpg";
import  natureImg from "../../Images/SFD-COLD-HEADING-DIES.jpg";
// Slide data with different animation classes
const slides = [
  {
    image:technologyImg  ,
    text:"HHAK-The Experts in Fastener Machinery",
   
    animationClass: "slide-text-1",
  },
  {
    image:natureImg2,
    text: "Dealers of New & Used Fastener Making Machines Since 2017",
    animationClass: "slide-text-2",
  },
  {
    image:businessImg,
   
    text: "Driving Innovation in Sustainable Fastener Manufacturing",
    animationClass: "slide-text-3",
  },
  {
    image:businessImg2,
    text: "Future of Fastener Manufacturing is Here",
    animationClass: "slide-text-2",
  },
  {
    image:natureImg,
    text: "Your Project-Our Tools-Alpine Tools-Perfect Results",
    animationClass: "slide-text-1",
  
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}  // Enables continuous loop
        speed={500} // Controls slide transition speed
        className="swiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={slide.image} alt={slide.text} className="slide-image" />
            <div className="slide-overlay">
              <h1
                className={`slide-text ${
                  index === activeIndex ? slide.animationClass : ""
                }`}
              >
                {slide.text}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
