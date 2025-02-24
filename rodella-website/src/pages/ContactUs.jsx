import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
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
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-gray-900 text-white">
      {/* Left Section: Contact Information */}
      <div className="flex-1 flex flex-col justify-start p-8">
        <h1 className="section-title text-white text-5xl font-Gilroy mb-10 text-center">
          Contact Us
        </h1>

        <div className="contact__us_text bg-[#24253C] p-4 rounded-lg mb-10 text-center">
          <p className="text-white text-lg font-Gilroy">
            Have a question about our custom drone solutions? Fill out the form
            below, and our experts will get back to you as soon as possible. For
            urgent inquiries, reach us through the contact details provided.
          </p>
        </div>

        <div className="contact_us_contacts bg-[#24253C] p-4 rounded-lg mb-10 text-center">
          <p className="text-white text-lg font-Gilroy mb-2">
            Contact Details:
          </p>
          <p className="text-white text-lg font-Gilroy mb-2">
            4, Mount View Villas, Kolar Rd, Chuna Bhatti, Bhopal, Madhya Pradesh
            462016
          </p>
          <div className="flex items-center justify-center mb-2">
            <FaPhone className="text-blue-400 mr-2 text-xl" />
            <p className="text-white text-lg font-Gilroy">063808 97553</p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <FaEnvelope className="text-blue-400 mr-2 text-xl" />
            <p className="text-white text-lg font-Gilroy">
              support@rodella.com
            </p>
          </div>
        </div>

        <div className="contact_us_socials bg-[#24253C] p-4 rounded-lg mb-4 text-center">
          <h3 className="contact__us_socials--title text-white text-lg font-Gilroy mb-2">
            Follow us for updates
          </h3>
          <div className="flex space-x-4 justify-center">
            <FaLinkedin className="text-white hover:text-blue-500 transition text-2xl" />
            <FaTwitter className="text-white hover:text-blue-400 transition text-2xl" />
            <FaYoutube className="text-white hover:text-red-600 transition text-2xl" />
            <FaInstagram className="text-white hover:text-pink-500 transition text-2xl" />
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 w-full md:w-1/2">
        <div className="contact_us_form bg-[#24253C] p-8 rounded-lg w-full">
          <form
            className="flex flex-col w-full space-y-4"
            onSubmit={handleSubmit}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#1C1B2C] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              style={{ height: "54px" }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#1C1B2C] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              style={{ height: "54px" }}
            />
            <motion.textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              className="bg-[#1C1B2C] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              rows="8"
              style={{ height: "350px" }}
            />
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-md mt-4 w-full"
              style={{ height: "48px" }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
