import React from "react";
import "./Logo.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src={logo} alt="tello" />
        <h2>Tello</h2>
      </Link>
    </div>
  );
};

export default Logo;
