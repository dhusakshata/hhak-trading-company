import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GetinTouch.css"; // Make sure to create and style this CSS file
import { Link } from "react-router-dom";
const GetInTouch = () => {
  const navigate = useNavigate();

  
  const handleNavigateToContact = () => {
    navigate("/Contact-us");

    // Force a small reflow before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);
  };
  return (
    <section className="get-in-touch">
      <div className="content">
        <h2>Ready to Discuss Your Fastners Needs?</h2>
        <button onClick={handleNavigateToContact}>Get In Touch</button>
      </div>
    </section>
  );
};

export default GetInTouch;
