import React from "react";
import "./Explore.css";
import {GrCircleInformation} from "react-icons/gr";
import { FaTimesCircle } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
 
function Explore() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className='header'> 
        <span className='title'>Timber</span>
        <div className='logo' />
      </header>

      <div className='content-box'>
        <div className='loc-img'>
          <div className='loc-name'> 
            <p> 
              Granite Falls, WA

              <button className="info-button"
                onClick={() => {
                  navigate('/info');
                }}
              >
                <GrCircleInformation  style={{height:20, width:20}} />
              </button><br/>
              
              <span className='dis'>41.6 mi away</span>
            </p>
          </div>
        </div> 

        <div className="like-dislike" >
          <FaTimesCircle  style={{height:100, width:100}}/>
          <IoHeartCircle  style={{height:120, width:120}}/>

        </div>
      </div>
    </div>
    

  );
}

export default Explore;