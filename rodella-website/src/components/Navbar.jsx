import React, { useState } from "react";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopNavMenu";
import MobMenu from "./MobileNavMenu";
import { Menus } from "./../constants/NavItems"

const Navbar = () => {

  return (
    <nav className=" py-3 flex items-center justify-between bg-neutral-900 text-white rounded-2xl px-8 sticky w-full max-w-[96rem] mx-auto opacity-85 z-[999]">
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
      <div className="bg-neutral-100 text-black z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center p-4">
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