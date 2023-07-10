import React from "react";
import "./LoginImage.scss";
import Loginimage from "../../../assets/login.png";
import { Link } from "react-router-dom";


const LoginImage = ({ page, message,question }) => {
  return (
    <div className="loginImage">
      <img src={Loginimage} alt="login" />
      <div className="login-quest">
        <span>{question}</span>
        <Link to={page}>{message}</Link>
      </div>
    </div>
  );
};

export default LoginImage;
