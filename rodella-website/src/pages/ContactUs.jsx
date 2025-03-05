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
    <section className="pt-2 bg-black">
      <Navbar />

      <div className="container mx-auto max-w-4xl px-4 py-8 text-white">
        <h1 className="section-title text-white text-5xl font-Gilroy mb-10 text-center">
          Contact Us
        </h1>

        <div className="grid gap-8">
          {/* Info Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-300 text-lg font-Gilroy">
              Have a question about our custom drone solutions? Fill out the
              form below, and our experts will get back to you as soon as
              possible. For urgent inquiries, reach us through the contact
              details provided.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
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
                className="bg-gray-700 p-4 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                style={{ height: "54px" }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700 p-4 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                style={{ height: "54px" }}
              />
              <motion.textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-700 p-4 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                rows="8"
                style={{ height: "200px" }}
              />
              <motion.button
                type="submit"
                className=" bg-black text-white py-2 rounded-md mt-4 w-full cursor-pointer"
                style={{ height: "48px" }}
              >
                Submit
              </motion.button>
            </form>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-300 text-2xl font-Gilroy mb-2">
              Love what we do?
            </p>

            <div className="flex items-center justify-center mb-2">
              <p className="text-gray-300 text-lg">You can join our Patreon community and support us!</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-black hover:bg-neutral-600 text-white py-2 px-6 rounded-full transition-colors duration-400"
              >
                Support Us on Patreon
              </a>
            </div>
          </div>


          {/* Contact Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <p className="text-gray-300 text-lg font-Gilroy mb-2">
              Contact Details:
            </p>

            <div className="flex items-center justify-center mb-2">
              <FaPhone className="text-neutral-300 mr-2 text-xl" />
              <p className="text-gray-300 text-lg font-Gilroy">063808 97553</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FaEnvelope className="text-neutral-300 mr-2 text-xl" />
              <p className="text-gray-300 text-lg font-Gilroy">
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
