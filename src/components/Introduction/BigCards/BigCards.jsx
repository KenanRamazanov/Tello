import React from "react";
import "./BigCards.scss";
import { Link } from "react-router-dom";
import BannerIcon from "../../../assets/banner-icon.svg";
import Xiaomi from "../../../assets/xiaomi6.png";
import SmartWatch from "../../../assets/smart watch.png";
import Aksesuar from "../../../assets/aksesuar.png";
const Banner = ({ width, title, nameProducts }) => {
  return (
    <div className="banner-container">
      <div className="banner first " style={{ width: `${width}%` }}>
        <div className="banner-title">
          <h3>Telefon</h3>
          {/* <span>Məhsul sayı: 322</span> */}
          <Link to={"/products/all-phones"}>
            Məhsullara keçid
            <img src={BannerIcon} alt="icon" />
          </Link>
        </div>
        <div className="bannerImg">
          <img className="xiaomi" src={Xiaomi} alt="Xiaomi" />
        </div>
      </div>
      <div className="other">
        <div className="banner small" style={{ width: `${width}%` }}>
          <div className="banner-title">
            <h3>Smart Saat</h3>
            {/* <span>Məhsul sayı: 322</span> */}
            <Link to={"/products/smart-saatlar"}>
              Məhsullara keçid
              <img src={BannerIcon} alt="icon" />
            </Link>
          </div>
          <div className="bannerImg">
            <img className="smartWatch" src={SmartWatch} alt="Xiaomi" />
          </div>
        </div>
        <div className="banner small">
          <div className="banner-title">
            <h3>Aksesuar</h3>
            {/* <span>Məhsul sayı: 322</span> */}
            <Link to={"/products/aksesuarlar"}>
              Məhsullara keçid
              <img src={BannerIcon} alt="icon" />
            </Link>
          </div>
          <div className="bannerImg">
            <img className="aksesuar" src={Aksesuar} alt="Xiaomi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
