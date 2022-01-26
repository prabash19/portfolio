import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/Navbar.css";
import { Link } from "react-scroll";

import userrr from "../images/four.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        {/* <img src={userrr} alt="" /> */}
        <a href="/Hero" className="logo"></a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Projects{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Contact{" "}
            </Link>
          </li>
          <li className="nav-item"></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
