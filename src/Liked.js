import React from "react";
import Header from "./Header";
import "./likedplaces/Liked.css";
import { Link } from "react-router-dom";
import LikedGranite from "./likedplaces/LikedGranite";
import LikedFort from "./likedplaces/LikedFort";
import LikedRattle from "./likedplaces/LikedRattle";
import LikedGarden from "./likedplaces/LikedGarden";

function Liked() {
  return (
    <div className="App">
      <Header />

      <div className="liked-content-box">
        <h1> Your Matches</h1>

        {/* Clickable location cards, "matches" */}
        <div className="info-box" style={{ columnCount: 2 }}>
          <Link to="/granite-falls" >
            <LikedGranite />
          </Link>

          <Link to="/fort-ebey">
            <LikedFort />
          </Link>

          <Link to="/rattlesnake">
            <LikedRattle />
          </Link>

          <Link to="/garden">
            <LikedGarden />
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Liked;
