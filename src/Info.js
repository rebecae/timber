import React from "react";
import {GrCircleInformation} from "react-icons/gr";
import "./Info.css";



function Info() {
  return (
    <div className="App">
      <header className='header'> 
        <span className='title'>Timber</span>
        <div className='logo' />
      </header>

      <div className='info-content-box'>
        <div className='info-loc-img'>
          <div className='info-loc-name'> 
            <p> <br/>
            
            </p>
          </div>
        </div> 
        <div className='info-info'>
          <p className='info-loc-title'>
              Granite Falls, WA   
              <span className='info-dis'>41.6 mi away</span>

          </p>

          <p className='info-des'>
          Granite Falls is a city in Snohomish County, Washington, United States. 
          It is located between the Pilchuck and Stillaguamish rivers in the western 
          foothills of the Cascade Range, northeast of Lake Stevens and Marysville.
          </p>

          <p className='info-visit'>
            Places to Visit
          </p>

          <p className='info-ideas'>
          •  Big Four Ice Caves<br />
          <br />
          •  Heather Lake Trail<br />
          <br />
          •  Lime Kilm Trail<br />
          <br />
          •  Granite Falls Fish Ladder<br />
          <br />
          •  Robe Canyon Historic Trail<br />
          </p>
      
        </div>
      </div>
    </div>
  );
}

export default Info;