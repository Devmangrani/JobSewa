import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Aircrafts from "./pages/Aircrafts";
import Services from "./pages/Services";
import Footer from "./components/footer";
import Multirotor from "./pages/Multirotors";
import FixedWing from "./pages/FixedWing";
import Engineering from "./pages/Engineering";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aircrafts" element={<Aircrafts />} />
          <Route path="/multirotor/:id" element={<Multirotor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/multirotor" element={<Multirotor />} /> */}
          <Route path="/fixedwing" element={<FixedWing />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
