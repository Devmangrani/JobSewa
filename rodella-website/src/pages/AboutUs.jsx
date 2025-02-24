import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import teamImage from "../assets/images/drone.png"; // Ensure you have a high-quality image in this path


const AboutUs = () => {
  return (
    <div>
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background Section */}
      <div className="absolute inset-0 z-0"></div> {/* Fixed background */}
      {/* Content Section */}
      <div className="relative z-10 text-gray-800 overflow-y-auto h-screen">
        {/* Hero Section */}
        <motion.div
          className="text-white py-20 text-center"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
            Our Mission
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering individuals through education and innovation.
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div
          className="container mx-auto px-4 py-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for staggered effect
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r  from-purple-400 to-purple-700 text-transparent bg-clip-text">
            About Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white">
            Founded by a group of passionate educators, we aim to provide the
            best learning experiences for our students. Our goal is to inspire
            and empower individuals to reach their full potential.
          </p>
        </motion.div>

        {/* Statistical Summary */}
        <motion.div
          className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} // Delay for staggered effect
        >
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold">10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold">200+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold">5000+</h3>
            <p>Students Impacted</p>
          </div>
        </motion.div>

        {/* Team Image */}
        <motion.div
          className="container mx-auto px-4 py-10"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animate to this state
          transition={{ duration: 0.5, delay: 0.6 }} // Delay for staggered effect
        >
          <img
            src={teamImage}
            alt="Our Team"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/learning-path" className="hover:text-blue-400">
                Learning Path
              </Link>
              <Link to="/challenge" className="hover:text-blue-400">
                Challenge
              </Link>
              <Link to="/testimonial" className="hover:text-blue-400">
                Testimonial
              </Link>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </div>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
