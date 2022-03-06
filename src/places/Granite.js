import React from "react";
import "../Info.css";
import { IconContext } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";

function Granite() {
  return (
    <div className="App">
      <header className="header">
        <span className="title">Timber</span>
        <div className="logo" />
      </header>

      <div className="info-content-box">
        <img 
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/granite-falls-washington-miles-bergsma.jpg"
          className="info-loc-img"
          alt="locationpicture"
        >
        </img>
        <div className="info-info">
          <p className="info-loc-title">
            Granite Falls, WA 
            <IconContext.Provider value={{ color: "SaddleBrown", style: { verticalAlign: 'middle'} }}>
                    <IoLocationSharp className='i-icon' style={{ height: 10, width: 10 }} />
            </IconContext.Provider>
            <span className="info-dis">41.6 mi away</span>
          </p>

          <p className="info-des">
            Granite Falls is a city in Snohomish County, Washington, United States. 
            It is located between the Pilchuck and Stillaguamish rivers in the western 
            foothills of the Cascade Range, northeast of Lake Stevens and Marysville.
          </p>

          <p className="info-visit">Places to Visit</p>

          <p className="info-ideas">
            • Big Four Ice Caves
            <br />
            <br />
            • Heather Lake Trail
            <br />
            <br />
            • Lime Kilm Trail
            <br />
            <br />
            • Granite Falls Fish Ladder
            <br />
            <br />
            • Robe Canyon Historic Trail
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Granite;