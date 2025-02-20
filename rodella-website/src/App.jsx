import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import HomeBgVideo from "../src/assets/videos/video1.mp4";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-45 -z-50"
          src={HomeBgVideo}
          autoPlay
          muted
          loop
        ></video>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
