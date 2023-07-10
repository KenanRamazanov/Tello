import React from "react";
import "./Card.scss";
import azn from "../../assets/azn-symbol.svg";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, image, price }) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div onClick={onClickCard} className="card">
      <div className="productImg">
        <img src={image} alt="product" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="price">
          <span>{price} </span>
          <img src={azn} alt="manat" />
        </div>
      </div>
    </div>
  );
};

export default Card;
