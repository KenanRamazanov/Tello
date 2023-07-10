import React, { useState } from "react";
import "./Main.scss";
import AZN from "../../../assets/azn.svg";
import Delete from "../../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import { updateCard, removeCard } from "../../../store/actions/card";
import { ToastContainer, toast } from "react-toastify";
import {useDispatch } from "react-redux";

const Main = ({
  name,
  price,
  image,
  quantity,
  item_id,
  product_id,
  options,
}) => {
  const dispatch = useDispatch();
  const colorName = options?.find((el) => el.group_name == "color");
  const [productQuantity, setQuantity] = useState(quantity);
  const navigate = useNavigate();
  const handleDecrement = () => {
    if (productQuantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(updateCard({ id: item_id, quantity: productQuantity - 1 }));
    } else {
      dispatch(removeCard(item_id));
    }
  };
  const notifyMeError = () => {
    toast.warning("Seçilən sayda məhsul yoxdur!");
  };

  const handleIncrement = () => {
    if (productQuantity < 5) {
      setQuantity((prev) => prev + 1);
      dispatch(updateCard({ id: item_id, quantity: productQuantity + 1 }));
    } else {
      notifyMeError();
    }
  };
  const deleteFromCard = () => {
    dispatch(removeCard(item_id));
  };
  const goToProduct = () => {
    navigate(`/details/${product_id}`);
  };

  return (
    <div className="mainCart">
      <div onClick={goToProduct} className="cart-photo">
        <img src={image} alt="phone" />
      </div>
      <div className="content">
        <span className="name">{name}</span>
        <div className="cart-detail">
          {colorName && (
            <div className="card-color">
              <span className="color">Rəng:</span>
              <span> {colorName.option_name}</span>
            </div>
          )}

          <span className="price">
            {price} <img src={AZN} alt="AZN" />
          </span>
        </div>
      </div>
      <div className="numberCarts">
        <button onClick={handleDecrement}>-</button>
        <span>{productQuantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <img
        onClick={deleteFromCard}
        className="deleteIcon"
        src={Delete}
        alt="delete"
      />
      <ToastContainer />
    </div>
  );
};

export default Main;
