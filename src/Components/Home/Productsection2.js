
import React, { useState, useEffect } from "react";
import "./Productsection2.css";

// Import images
import product1 from '../../Images/bolt-former/bolt-former-removebg-preview.png';
import product2 from '../../Images/header-machine/Headermachine.png';
import product3 from '../../Images/nut-former/nut_former.png';
import product4 from '../../Images/part-former/Part-former.png';
import product5 from '../../Images/slotting_machine_1__1_-removebg-preview.png';
import product6 from '../../Images/Thread_ROlling_for_Nut-removebg-preview.png';
import product7 from '../../Images/vt-cut/BT.png';
import product8 from '../../Images/washer-assembly/washer-assembly1.png';


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content slides for text
  const contentSlides = [
    {
      title:'Bolt Former',
      text: " Hhak Trading Company offers a range of high-quality bolt former machines deliver increased production,for various industries including automotive, construction, and manufacturing.",
    },
    
    {
      title:'Nut Former',
      text: "Boost your nut production with Hhak Trading Company's high-quality nut former machines.",
    },
    {
      title: 'Part Former',
      text: "Achieve unparalleled precision and accuracy in your metal forming operations with Hhak Trading Company's advanced part former machines.",
    },
    {
      title: "Header Machine",
      text: "From small screws to large bolts, our versatile header machines can handle a wide range of fastener types. ",
    },
    {
      title: 'Slotting Machine',
      text: "Create precise slots and keyways with Hhak Trading Company's versatile slotting machines.",
    },
    {
      title: 'Thread Rolling Machine',
      text:"Improve thread quality and reduce cost with HHAK Trading Company's.",
    },
    
    {
      title: "BT Die Cutting Machine",
      text: "Produce high-quality products with increased productivity using Hhak Trading Company's BT Die Cutting Machines.",
    },
    {
      title: "Washer Assembly Machine",
      text: "Ensure accurate and consistent washer assembly with Hhak Trading Company's advanced washer assembly machines.",
    }
  ];

  // Image slides
  const imageSlides = [
    { src: product1, alt: "Bolt former" },
    { src: product3, alt: "Nut Former Machine" },
    { src: product4, alt: "Part Former Machine" },
    { src: product2, alt: "Automatic Heavy Duty Screw Header Machine" },
    { src: product5, alt: "High Grade Slotting Machine" },
    { src: product6, alt: "Thread Rolling Machine" },
    { src: product7, alt: "VT Die Cutting Machine" },
    { src: product8, alt: "Self Drilling Screw Washer Assembly Machine" },
  ];

  // Handle next slide for auto-slide
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % contentSlides.length);
  };

  // Set up auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [currentIndex]);

  // Handle manual navigation
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Text content */}
        <div className="content">
          {contentSlides.map((slide, index) => (
            <div
              className={`content-slide ${index === currentIndex ? "active" : ""} ${
                index === (currentIndex - 1 + contentSlides.length) % contentSlides.length ? "previous" : ""
              }`}
              key={index}
            >
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          ))}
        </div>

        {/* Image content */}
        <div className="image">
          {imageSlides.map((slide, index) => (
            <div
              className={`image-slide ${index === currentIndex ? "active" : ""} ${
                index === (currentIndex - 1 + imageSlides.length) % imageSlides.length ? "previous" : ""
              }`}
              key={index}
            >
              <img src={slide.src} alt={slide.alt} className="slide-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <div className="nav-arrows">
        <button id="up" onClick={handlePrevious}>
          <i>&#9650;</i>
        </button>
        <button id="down" onClick={handleNext}>
          <i>&#9660;</i>
        </button>
      </div> */}
    </div>
  );
};

export default Slider;
