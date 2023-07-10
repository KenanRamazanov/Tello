import React from "react";
import "./Amount.scss";
import AZN from "../../../assets/azn.svg";
import { commerce } from "../../../commerce";
import Button from "../../../components/Button/Button";
const Amount = ({ card }) => {
  return (
    <div className="amount ">
      <h2>Ümumi</h2>
      <ul>
        <li>
          Məbləğ
          <span>
            {card.subtotal?.raw} <img src={AZN} alt="AZN" />
          </span>
        </li>
        <li>
          Çatdırılma
          <span>
            0.00 <img src={AZN} alt="AZN" />
          </span>
        </li>
        <li>
          Hədiyyə paketi
          <span>
            0.00 <img src={AZN} alt="AZN" />
          </span>
        </li>
        <li>
          Promo kod
          <span>
            0.00
            <img src={AZN} alt="AZN" />
          </span>
        </li>
      </ul>
      <div className="total">
        <span>Cəmi</span>
        <span>
          {card.subtotal?.raw}
          <img src={AZN} alt="AZN" />
        </span>
      </div>
    </div>
  );
};

export default Amount;
