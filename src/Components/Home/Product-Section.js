

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Slider from 'react-slick';
import './Product-Section.css';

// Import images for products
import product1Img1 from '../../Images/bolt-former/bold-machine-removebg-preview(2).png';
import product1Img2 from '../../Images/bolt-former/bolt-former-removebg-preview.png';
import product1Img3 from '../../Images/bolt-former/bolt-making-machine-1-removebg-preview.png';
import product1Img4 from '../../Images/bolt-former/multi-station-bolt-former-machine-removebg-preview(1).png';

import product2Img1 from '../../Images/header-machine/20220708061123-4d4149ee-0e7f-4691-ae14-de964a66ab18-removebg-preview.png';
import product2Img2 from '../../Images/header-machine/automatic-heavy-duty-screw-header-machine-removebg-preview(1).png';
import product2Img3 from '../../Images/header-machine/header-machine.png';

import product3Img1 from '../../Images/nut-former/nut-former-machine-removebg-preview.png';
import product3Img2 from '../../Images/nut-former/nutformer1-removebg-preview.png';

import product4Img1 from '../../Images/part-former/01cbf-l-500x500-removebg-preview.png';
import product4Img2 from '../../Images/part-former/partformer1-removebg-preview.png';

import product5Img1 from '../../Images/sloting-machine/SLOTTING-MACHINE-removebg-preview(1).png';
import product5Img2 from '../../Images/sloting-machine/high-grade-10-inch-slotting-machine-removebg-preview(1).png';
import product5Img3 from '../../Images/sloting-machine/high-grade-slotting-machine-removebg-preview(1).png';

import product6Img1 from '../../Images/thread-rolling-machine/thread-rolling1.png';
import product6Img2 from '../../Images/thread-rolling-machine/thread-rolling2.png';
import product6Img3 from '../../Images/thread-rolling-machine/thread-rolling3.png';

import product7Img1 from '../../Images/vt-cut/die-cutting-machine-vt-series.png';

import product8Img1 from '../../Images/washer-assembly/washer-assembly1.png';
import product8Img2 from '../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.png';

const products = [
  {
    name: 'Bolt Former',
    images: [product1Img1, product1Img2, product1Img3,product1Img4],
    link: '/Bolt-former', 
  },
  {
    name: 'Header Machine',
    images: [product2Img1, product2Img2,product2Img3],
    link: '/Header-Machine', 
  },
  {
    name: 'Nut Former',
    images: [product3Img1, product3Img2],
    
    link: '/Nut-former', 
  },
  {
    name: 'Part Former',
    images: [product4Img1, product4Img2],
    
    link: '/Part-former', 
  },
 
  {
    name: 'Slotting Machine',
    images: [product5Img1, product5Img2, product5Img3],
    
    link: '/Slotting-machine', 
  },
  {
    name: 'Thread Rolling Machine',
    images: [product6Img1, product6Img2, product6Img3],
  
    link: '/Threat-rolling-machine',
  },
  {
    name: 'VT Cutting Machine',
    images: [product7Img1],
    link: '/VT-cut-machine',
  },
  {
    name: 'Washer Assembly Machine',
    images: [product8Img1, product8Img2],
   
    link: '/Washer-Assembly', 
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  vertical: false,
};

const ProductSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliders = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (sliders.current[index]) {
      sliders.current[index].slickPlay();
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    if (sliders.current[index]) {
      sliders.current[index].slickPause();
    }
  };

  return (
    <section className="product-section">
      <h2>Our Products <hr /></h2>
      
      <div className="product-cards">
        {products.map((product, index) => (
          <Link to={product.link} key={index} className="product-card  Product-card ">
            {/* Trigger hover effect */}
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {product.images.length === 1 ? (
                <div className="product-image ">
                  <img
                    src={product.images[0]}
                    alt={`${product.name} image`}
                    className="product-img "
                  />
                </div>
              ) : (
                <Slider
                  {...sliderSettings}
                  ref={(slider) => (sliders.current[index] = slider)}
                >
                  {product.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="product-image">
                      <img
                        src={img}
                        alt={`${product.name} image ${imgIndex + 1}`}
                        className="product-img img-product"

                        style={img.style}
                      />
                      
                    </div>
                  ))}
                </Slider>
              )}
              <div className="product-info">
                <h3>{product.name}</h3>
                {/* <p>{product.description}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
