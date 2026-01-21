import React from "react";
import logo from "../Assets/cinevault-logo.png";
import banner from "../Assets/movies-banner.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="banner">
        <div className="overlay">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row__header">
          <div className="nav__bar">
            <figure className="logo__wrapper">
              <img src={logo} alt="Logo" className="logo" />
            </figure>
            <button className="contact">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
