import logo from "../assets/images/logo.svg";
import { navItems } from "../constants/index.jsx";
import React, { useState } from "react";
import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeMobileMenu = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 py-3 bg-gray-950/75 z-50 rounded-2xl ml-50 mr-50 px-5 shadow-xs shadow-gray-600">
      <div className=" px-5 flex justify-between items-center text-sm lg:block ">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0">
            <Link to="/" className="flex flex-col">
              {/* <img
                className="h-10 w-10 mr-2 bg-gray-200 rounded-full"
                src={logo}
                alt="logo"
              /> */}
              <h1 className="text-2xl tracking right text-white">
                rodella
              </h1>
              {/* <h2 className="text-[10px] tracking right text-white">
                AEROSPACE LABS
              </h2> */}
            </Link>
          </div>
          <ul className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  to={item.href}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded flex items-center"
                  // Close mobile menu on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r bg-white py-2 px-3 rounded-md"
              onClick={closeMobileMenu} // Close mobile menu on click
            >
              Contact Us
            </Link>
          </div>
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
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r bg-white py-2 px-3 rounded-md"
              onClick={closeMobileMenu} // Close mobile menu on click
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
