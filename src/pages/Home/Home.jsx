import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import NewProducts from "./Product/NewProducts";
import BestSellers from "./Product/BestSellers";
import Brand from "./Carousel/Brand/Brand";
import About from "./About/About";
import Introduction from "../../components/Introduction/Introduction";
import Link from "../../components/Link/Link";
import BigCards from "../../components/Introduction/BigCards/BigCards";
import Box from "../../assets/box.png";
import Cardpos from "../../assets/card-pos.png";
import Guarantee from "../../assets/guarantee.png";
import Accessories from "./Product/Accessories";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <div className="homePage container">
        <Link title={"Ən çox satılan məhsullar"} />
        <BestSellers />
        <Link title={"Yeni gələn məhsullar"} />
        <NewProducts />
        <Introduction />
        <Link title={"Yeni gələn aksessuarlar"} />
        <Accessories />
        <BigCards />
        <div className="about-cont">
          <About image={Box} title={"Çatdırılma"} />
          <About image={Cardpos} title={"Kredit"} />
          <About image={Guarantee} title={"Zəmanət"} />
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default Home;
