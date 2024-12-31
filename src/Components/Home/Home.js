
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './home.css';

// Import images from the src/assets/images folder
import product1 from '../../Images/bolt-former/bolt-making-machine-1.avif';
import product2 from '../../Images/header-machine/header-machine.jpg';
import product3 from '../../Images/nut-former/nut-former-machine.webp';
import product4 from '../../Images/part-former/partformer1.webp';
import product5 from '../../Images/sloting-machine/SLOTTING-MACHINE.png';
import product6 from '../../Images/thread-rolling-machine/thread-rolling-machine-.jpg';
import product7 from '../../Images/vt-cut/die-cutting-machine-vt-series.jpg';
import product8 from '../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.jpg';


const Home = () => {
  const products = [
    { id: 1, image: product1, name: 'Product 1', description: 'This is a high-quality product 1 description.' ,style: { border: '2px solid red', borderRadius: '10px', height: '400px', width: '300px' }  },
    { id: 2, image: product2, name: 'Product 2', description: 'This is a high-quality product 2 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' }},
    { id: 3, image: product3, name: 'Product 3', description: 'This is a high-quality product 3 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' } },
    { id: 4, image: product4, name: 'Product 4', description: 'This is a high-quality product 4 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' } },
    { id: 5, image: product5, name: 'Product 5', description: 'This is a high-quality product 5 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' } },
    { id: 6, image: product6, name: 'Product 6', description: 'This is a high-quality product 6 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' } },
    { id: 7, image: product7, name: 'Product 7', price: '$400', description: 'This is a high-quality product 7 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' } },
    { id: 8, image: product8, name: 'Product 8', price: '$450', description: 'This is a high-quality product 8 description.',style: { border: '2px solid red', borderRadius: '10px', height: '200px', width: '300px' } },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGetBestQuote = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setPhoneNumber('');
  };

  const handleSubmit = () => {
    alert(`Request sent for ${selectedProduct.name} with phone number: ${phoneNumber}`);
    handleClose();
  };

  return (
    <Container fluid className="home-container">
      <Row className="homes">
        {/* Left Section: Product Slider with 8 cards */}
        <Col md={6} className="left-section">
          <Slider {...sliderSettings} className="product-slider">
            {products.map((product) => (
              <div key={product.id} className="slider-card">
                <img
                  src={product.image}
                  alt={product.name}
                  style={product.style} 
                  className="product-image"
                />
                <p>{product.description}</p>
             
                <button
                  className="get-quote-btn"
                  onClick={() => handleGetBestQuote(product)}>
                  Get Best Quote
                </button>
              </div>
            ))}
          </Slider>
        </Col>

        {/* Right Section: About and Additional Info */}
        <Col md={6} className="right-section">
          <div className="about-section">
            <h2>About Us</h2>
            <p>
              We are HHAK Trading Machine, providing high-quality industrial
              equipment and exceptional customer service. Explore our wide
              range of products tailored to meet your business needs.
            </p>
          </div>
          <div className="additional-info">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>High-quality products</li>
              <li>Competitive pricing</li>
              <li>Excellent customer support</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Triangular Curve Section */}
      <Row>
        <div className="triangular-section">
          <h4>Experience Excellence</h4>
          <p>
            With years of experience and a commitment to innovation, we ensure
            that every product meets the highest standards of quality. Our
            customer-first approach drives us to exceed expectations.
          </p>
          <p>
            Contact us today to discover how we can help you achieve your
            business goals with reliable and efficient industrial solutions.
          </p>
        </div>
      </Row>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="product-modal-image"
                />
                <h4>{selectedProduct.name}</h4>
                <p>{selectedProduct.description}</p>
                <h5>Price: {selectedProduct.price}</h5>
              </Col>
              <Col md={6}>
                <h5>Request Best Quote</h5>
                <Form>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit Now
                  </Button>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Home;
