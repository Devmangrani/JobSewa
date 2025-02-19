import logo from "../assets/images/logo.svg";
import { navItems } from "../constants/index.jsx";
import React, { useState } from "react";
import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";
import { Link } from "react-router-dom";

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

  return (
    <nav className="sticky top-0 py-3 bg-gray-950/75">
      <div className="container px-3 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-10 mr-2 bg-gray-200 rounded-full"
                src={logo}
                alt="logo"
              ></img>
              <span className="text-2xl tracking right text-white">Rodella</span>
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
                    //bug at the submenu
                    // Check if mouse is still within the submenu before closing
                    // const submenu = document.querySelector(`#${item.label}-submenu`); // Use ID
                    // if (submenu && !submenu.matches(':hover')) { // Check if submenu is NOT hovered
                    //     setIsAircraftOpen(false);
                    // }
                  }
                  setIsAircraftOpen(false);
                }}
              >
                <a
                  href={item.href}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded flex items-center"
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.label}
                </a>
                {item.submenu &&
                  isAircraftOpen && ( // Check if submenu exists
                    <ul className="absolute z-10 bg-gray-800 rounded-md shadow-lg mt-2 w-25 left-0">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <a
                            href={subItem.href}
                            className="block px-4 py-2 text-orange-400 hover:bg-gray-600 whitespace-nowrap hover:rounded-md"
                          >
                            {subItem.label}
                          </a>
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
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <img src={closeIcon} alt="close-menu" className="h-6 w-6"></img>
              ) : (
                <img src={menuIcon} alt="open-menu" className="h-6 w-6"></img>
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="flex flex-col items-center">
              {" "}
              {/* Vertical alignment */}
              {navItems.map((item) => (
                <li key={item.label} className="py-4 w-full text-center">
                  {" "}
                  {/* Full width, centered text */}
                  <a
                    href={item.href}
                    onClick={item.submenu ? handleAircraftsClickMobile : null} // Handle click for Aircrafts
                    className="text-white hover:text-gray-300 block" // Make links block elements
                  >
                    {item.label}
                  </a>
                  {item.submenu &&
                    isAircraftOpen && ( // Mobile submenu
                      <ul className="mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.href}
                              className="text-white hover:text-gray-300 block"
                            >
                              {subItem.label}
                            </a>
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
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
