// Footer.jsx
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800 py-12">
      <div className="footer-content max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
        {/* About Section */}
        <div className="footer-section about w-full sm:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-xl font-bold mb-4">Job Sewa
          </h2>
          <p className="text-sm mb-4">
           Connecting job seekers with the right opportunities.
          </p>
          <p className="font-semibold text-lg mb-2">1234567890</p>
          <a href="mailto:contact@it-kol.com" className="text-blue-500 hover:underline">
            contact@job-sewa.com
          </a>
        </div>

        {/* Navigation Section */}
        <div className="footer-section navigation w-full sm:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-lg font-semibold mb-4">Job Sewa</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Carrers</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section services w-full sm:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-lg font-semibold mb-4">Privacy Policy</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Security</a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-600 transition">Trust & Safety</a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section subscribe w-full sm:w-1/4">
          <h2 className="text-lg font-semibold mb-4">Subscribe Job Sewa</h2>
          <p className="text-sm mb-4">
            Subscribe to our Job Sewa to get updates about our services and offers.
          </p>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              →
            </button>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }}/>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }}/>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                <FontAwesomeIcon icon={faLinkedin}  style={{ color: "#0A66C2" }}/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-8"></div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-4">
        <p className="text-gray-500 text-sm">
          © 2024 Job Sewa. All rights reserved 
        </p>
      </div>
    </footer>
  );
}
