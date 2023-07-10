import React from "react";
import "./EmptyBasket.scss";
import ShoppingCart from "../../../assets/shopping-cart.svg";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const EmptyBasket = () => {
  return (
    <div className="empty container">
      <div className="empty-content">
        <img src={ShoppingCart} alt="cart" />
        <h3>Səbətiniz halhazırda boşdur</h3>
        <Link to={"/"}>
          <Button btn={"Alış-verişə davam et"} />
        </Link>
      </div>
    </div>
  );
};

export default EmptyBasket;
