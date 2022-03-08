import React from "react";
import "../Info.css";
import { IconContext } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";
import Header from "../Header";


function Fort() {

  return (
    <div className="App">
      <Header />

      <div className="info-content-box">
        <img 
          src="https://whidbeycamanoislands.com/wp-content/uploads/2018/12/34705_Fort-Ebey-State-Park-8708.jpg"
          className="info-loc-img"
          alt="locationpicture"
        >
        </img>
        <div className="info-info">
          <p className="info-loc-title">
            Fort Ebey, WA 
            <IconContext.Provider value={{ color: "SaddleBrown", style: { verticalAlign: 'middle'} }}>
                    <IoLocationSharp className='i-icon' style={{ height: 10, width: 10 }} />
            </IconContext.Provider>
            <span className="info-dis">60.3 mi away</span>
          </p>

          <p className="info-des">
          Fort Ebey State Park is a public recreation area occupying the site of former Fort Ebey on
           the west side of Whidbey Island, five miles west of Coupeville in Island County,
          Washington, United States.
          </p>

          <p className="info-visit">Places to Visit</p>

          <p className="info-ideas">
            • Lake Pondilla
            <br />
            <br />
            • Bluff Trail
            <br />
            <br />
            • Pacific Northwest Trail
            <br />
            <br />
            • Woodpecker Haven Trail
            <br />
            <br />
            • Ebey's Landing
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fort;