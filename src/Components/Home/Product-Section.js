

// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import Slider from 'react-slick';
// import './Product-Section.css';

// // Import images for products
// import product1Img1 from '../../Images/bolt-former/bolt-former-removebg-preview.png';
// import product1Img2 from '../../Images/bolt-former/multi-station-bolt-former-machine-removebg-preview(1).png';


// import product2Img1 from '../../Images/header-machine/Headermachine.png';


// import product3Img1 from '../../Images/nut-former/nut_former.png';


// import product4Img1 from '../../Images/part-former/Part-former.png';


// import product5Img1 from '../../Images/sloting-machine/SLOTTING-MACHINE-removebg-preview(1).png';


// import product6Img1 from '../../Images/thread-rolling-machine/Thread-rolling.png';


// import product7Img1 from '../../Images/vt-cut/BT.png';

// import product8Img1 from '../../Images/washer-assembly/washer-assembly1.png';


// const products = [
//   {
//     name: 'Bolt Former',
//     images: [product1Img1],
//     link: '/Bolt-former', 
//   },
 
//   {
//     name: 'Nut Former',
//     images: [product3Img1],
    
//     link: '/Nut-former', 
//   },
//   {
//     name: 'Part Former',
//     images: [product4Img1],
    
//     link: '/Part-former', 
//   },
//   {
//     name: 'Header Machine',
//     images: [product2Img1],
//     link: '/Header-Machine', 
//   },
//   {
//     name: 'Slotting Machine',
//     images: [product5Img1],
    
//     link: '/Slotting-machine', 
//   },
//   {
//     name: 'Thread Rolling Machine',
//     images: [product6Img1],
  
//     link: '/Threat-rolling-machine',
//   },
//   {
//     name: 'BT Cutting Machine',
//     images: [product7Img1],
//     link: '/VT-cut-machine',
//   },
//   {
//     name: 'Washer Assembly Machine',
//     images: [product8Img1],
   
//     link: '/Washer-Assembly', 
//   },
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   arrows: false,
//   vertical: false,
// };

// const ProductSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const sliders = useRef([]);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//     if (sliders.current[index]) {
//       sliders.current[index].slickPlay();
//     }
//   };

//   const handleMouseLeave = (index) => {
//     setHoveredIndex(null);
//     if (sliders.current[index]) {
//       sliders.current[index].slickPause();
//     }
//   };

//   return (
//     <section className="product-section ">
//       <h2 style={{color:"white"}}>Our Products <hr /></h2>
      
//       <div className="product-cards">
//         {products.map((product, index) => (
//           <Link to={product.link} key={index} className="product-card  Product-card ">
//             {/* Trigger hover effect */}
//             <div
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//             >
//               {product.images.length === 1 ? (
//                 <div className="product-image ">
//                   <img
//                     src={product.images[0]}
//                     alt={`${product.name} image`}
//                     className="product-img "
//                   />
//                 </div>
//               ) : (
//                 <Slider
//                   {...sliderSettings}
//                   ref={(slider) => (sliders.current[index] = slider)}
//                 >
//                   {product.images.map((img, imgIndex) => (
//                     <div key={imgIndex} className="product-image">
//                       <img
//                         src={img}
//                         alt={`${product.name} image ${imgIndex + 1}`}
//                         className="product-img img-product"

//                         style={img.style}
//                       />
                      
//                     </div>
//                   ))}
//                 </Slider>
//               )}
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//                 {/* <p>{product.description}</p> */}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import './Product-Section.css';

// // Import single product images
// import product1Img from '../../Images/bolt-former/bolt-former-removebg-preview.png';
// import product2Img from '../../Images/header-machine/Headermachine.png';
// import product3Img from '../../Images/nut-former/nut_former.png';
// import product4Img from '../../Images/part-former/Part-former.png';
// import product5Img from '../../Images/sloting-machine/SLOTTING-MACHINE-removebg-preview(1).png';
// import product6Img from '../../Images/thread-rolling-machine/Thread-rolling.png';
// import product7Img from '../../Images/vt-cut/BT.png';
// import product8Img from '../../Images/washer-assembly/washer-assembly1.png';

