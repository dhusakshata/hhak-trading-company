import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Breadcrumb from "../BreadCrumbs/Breadcrumbs.js";

import ProductSection2 from "../Home/Productsection2.js";

import image1 from "../../Images/bold-machine-removebg-preview(1).png";
import image2 from "../../Images/automatic-heavy-duty-screw-header-machine.png";
import image3 from "../../Images/nut-former/nut-former-machine-removebg-preview.png";
import image4 from "../../Images/part-former/01cbf-l-500x500-removebg-preview.png";
import image5 from "../../Images/sloting-machine/high-grade-slotting-machine-removebg-preview(1).png";
import image6 from "../../Images/thread-rolling-machine/thread-rolling1.png";
import image7 from "../../Images/vt-cut/die-cutting-machine-vt-series.png";
import image8 from "../../Images/washer-assembly/self-drilling-screw-washer-assembly-machine.png";

const products = [
  {
    id: 1,
    name: "Bolt Former",
    image: image1,
    link: "/bolt-former",
  },
  {
    id: 2,
    name: "Header Machine",
    image: image2,
    link: "/header-machine",
  },
  {
    id: 3,
    name: "Nut Former",
    image: image3,
    link: "/nut-former",
  },
  {
    id: 4,
    name: "Part Former",
    image: image4,
    link: "/part-former",
  },
  {
    id: 5,
    name: "Slotting Machine",
    image: image5,
    link: "/slotting-machine",
  },
  {
    id: 6,
    name: "Thread Rolling Machine",
    image: image6,
    link: "/thread-rolling-machine",
  },
  {
    id: 7,
    name: "VT Cutting Machine",
    image: image7,
    link: "/vt-cutting-machine",
  },
  {
    id: 8,
    name: "Washer Assembly Machine",
    image: image8,
    link: "/washer-assembly-machine",
  },
];

const ProductPage = () => {
  return (
    <>
      <Breadcrumb currentPage="Products" />

      <div className="product-page-container">
        <h1 className="page-title">PRODUCTS</h1>
        <div className="product-page">
          <div className="product-menu">
            <h4>// PRODUCTS MENU</h4>
            <ul>
              <li>
                <Link to="/bolt-former">Bolt Former</Link>
              </li>
              <li>
                <Link to="/header-machine">Header Machine</Link>
              </li>
              <li>
                <Link to="/nut-former">Nut Former</Link>
              </li>
              <li>
                <Link to="/part-former">Part Former</Link>
              </li>
              <li>
                <Link to="/slotting-machine">Slotting Machine</Link>
              </li>
              <li>
                <Link to="/thread-rolling-machine">Thread Rolling Machine</Link>
              </li>
              <li>
                <Link to="/vt-cutting-machine">VT Cutting Machine</Link>
              </li>
              <li>
                <Link to="/washer-assembly-machine">Washer Assembly Machine</Link>
              </li>
            </ul>
          </div>
          <div className="product-list">
            <h4>+ PRODUCTS LIST</h4>
            <div className="product-grid">
              {products.map((product) => (
                <Link to={product.link} key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <div className="product-name">{product.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProductSection2/>
    </>
  );
};

export default ProductPage;
