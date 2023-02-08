import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "../../StyleSheet/MobileNavBar.css";
const MobileNavBar = () => {
  return (
    <div className="MobileNav__container">
      <Link to="/" className="Logo__container">
        <img src={logo} alt="Company-Logo" />
      </Link>
    </div>
  );
};

export default MobileNavBar;
