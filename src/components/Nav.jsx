import React from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Nike" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
          {navLinks.map((item) => (
            <li className="font-montserrat cursor-pointer text-lg text-slate-gray">{item.label}</li>
          ))}
        </ul>
        <div className="hidden max-lg:block"><img src={hamburger} width={25} height={25}/></div>
      </nav>
    </header>
  );
};

export default Nav;
