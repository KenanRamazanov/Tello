import React from "react";
import "./Brand.scss";
import Slider from "react-slick";
import Toshiba from "../../../../assets/toshiba.png";
import Hp from "../../../../assets/hp.png";
import Elec from "../../../../assets/elec.png";
import Gorenje from "../../../../assets/gorenje.png";
import Bosch from "../../../../assets/bosch.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="brands">
      <Slider {...settings}>
        <div className="brand-name">
          <img src={Toshiba} alt="Toshiba" />
        </div>
        <div className="brand-name">
          <img src={Hp} alt="Hp" />
        </div>
        <div className="brand-name">
          <img src={Elec} alt="Elec" />
        </div>
        <div className="brand-name">
          <img src={Gorenje} alt="Gorenje" />
        </div>
        <div className="brand-name">
          <img src={Bosch} alt="Bosch" />
        </div>
        <div className="brand-name">
          <img src={Toshiba} alt="Toshiba" />
        </div>
        <div className="brand-name">
          <img src={Hp} alt="Hp" />
        </div>
        <div className="brand-name">
          <img src={Gorenje} alt="Gorenje" />
        </div>
      </Slider>
    </div>
  );
};

export default Brand;
