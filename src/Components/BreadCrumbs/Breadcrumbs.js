


import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumb = ({ currentPage, isSubProduct = false }) => {
  return (
    <div className="breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      {isSubProduct && (
        <>
          <span className="breadcrumb-separator"> &gt;&gt; </span>
          <Link to="/products" className="breadcrumb-link">Products</Link>
        </>
      )}
      <span className="breadcrumb-separator"> &gt;&gt; </span>
      <span className="breadcrumb-current">{currentPage}</span>
    </div>
  );
};

export default Breadcrumb;
