import React from "react";
import "../Info.css";
import { IconContext } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";


function Paradise() {
  return (
    <div className="App">
      <header className="header">
        <span className="title">Timber</span>
        <div className="logo" />
      </header>

      <div className="info-content-box">
        <img 
          src="https://visitrainier.com/wp-content/uploads/2014/04/RAI.2113.H.RAINIER-2.jpg"
          className="info-loc-img"
          alt="locationpicture"
        >
        </img>
        <div className="info-info">
          <p className="info-loc-title">
            Paradise, WA 
            <IconContext.Provider value={{ color: "SaddleBrown", style: { verticalAlign: 'middle'} }}>
                    <IoLocationSharp className='i-icon' style={{ height: 10, width: 10 }} />
            </IconContext.Provider>
            <span className="info-dis">112 mi away</span>
          </p>

          <p className="info-des">
            Paradise is the name of an area at approximately 5,400 feet on the
            south slope of Mount Rainier in Mount Rainier National Park in
            Washington, United States. The area lies on the border of Pierce and
            Lewis counties and includes the Paradise Valley and the Paradise
            Glacier which is the source of the Paradise River.
          </p>

          <p className="info-visit">Places to Visit</p>

          <p className="info-ideas">
            • Paradise Valley
            <br />
            <br />
            • Narada Falls
            <br />
            <br />
            • Henry M. Jackson Visitor Center
            <br />
            <br />
            • Myrtle Falls
            <br />
            <br />
            • Camp Muir Trail
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Paradise;