// const productsRow1 = [
//   { name: 'Bolt Former', image: product1Img, link: '/Bolt-former' },
//   { name: 'Nut Former', image: product3Img, link: '/Nut-former' },
//   { name: 'Part Former', image: product4Img, link: '/Part-former' },
//   { name: 'Header Machine', image: product2Img, link: '/Header-Machine' },
// ];

// const productsRow2 = [
//   { name: 'Slotting Machine', image: product5Img, link: '/Slotting-machine' },
//   { name: 'Thread Rolling Machine', image: product6Img, link: '/Threat-rolling-machine' },
//   { name: 'BT Cutting Machine', image: product7Img, link: '/VT-cut-machine' },
//   { name: 'Washer Assembly Machine', image: product8Img, link: '/Washer-Assembly' },
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: true,
// };

// const reverseSliderSettings = {
//   ...sliderSettings,
//   rtl: true, // Enable right-to-left direction for this slider
// };

// const ProductSection = () => {
//   return (
//     <section className="product-section">
//       <h2 style={{ color: 'white' }}>Our Products <hr /></h2>

//       <div className="product-row">
//         <Slider {...sliderSettings}>
//           {productsRow1.map((product, index) => (
//             <Link to={product.link} key={index} className="Product-card">
//               <div className="product-image">
//                 <img src={product.image} alt={product.name} className="product-img" />
//               </div>
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//               </div>
//             </Link>
//           ))}
//         </Slider>
//       </div>

//       <div className="product-row row2">
//         <Slider {...reverseSliderSettings}>
//           {productsRow2.map((product, index) => (
//             <Link to={product.link} key={index} className="Product-card">
//               <div className="product-image">
//                 <img src={product.image} alt={product.name} className="product-img" />
//               </div>
//               <div className="product-info">
//                 <h3>{product.name}</h3>
//               </div>
//             </Link>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Product-Section.css';

// Import single product images
import product1Img from '../../Images/bolt-former/bolt-former-removebg-preview.png';
import product2Img from '../../Images/header-machine/Headermachine.png';
import product3Img from '../../Images/nut-former/nut_former.png';
import product4Img from '../../Images/part-former/Part-former.png';
import product5Img from '../../Images/slotting_machine__1_-removebg-preview.png';
import product6Img from '../../Images/Thread_ROlling_for_Nut-removebg-preview.png';
import product7Img from '../../Images/vt-cut/BT.png';
import product8Img from '../../Images/washer-assembly/washer-assembly1.png';

const productsRow1 = [
  { name: 'Bolt Former', image: product1Img, link: '/Bolt-former' },
  { name: 'Nut Former', image: product3Img, link: '/Nut-former' },
  { name: 'Part Former', image: product4Img, link: '/Part-former' },
  { name: 'Header Machine', image: product2Img, link: '/Header-Machine' },
];

const productsRow2 = [
  { name: 'Slotting Machine', image: product5Img, link: '/Slotting-machine' },
  { name: 'Thread Rolling Machine', image: product6Img, link: '/Threat-rolling-machine' },
  { name: 'BT Cutting Machine', image: product7Img, link: '/VT-cut-machine' },
  { name: 'Washer Assembly Machine', image: product8Img, link: '/Washer-Assembly' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // For tablets
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For mobile devices
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480, // For smaller mobile devices
      settings: {
        slidesToShow: 1, // Show 1 slide
        slidesToScroll: 1,
      },
    },
    
  ],
};

const reverseSliderSettings = {
  ...sliderSettings,
  rtl: true, // Enable right-to-left direction for this slider
};

const ProductSection = () => {
  return (
    <section className="product-section">
      <h2 style={{ color: 'white' }}>PRODUCTS<hr /></h2>

      <div className="product-row">
        <Slider {...sliderSettings}>
          {productsRow1.map((product, index) => (
            <Link to={product.link} key={index} className="Product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="product-row ">
        <Slider {...reverseSliderSettings}>
          {productsRow2.map((product, index) => (
            <Link to={product.link} key={index} className="Product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSection;
