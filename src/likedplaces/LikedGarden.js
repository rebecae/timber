import React from "react";
import "./Liked.css";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function LikedGarden() {
  return (
    <div className="img-container">
      <img
        src="http://parkways.seattle.gov/wp-content/uploads/2016/10/SJG-PR_DSC0029-1_-Camille-Lyver-2MB.jpg"
        className="box"
        alt="locationpicture"
      ></img>
      <h3 className="liked-text">
        {" "}
        Japanese Garden, WA
        <br />
          <IconContext.Provider value={{ color: "white" }}>
            <IoLocationSharp style={{ height: 10, width: 10 }} />
          </IconContext.Provider>
          <span className="liked-dis"> 1.6 miles away</span>
      </h3>
    </div>
  );
}

export default LikedGarden;
