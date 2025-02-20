import logo from "../assets/images/logo.svg";
import { navItems } from "../constants/index.jsx";
import React, { useState } from "react";
import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [isAircraftOpen, setIsAircraftOpen] = useState(null);

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleAircraftsClickMobile = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsAircraftOpen(!isAircraftOpen);
  };

  const closeMobileMenu = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 py-3 bg-gray-950/75 z-50">
      <div className="container px-3 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-10 mr-2 bg-gray-200 rounded-full"
                src={logo}
                alt="logo"
              />
              <span className="text-2xl tracking right text-white">
                Rodella
              </span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => {
                  if (item.submenu) {
                    setIsAircraftOpen(item.label === "Aircrafts");
                  }
                }}
                onMouseLeave={() => {
                  if (item.submenu) {
                    setIsAircraftOpen(false);
                  }
                }}
              >
                <Link
                  to={item.href}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded flex items-center"
                  onClick={closeMobileMenu} // Close mobile menu on click
                >
                  {item.label}
                </Link>
                {item.submenu && isAircraftOpen && (
                  <ul className="absolute z-10 bg-gray-800 rounded-md shadow-lg mt-2 w-25 left-0">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 text-orange-400 hover:bg-gray-600 whitespace-nowrap hover:rounded-md"
                          onClick={closeMobileMenu} // Close mobile menu on click
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              onClick={closeMobileMenu} // Close mobile menu on click
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <img src={closeIcon} alt="close-menu" className="h-6 w-6" />
              ) : (
                <img src={menuIcon} alt="open-menu" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
            onClick={closeMobileMenu} // Close mobile menu on click outside
          >
            <ul className="flex flex-col items-center">
              {navItems.map((item) => (
                <li key={item.label} className="py-4 w-full text-center">
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu} // Close mobile menu on click
                    className="text-white hover:text-gray-300 block"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && isAircraftOpen && (
                    <ul className="mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.href}
                            className="text-white hover:text-gray-300 block"
                            onClick={closeMobileMenu} // Close mobile menu on click
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                onClick={closeMobileMenu} // Close mobile menu on click
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer for Small Screens */}
      <footer className="fixed bottom-0 left-0 right-0 text-white py-2 flex justify-around items-center lg:hidden z-40">
        <Link to="#" className="flex flex-col items-center">
          <FaPhone />
          <span className="text-xs">Call</span>
        </Link>
        <Link to="#" className="flex flex-col items-center">
          <FaEnvelope />
          <span className="text-xs">Email</span>
        </Link>
        <Link to="#" className="flex flex-col items-center">
          <FaInstagram />
          <span className="text-xs">Insta</span>
        </Link>
        <Link to="#" className="flex flex-col items-center">
          <FaLinkedin />
          <span className="text-xs">LinkedIn</span>
        </Link>
        <Link to="#" className="flex flex-col items-center">
          <FaYoutube />
          <span className="text-xs">YouTube</span>
        </Link>
      </footer>
    </nav>
  );
};

export default Navbar;
