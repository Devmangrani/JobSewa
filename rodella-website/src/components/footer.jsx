import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaCopyright,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center pb-20 pt-15 pr-5 pl-5 text-center">
          <h1 className="text-3xl text-white mb-4">
            We would love to partner with you!
          </h1>
          <p className="text-sm text-white pb-2">
            At Rodella, we truly value and care for our partners. Our commitment
            to you is rooted in respect and collaboration.
          </p>
          <p className="text-sm text-white pb-6">
            Specializing in custom-based drone solutions, we are here to support
            your unique needs and aspirations.
          </p>
          <div className="flex space-x-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-200 to-purple-700 py-3 px-12 rounded-full"
              onClick="#"
            >
              Get in touch with us
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pb-5 gap-x-10 ">
          <div className="flex items-center gap-x-10">
            <a
              href="#"
              className="text-white text-xl flex items-center hidden sm:flex"
            >
              <FaPhone className="mr-2" /> (+91)628163817
            </a>
            <a
              href="#"
              className="text-white text-xl flex items-center hidden sm:flex"
            >
              <FaEnvelope className="mr-2" /> Rodella@gmail.com
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white text-xl flex items-center hidden sm:flex"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/roedlla-aerospace-labs/"
              className="text-white text-xl flex items-center hidden sm:flex"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="#"
              className="text-white text-xl flex items-center hidden sm:flex"
            >
              <FaFacebook className="mr-2" /> Facebook
            </a>
            <a
              href="#"
              className="text-white text-xl flex items-center hidden sm:flex"
            >
              <FaYoutube className="mr-2" /> Youtube
            </a>
          </div>
          {/* Icons for small screens */}
          <div className="flex sm:hidden space-x-4">
            <a href="#" className="text-white text-xl">
              <FaPhone />
            </a>
            <a href="#" className="text-white text-xl">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com" className="text-white text-xl">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/roedlla-aerospace-labs/"
              className="text-white text-xl"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="text-white text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="ml-5 pb-5">
          <p className="text-neutral-500 text-center">
            <FaCopyright className="inline-block mr-2" />
            {currentYear} Rodella Pvt. Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
