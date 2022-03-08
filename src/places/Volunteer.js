import React from "react";
import "../Info.css";
import { IconContext } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";
import Header from "../Header";

function Volunteer() {
  return (
    <div className="App">
      <Header />

      <div className="info-content-box">
        <img 
          src="https://lh3.googleusercontent.com/d13h3eiuCx6J7IuXVQn16sy75zKHawmBzRHRjf5Ju_vidG2DExXo53-6OUZJbALvLlZyAmG_NW738VTdOjbn4cs7U9Ge5SsHSR9Q7DnzOU8nZVXr5HzP0TItiC4fFYp4L-3jj0QYqA=w2400"
          className="info-loc-img"
          alt="locationpicture"
        >
        </img>
        <div className="info-info">
          <p className="info-loc-title">
          Volunteer Park Conservatory, WA
            <IconContext.Provider value={{ color: "SaddleBrown", style: { verticalAlign: 'middle'} }}>
                    <IoLocationSharp className='i-icon' style={{ height: 10, width: 10 }} />
            </IconContext.Provider>
            <span className="info-dis">1.8 mi away</span>
          </p>

          <p className="info-des">
          The Volunteer Park Conservatory is a botanical garden, conservatory, and Seattle landmark 
          located in Seattle, Washington at the north end of Volunteer Park on Capitol Hill. 
          Made up of 3,426 glass panes fit into a wood and iron framework, this Victorian-style 
          greenhouse structure is modeled on London's Crystal Palace.
          </p>

          <p className="info-visit">Places to Visit</p>

          <p className="info-ideas">
            • Volunteer Park Water Tower
            <br />
            <br />
            • Volunteer Park Amphitheater
            <br />
            <br />
            • Art Insallations
            <br />
            <br />
            • Seattle Asian Art Museum 
            <br />
            <br />
            • Spray parks and wading pools
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;