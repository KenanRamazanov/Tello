import React from "react";
import "./LoginMessage.scss"
import Message from "../../../assets/loginMessage.svg";

const LoginMessage = () => {
  return (
    <div className="login-message">
      <img src={Message} alt="LoginMessage" />
      <p>E - poçt ünvanınızı yoxlayın. Göndərilmiş linkə keçid edin</p>
    </div>
  );
};

export default LoginMessage;
