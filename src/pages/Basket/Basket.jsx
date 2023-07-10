import React, { useEffect, useState } from "react";
import "./Basket.scss";
import Amount from "./Amount/Amount";
import Main from "./Main/Main";
import { getCard } from "../../store/actions/card";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import Loading from "../../components/Loading/Loading";
// import { commerce } from "../../commerce";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const { card, loading } = useSelector((state) => state.card);

  // const ClearAll = () => {
  //   commerce.cart.empty();
  //   notifyMe();
  // };

  useEffect(() => {
    dispatch(getCard());
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!loading && card.total_items === 0) {
    return <EmptyBasket />;
  }
  const notifyMe = () => {
    toast.success("Səbətiniz təmizləndi");
  };
  return (
    <div className="basket">
      <h4>Səbət ( {card.total_items} məhsul)</h4>
      <div className="main-content">
        <div className="main-container">
          {card?.line_items?.map((el) => {
            return (
              <Main
                key={el.id}
                item_id={el.id}
                product_id={el.product_id}
                name={el.variant?.description || el.product_name}
                price={el.price.raw}
                image={el.image.url}
                quantity={el.quantity}
                options={el?.selected_options}
              />
            );
          })}
        </div>
        <Amount card={card} />
      </div>

      {/* <button className="empty-cart" onClick={ClearAll}>
        Hamısını təmizlə
      </button> */}
      <ToastContainer />
    </div>
  );
};

export default Basket;
