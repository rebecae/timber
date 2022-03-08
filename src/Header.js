import React from "react";
import "./App.css";
import { IoHeart } from "react-icons/io5";
import { IoEarth } from "react-icons/io5";
// import { IoCalendar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

function Header() {
  let navigate = useNavigate();
  return (
    <header className="header">
      {/* importing Google font */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      </style>

      {/* Timber logo and title */}
      <div className="logo">
        <span className="title">Timber</span>
      </div>

      {/* Nagivation buttons: earth to explore, heart to liked places */}
      <div className="navigation">
        <IconContext.Provider value={{ color: "SaddleBrown" }}>
          <button
            className="i-button"
            onClick={() => {
              navigate("/");
            }}
          >
            <IoEarth style={{ height: 30, width: 30 }} className="earth" />
          </button>

          <button
            className="i-button"
            onClick={() => {
              navigate("/liked");
            }}
          >
            <IoHeart style={{ height: 30, width: 30 }} className="heart" />
          </button>
          
          {/* button to navigate to scheduling component
          (may not implement) */}
          {/* <button
            className="i-button"
            onClick={() => {
              navigate("/schedule");
            }}
          >
            <IoCalendar
              style={{ height: 30, width: 30 }}
              className="calender"
            />
          </button> */}
        </IconContext.Provider>
      </div>
    </header>
  );
}

export default Header;
