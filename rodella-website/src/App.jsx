import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Aircrafts from "./pages/Aircrafts";
import Services from "./pages/Services";
import Footer from "./components/footer";


const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aircrafts" element={<Aircrafts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
