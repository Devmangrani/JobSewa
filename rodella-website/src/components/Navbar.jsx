// import { navItems } from "../constants/NavItems";
import React, { useState } from "react";
import menuIcon from "../assets/images/menu.png";
import closeIcon from "../assets/images/close.png";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopNavMenu";
import MobMenu from "./MobileNavMenu";
import { Menus } from "./../constants/NavItems"

const Navbar = () => {
  // const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setMobileDrawerOpen(!mobileDrawerOpen);
  // };

  // const closeMobileMenu = () => {
  //   setMobileDrawerOpen(false);
  // };

  return (
    <nav className=" p-2.5 flex items-center justify-between bg-neutral-950 text-white rounded-2xl px-5 sticky w-full max-w-7xl mx-auto opacity-85 z-[999]">
    <div className="flex items-center gap-x-3 relative">
      <Link to="/">
      <h3 className="text-lg">rodella</h3>
      </Link>     
    </div>

    <ul className="gap-x-1 lg:flex items-center hidden">
      {Menus.map((menu) => (
        <Link to={menu.href}>
        <DesktopMenu menu={menu} key={menu.name} />
        </Link>
      ))}
    </ul>
    <div className="flex items-center gap-x-5">

      <Link to="/contact">
      <div className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center p-4">
        Contact Us
      </div>
      </Link>
      <div className="lg:hidden">
        <MobMenu Menus={Menus} />
      </div>
    </div>
  </nav>
  );
};

export default Navbar;


 {/* <div className=" px-5 flex justify-between items-center text-sm lg:block ">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0">
            <Link to="/" className="flex flex-col">
              <h1 className="text-2xl tracking right text-white">rodella</h1>
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
           
            <li className="relative">
              <Link
                to="/blog"
                className="text-white hover:text-gray-300 px-3 py-2 rounded flex items-center"
                // Close mobile menu on click
              >
                Blog
              </Link>
            </li>
           
          </ul>
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r bg-white py-2 px-3 rounded-md text-black"
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
            <li className="py-4 w-full text-center">
              <Link
                to="/services"
                onClick={closeMobileMenu} // Close mobile menu on click
                className="text-white hover:text-gray-300 block"
              >
                Services
              </Link>
            </li>
            <li className="py-4 w-full text-center">
              <Link
                to="/blog"
                onClick={closeMobileMenu} // Close mobile menu on click
                className="text-white hover:text-gray-300 block"
              >
                Blog
              </Link>
            </li>
            <li className="py-4 w-full text-center">
              <Link
                to="/contact"
                onClick={closeMobileMenu} // Close mobile menu on click
                className="text-white hover:text-gray-300 block"
              >
                Contact
              </Link>
            </li>
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
      )} */}