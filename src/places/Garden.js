import React from "react";
import "../Info.css";
import { IconContext } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";

function Garden() {
  return (
    <div className="App">
      <header className="header">
        <span className="title">Timber</span>
        <div className="logo" />
      </header>

      <div className="info-content-box">
        <img 
          src="http://parkways.seattle.gov/wp-content/uploads/2016/10/SJG-PR_DSC0029-1_-Camille-Lyver-2MB.jpg"
          className="info-loc-img"
          alt="locationpicture"
        >
        </img>
        <div className="info-info">
          <p className="info-loc-title">
            Seattle Japanese Garden, WA
            <IconContext.Provider value={{ color: "SaddleBrown", style: { verticalAlign: 'middle'} }}>
                    <IoLocationSharp className='i-icon' style={{ height: 10, width: 10 }} />
            </IconContext.Provider>
            <span className="info-dis">1.6 mi away</span>
          </p>

          <p className="info-des">
          The Seattle Japanese Garden is a 3.5 acre Japanese garden in the Madison Park neighborhood 
          of Seattle. The garden is located in the southern end of the Washington Park Arboretum on
          Lake Washington Boulevard East.
          </p>

          <p className="info-visit">Events</p>

          <p className="info-ideas">
            • Garden Opening Shinto Blessing
            <br />
            <br />
            • Performances and Poetry of Moon Viewing
            <br />
            <br />
            • Garden Party
            <br />
            <br />
            • Tea Ceremony
            <br />
            <br />
            • Pruning Demonstrations
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Garden;