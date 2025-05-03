import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./breaking-news.css";

const BreakingNewsTicker = () => {
  return (
    <div className="ticker-container">
      <Link to="/Exhibition-page" className="ticker-text">  {/* Use Link for routing */}
        🚨 Don't miss the upcoming Exhibition TechWorld Expo in 2025! Click here to register!
      </Link>
    </div>
  );
};

export default BreakingNewsTicker;
