import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Explore";
import Info from "./Info";
import Schedule from "./Schedule";
import Paradise from "./places/Paradise";
import Granite from "./places/Granite";
import Fort from "./places/Fort";
import Volunteer from "./places/Volunteer";
import Rattlesnake from "./places/Rattlesnake";
import Garden from "./places/Garden";
import Liked from "./Liked";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/info" element={<Info />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/paradise" element={<Paradise />} />
        <Route path="/granite-falls" element={<Granite />} />
        <Route path="/fort-ebey" element={<Fort />} />
        <Route path="/volunteer-park" element={<Volunteer />} />
        <Route path="/rattlesnake" element={<Rattlesnake />} />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </Router>
  );
}

export default App;
