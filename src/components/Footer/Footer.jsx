import React from "react";
import logo from "../../assets/logo.svg";
import "./Footer.scss";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Copyright from "../../assets/copyright.svg";
import { Link } from "react-router-dom";
import Location from "../../assets/location.svg";
import Mail from "../../assets/mail.svg";
import Call from "../../assets/call.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="columns">
        <div className="footer-logo">
          <Logo />
          <div className="social-medias">
            <img src={Instagram} alt="insta" />
            <img src={Facebook} alt="facebook" />
            <img src={Youtube} alt="youtube" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
        <div className="column">
          <h3 className="title">Menu</h3>
          <ul>
            <li>
              <Link>Yeni</Link>
            </li>
            <li>
              <Link>Endirimlər</Link>
            </li>
            <li>
              <Link>Aksessuarlar</Link>
            </li>
            <li>
              <Link>Bütün brendlər</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3 className="title">Kömək</h3>
          <ul>
            <li>
              <Link to={"/questions"}>Tez-tez soruşulan suallar</Link>
            </li>
            <li>
              <a href="/">Çatdırılma xidməti</a>
            </li>
            <li>
              <a href="/">Geri qaytarılma şərtləri</a>
            </li>
          </ul>
        </div>
        <div className="column ">
          <h3 className="title">Əlaqə</h3>
          <ul className="last">
            <li>
              <a href="/">
                <img src={Location} alt="location" />
                M. K. Ataturk avenue 89, Baku, Azerbaijan
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Mail} alt="" />
                example@gmail.com
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Call} alt="" />
                *2108
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <div className="left">
          <img src={Copyright} alt="Copyright" />
          <span>PeojectX 2021. Bütün hüquqlar qorunur.</span>
        </div>
        <div className="right">
          <span>Qaydalar və şərtlər</span>
          <span>Məxfilik siyasəti</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
