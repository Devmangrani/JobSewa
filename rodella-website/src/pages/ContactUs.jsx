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
import Navbar from "../components/Navbar";

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
    <section className="pt-2 bg-neutral-300">
      <Navbar />
 
      <div className="container mx-auto max-w-4xl px-4 py-8 text-gray-800">
        <h1 className="section-title text-gray-800 text-5xl font-Gilroy mb-10 text-center">
          Contact Us
        </h1>

        <div className="grid gap-8">
          {/* Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-800 text-lg font-Gilroy">
              Have a question about our custom drone solutions? Fill out the
              form below, and our experts will get back to you as soon as
              possible. For urgent inquiries, reach us through the contact
              details provided.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
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
                className="bg-gray-100 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                style={{ height: "54px" }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                style={{ height: "54px" }}
              />
              <motion.textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-100 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                rows="8"
                style={{ height: "200px" }}
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

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-800 text-lg font-Gilroy mb-2">
              Contact Details:
            </p>

            <div className="flex items-center justify-center mb-2">
              <FaPhone className="text-blue-500 mr-2 text-xl" />
              <p className="text-gray-800 text-lg font-Gilroy">063808 97553</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2 text-xl" />
              <p className="text-gray-800 text-lg font-Gilroy">
                support@rodella.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
