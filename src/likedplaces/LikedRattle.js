import React from "react";
import "./Liked.css";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function LikedRattle() {
  return (
    <div className="img-container">
      <img
        src="https://live.staticflickr.com/7408/16481389086_2f5c96f1c9_b.jpg"
        className="box"
        alt="locationpicture"
      ></img>
      <h3 className="liked-text">
        {" "}
        Rattlesnake Lake, WA
        <br />
          <IconContext.Provider value={{ color: "white" }}>
            <IoLocationSharp style={{ height: 10, width: 10 }} />
          </IconContext.Provider>
          <span className="liked-dis"> 36 miles away</span>
      </h3>
    </div>
  );
}

export default LikedRattle;
