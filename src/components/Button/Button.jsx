import React from "react";
import "./Button.scss";

const Button = ({ btn, img,  }) => {
  return (
    <button className="button">
      <img src={img} alt="" />
      {btn}
    </button>
  );
};

export default Button;
