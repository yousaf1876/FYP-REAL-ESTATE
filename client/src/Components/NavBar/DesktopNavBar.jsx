import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "../../StyleSheet/DesktopNavBar.css";
const DesktopNavBar = () => {
  return (
    <div className="DesktopNav__container">
      <div className="DesktopNav__leftContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="DesktopNav__rightContainer">
        <Link to="/properties/sale" className="links">
          <h2 className="link">For Sale</h2>
        </Link>
        <Link className="links" to="/properties/rent">
          <h2 className="link">To Rent</h2>
        </Link>
        <Link className="links" to="/properties/sell">
          <h2 className="link">Sell Your Property</h2>
        </Link>
        <Link className="links" to="/costcal">
          <h2 className="link">Cost Calculation</h2>
        </Link>
        <Link className="links" to="/mapdesign">
          <h2 className="link">Map Dseign</h2>
        </Link>
        <Link className="links" to="/unit-converter">
          <h2 className="link">Area Unit Converter</h2>
        </Link>
        <Link className="links" to="/contact-us">
          <h2 className="link">Contact Us</h2>
        </Link>
        <Link className="links" to="/register-here">
          <h2 className="link">Register</h2>
        </Link>
        <Link className="links" to="/login-here">
          <h2 className="link">Login</h2>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavBar;
