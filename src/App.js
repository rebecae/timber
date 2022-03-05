import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './Explore';
import Info from './Info';
import Schedule from './Schedule';

function App() {
  return  (
  <Router>
    <Routes>
      <Route path='/' element={<Explore />} />
      <Route path='/info' element={<Info />} />
      <Route path='/schedule' element={<Schedule />} />
    </Routes>
  </Router>
  );
}

export default App;
