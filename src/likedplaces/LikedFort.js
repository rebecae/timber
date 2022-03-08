import React from "react";
import "./Liked.css";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

function LikedFort() {
  return (
    <div className="img-container">
      <img
        src="https://whidbeycamanoislands.com/wp-content/uploads/2018/12/34705_Fort-Ebey-State-Park-8708.jpg"
        className="box"
        alt="locationpicture"
      ></img>
      <h3 className="liked-text">
        {" "}
        Fort Ebey, WA
        <br />
          <IconContext.Provider value={{ color: "white" }}>
            <IoLocationSharp style={{ height: 10, width: 10 }} />
          </IconContext.Provider>
          <span className="liked-dis"> 60.3 miles away</span>
      </h3>
    </div>
  );
}

export default LikedFort;
