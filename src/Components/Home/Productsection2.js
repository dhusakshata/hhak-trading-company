
import React, { useState, useEffect } from "react";
import "./Productsection2.css";

// Import images
import product1 from '../../Images/bolt-former/bold-machine-removebg-preview(2).png';
import product2 from '../../Images/header-machine/automatic-heavy-duty-screw-header-machine-removebg-preview(1).png';
import product3 from '../../Images/nut-former/nut-former-machine-removebg-preview.png';
import product4 from '../../Images/part-former/partformer1-removebg-preview.png';
import product5 from '../../Images/sloting-machine/high-grade-10-inch-slotting-machine-removebg-preview(1).png';
import product6 from '../../Images/thread-rolling-machine/thread-rolling2.png';
import product7 from '../../Images/img-removebg-preview.png';
import product8 from '../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.png';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content slides for text
  const contentSlides = [
    {
      title:'Bolt Former',
      text: " Hhak Trading Company offers a range of high-quality bolt former machines designed to efficiently produce bolts, screws, and other fasteners. Our machines deliver increased production, cost savings, and improved quality, making them ideal for various industries including automotive, construction, and manufacturing. Contact us today to explore our solutions and boost your fastener production.",
    },
    
    {
      title:'Nut Former',
      text: "Boost your nut production with Hhak Trading Company's high-quality nut former machines. Our machines offer increased production, cost savings, and improved quality, making them ideal for various industries. We provide a range of solutions to meet your specific needs. Contact us today for a consultation.",
    },
    {
      title: 'Part Former',
      text: "Achieve unparalleled precision and accuracy in your metal forming operations with Hhak Trading Company's advanced part former machines. Our machines deliver exceptional results, enabling you to manufacture intricate components with tight tolerances. Contact us today to learn how our solutions can elevate your manufacturing processes.",
    },
    {
      title: "Header Machine",
      text: "From small screws to large bolts, our versatile header machines can handle a wide range of fastener types. Hhak Trading Company offers a range of solutions to meet your specific production needs. Contact us today to discuss your requirements and find the perfect header machine for your application.",
    },
    {
      title: 'Slotting Machine',
      text: "Create precise slots and keyways with Hhak Trading Company's versatile slotting machines. Our machines can handle a wide range of materials and applications, making them essential for various industries. Contact us today to explore our solutions and enhance your machining capabilities.",
    },
    {
      title: 'Thread Rolling Machine',
      text:"Improve thread quality and reduce costs with Hhak Trading Company's high-performance thread rolling machines. Our machines offer increased production, reduced material waste, and enhanced thread strength, making them ideal for various applications. Contact us today to explore our solutions and optimize your thread rolling operations.",
    },
    {
      title: "BT Die Cutting Machine",
      text: "Produce high-quality products with increased productivity using Hhak Trading Company's BT Die Cutting Machines. Our machines deliver consistent performance and minimize downtime, ensuring efficient and cost-effective die cutting operations. Contact us today to learn more about our solutions and improve your bottom line.",
    },
    {
      title: "Washer Assembly Machine",
      text: "Ensure accurate and consistent washer assembly with Hhak Trading Company's advanced washer assembly machines. Our machines deliver precise placement and secure fastening, ensuring high-quality products and minimizing defects. Contact us today to improve the quality and reliability of your assemblies.",
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
