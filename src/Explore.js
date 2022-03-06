import React from "react";
import "./Explore.css";
import { FaTimesCircle } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import TinderCards from './TinderCards';
// import swipe from 'react-tinder-card';
// import {useRef} from 'react';
 
function Explore() {
  // let navigate = useNavigate();

  return (
    <div className="App">
      <header className='header'> 
        <span className='title'>Timber</span>
        <div className='logo' />
      </header>

      <div className='explore-content-box'>
        <TinderCards />

        <div className="like-dislike" >
          <IconContext.Provider value={{ color: 'SaddleBrown' }}>
            <button 
              className="dislike"
            >
                <FaTimesCircle  style={{height:100, width:100}}/>
            </button>
            <button className="like">
                <IoHeartCircle  style={{height:120, width:120}}/>
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
    

  );
}

export default Explore;