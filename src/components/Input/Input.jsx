import React from "react";
import "./Input.scss";

const Form = ({ errors, register, name, placeholder, label }) => {
  return (
    <div className="inputGroup">
      <label htmlFor={name}>{label}</label>
      <input {...register} placeholder={placeholder} />
      {errors && <span>Yanlış {label}</span>}
    </div>
  );
};

export default Form;
