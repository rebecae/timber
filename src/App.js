import './App.css';

function App() {
  return (
    <div className="App">
    <header className='header'> 
      <span className='title'>Timber</span>
      <div className='logo' />
    </header>

    <div className='content-box'>
      <div className='loc-img'>
        <div className='loc-name'> 
          <p> <br/>
          
          </p>
        </div>
      </div> 
      <div className='info'>
        <p className='loc-title'>
            Granite Falls, WA 
            <span className='dis'>41.6 mi away</span>
        </p>

        <p className='des'>
        Granite Falls is a city in Snohomish County, Washington, United States. 
        It is located between the Pilchuck and Stillaguamish rivers in the western 
        foothills of the Cascade Range, northeast of Lake Stevens and Marysville.
        </p>

        <p className='visit'>
          Places to Visit
        </p>

        <p className='ideas'>
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

export default App;
