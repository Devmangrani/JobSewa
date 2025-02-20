import React, { useState } from "react";
import { motion } from "framer-motion";
import droneImage from "../assets/images/drone.png"; // Ensure this path is correct
import HomeBgVideo from "../assets/videos/video1.mp4"; // Import the video
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
        src={HomeBgVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="flex flex-col lg:flex-row items-center justify-center h-full text-white bg-opacity-70">
        <div className="w-full lg:w-1/2 flex justify-center hidden lg:flex">
          <motion.img
            src={droneImage}
            alt="Drone"
            className="w-5/5 h-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6">
          <motion.h1
            className="text-5xl mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <p className="text-lg mb-6">We'd love to hear from you!</p>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 mb-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 mb-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 mb-4 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              rows="4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded-md hover:opacity-80 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
      <footer className="bg-transparent text-white py-4 px-4 mb-4 hidden lg:flex">
        <div className="flex md:flex-row lg:flex-row justify-between items-center">
          <ul className="flex space-x-15">
            <li>
              <a href="#">
                <FaPhone className="inline-block mr-2"></FaPhone>
                (+91)628163817
              </a>
            </li>
            <li>
              <a href="#">
                <FaEnvelope className="inline-block mr-2"></FaEnvelope>
                Rodella@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram className="inline-block mr-2"></FaInstagram>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/roedlla-aerospace-labs/">
                <FaLinkedin className="inline-block mr-2"></FaLinkedin>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="inline-block mr-2"> </FaYoutube>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
