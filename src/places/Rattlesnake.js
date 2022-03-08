import React from "react";
import "../Info.css";
import { IconContext } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";
import Header from "../Header";

function Rattlesnake() {
  return (
    <div className="App">
      <Header />
      <div className="info-content-box">
        <img 
          src="https://live.staticflickr.com/7408/16481389086_2f5c96f1c9_b.jpg"
          className="info-loc-img"
          alt="locationpicture"
        >
        </img>
        <div className="info-info">
          <p className="info-loc-title">
            Rattlesnake Lake, WA
            <IconContext.Provider value={{ color: "SaddleBrown", style: { verticalAlign: 'middle'} }}>
                    <IoLocationSharp className='i-icon' style={{ height: 10, width: 10 }} />
            </IconContext.Provider>
            <span className="info-dis">36 mi away</span>
          </p>

          <p className="info-des">
            Rattlesnake Lake is a lake in the northwest United States, located in Rattlesnake
            Mountain Scenic Area in King County, Washington, approximately thirty miles east
            of Seattle, south of Interstate 90.
          </p>

          <p className="info-visit">Places to Visit</p>

          <p className="info-ideas">
            • Rattlesnake Lake Trail
            <br />
            <br />
            • Rattlesnake Mountain Trail
            <br />
            <br />
            • Cascades State Park Trail
            <br />
            <br />
            • Snoqualmie Valley Trail
            <br />
            <br />
            • Cedar River Watershed Education Center
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rattlesnake;