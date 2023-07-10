import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const SliderSelect = ({ images, currentVariant }) => {
  if (currentVariant?.color?.assets) {
    images = images.filter((el) => {
      return currentVariant?.color?.assets.includes(el.id);
    });
  }
  const settings = {
    customPaging: function (i) {
      return (
        <a href="/">
          <img src={images[i]?.url} alt="product-photo" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  };
  return (
    <div className="product-slider">
      <Slider {...settings}>
        {images?.map((el, index) => {
          return (
            <div key={index}>
              <img src={el.url} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderSelect;
