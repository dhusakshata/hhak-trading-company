// import React, { useState } from 'react';
// import './Productsection2.css';
// import image1 from "../../Images/bold-machine-removebg-preview(1).png";
// import image2 from "../../Images/automatic-heavy-duty-screw-header-machine.png";
// import image3 from "../../Images/nut-former/nut-former-machine-removebg-preview.png";
// import image4 from "../../Images/part-former/01cbf-l-500x500-removebg-preview.png";
// import image5 from "../../Images/sloting-machine/high-grade-slotting-machine-removebg-preview(1).png";
// import image6 from "../../Images/thread-rolling-machine/thread-rolling1.png";
// import image7 from "../../Images/vt-cut/die-cutting-machine-vt-series.png";
// import image8 from "../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.png";
// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const contentSlides = [
//     {
//       title: "London",
//       text: "London is the capital of the United Kingdom, with a population of just under 9 million. It is among the oldest of the world's great cities and one of the most cosmopolitan."
//     },
//     {
//       title: "Paris",
//       text: "Paris, the capital of France, is renowned for its art, culture, and the iconic Eiffel Tower."
//     },
//     {
//       title: "New York",
//       text: "New York City, known as the Big Apple, is famous for its skyline and vibrant culture."
//     }
//   ];

//   const imageSlides = [image1,image2,image3,image4,image5,image6,image7,image8];

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         <div className="content">
//           {contentSlides.map((slide, index) => (
//             <div
//               className={`content-slide ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + contentSlides.length) % contentSlides.length ? 'previous' : ''}`}
//               key={index}
//             >
//               <h2>{slide.title}</h2>
//               <p>{slide.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className="image">
//           {imageSlides.map((slide, index) => (
//             <div
//               className={`image-slide ${index === currentIndex ? 'active' : ''} ${index === (currentIndex - 1 + imageSlides.length) % imageSlides.length ? 'previous' : ''}`}
//               key={index}
//             >
//               <img src={slide.src} alt={slide.alt} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="nav-arrows">
//         <button
//           id="up"
//           onClick={() => setCurrentIndex((currentIndex - 1 + contentSlides.length) % contentSlides.length)}
//         >
//           <i>&#9650;</i>
//         </button>
//         <button
//           id="down"
//           onClick={() => setCurrentIndex((currentIndex + 1) % contentSlides.length)}
//         >
//           <i>&#9660;</i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useState } from "react";
import "./Productsection2.css";

// Import images
import image1 from "../../Images/bold-machine-removebg-preview(1).png";
import image2 from "../../Images/automatic-heavy-duty-screw-header-machine.png";
import image3 from "../../Images/nut-former/nut-former-machine-removebg-preview.png";
import image4 from "../../Images/part-former/01cbf-l-500x500-removebg-preview.png";
import image5 from "../../Images/sloting-machine/high-grade-slotting-machine-removebg-preview(1).png";
import image6 from "../../Images/thread-rolling-machine/thread-rolling1.png";
import image7 from "../../Images/vt-cut/die-cutting-machine-vt-series.png";
import image8 from "../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content slides for text
  const contentSlides = [
    {
      title: "Bolt Machine",
      text: "London is the capital of the United Kingdom, with a population of just under 9 million. It is among the oldest of the world's great cities and one of the most cosmopolitan.",
    },
    {
      title: "Header Machine",
      text: "Paris, the capital of France, is renowned for its art, culture, and the iconic Eiffel Tower.",
    },
    {
      title: "Nut Former Machine",
      text: "New York City, known as the Big Apple, is famous for its skyline and vibrant culture.",
    },
    {
      title: "Part Former Machine",
      text: "London is the capital of the United Kingdom, with a population of just under 9 million. It is among the oldest of the world's great cities and one of the most cosmopolitan.",
    },
    {
      title: "Slotting Machine",
      text: "Paris, the capital of France, is renowned for its art, culture, and the iconic Eiffel Tower.",
    },
    {
      title: "Thread Rolling Machine",
      text: "New York City, known as the Big Apple, is famous for its skyline and vibrant culture.",
    },
    {
      title: "VT Die Cutting Machine",
      text: "London is the capital of the United Kingdom, with a population of just under 9 million. It is among the oldest of the world's great cities and one of the most cosmopolitan.",
    },
    {
      title: "Washer Assembly Machine",
      text: "London is the capital of the United Kingdom, with a population of just under 9 million. It is among the oldest of the world's great cities and one of the most cosmopolitan.",
    }
    
  ];

  // Image slides
  const imageSlides = [
    { src: image1, alt: "Bolt Machine" },
    { src: image2, alt: "Automatic Heavy Duty Screw Header Machine" },
    { src: image3, alt: "Nut Former Machine" },
    { src: image4, alt: "Part Former Machine" },
    { src: image5, alt: "High Grade Slotting Machine" },
    { src: image6, alt: "Thread Rolling Machine" },
    { src: image7, alt: "VT Die Cutting Machine" },
    { src: image8, alt: "Self Drilling Screw Washer Assembly Machine" },
  ];

  // Handle navigation
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + contentSlides.length) % contentSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % contentSlides.length);
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
              <img src={slide.src} alt={slide.alt} className="slide-image"/>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="nav-arrows">
        <button id="up" onClick={handlePrevious}>
          <i>&#9650;</i>
        </button>
        <button id="down" onClick={handleNext}>
          <i>&#9660;</i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
