import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Projects</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p className="footer_par">
            © 2021 Prabash Dangi | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
