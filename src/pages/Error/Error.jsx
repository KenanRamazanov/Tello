import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.scss";
import ErrorImage from "../../assets/error.png";
import Error404 from "../../assets/404.png";

const Error = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload();
  };
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="error ">
      <div className="error-message">
        <h2>Oops!</h2>
        <h4>Something went wrong...</h4>
        {/* <button onClick={refreshPage}>Refresh Page</button> */}
        <button onClick={navigateHome}>Go to Home Page</button>
      </div>
      <div className="errorImg">
        {/* <img src={ErrorImage} alt="ErrorImage" /> */}
      </div>
      <img className="err-404" src={Error404} alt="404" />
    </div>
  );
};

export default Error;
