import React from "react";
import "./Liked.css";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function LikedGranite() {
  return (
    <div className="img-container">
      <img
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/granite-falls-washington-miles-bergsma.jpg"
        className="box"
        alt="locationpicture"
      ></img>
      <h3 className="liked-text">
        {" "}
        Granite Falls, WA
        <br />
          <IconContext.Provider value={{ color: "white" }}>
            <IoLocationSharp style={{ height: 10, width: 10 }} />
          </IconContext.Provider>
          <span className="liked-dis"> 41.6 miles away</span>
      </h3>
    </div>
  );
}

export default LikedGranite;
