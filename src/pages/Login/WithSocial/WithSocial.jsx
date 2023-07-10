import React from "react";
import Facebook from "../../../assets/facebook.svg";
import Google from "../../../assets/google.svg";
import "./WithSocial.scss";

const WithSocial = () => {
  return (
    <div className="withSocial">
      <div className="social">
        <div className="facebook">
          <img src={Facebook} alt="Facebook" />
        </div>
        <span>Facebook ilə</span>
      </div>
      <div className="social">
        <div className="google">
          <img src={Google} alt="google" />
        </div>
        <span>Google ilə</span>
      </div>
    </div>
  );
};

export default WithSocial;
