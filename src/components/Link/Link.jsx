import React from "react";
import More from "../../assets/more.svg";
import { Link } from "react-router-dom";
import "./Link.scss";
const Caption = ({ title }) => {
  return (
    <div className="caption">
      <div className="best-seller">
        <h3>{title}</h3>
      </div>
      <div className="more">
        <Link to={"products/all-phones"}>Hamısına bax</Link>
        <img src={More} alt="more" />
      </div>
    </div>
  );
};

export default Caption;
