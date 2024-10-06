import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index";
import menu from '/menu.svg';
import  close  from '/close.svg';

const Navbar = () => {
  return (
    <nav
    className={`
      ${styles.paddingx}} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={()=>{
              window.scrollTo(0,0);
            }}>
              <img src="https://www.pngkit.com/png/detail/154-1545805_portfolio-icons-code-web-development-logo.png" alt="logo" className="w-9 h-9 object-contain"/>
              <p className="text-white text-[18px] font-bold cursor-pointer">Shaily <span className="sm:block hidden">Developer</span></p>
          </Link>

        </div>

    </nav>
  )
}

export default Navbar