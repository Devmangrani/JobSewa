import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Aircrafts from "./pages/Aircrafts";
import Services from "./pages/Services";
=======
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Aircrafts from "./components/Aircrafts";
import Services from "./components/Services";
>>>>>>> 9e8f82c (add footer to the main app)
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
