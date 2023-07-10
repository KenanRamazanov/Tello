import React from "react";
import "./Navigation.scss";
import { useLocation, Link } from "react-router-dom";
import Navigat from "../../assets/navigat.svg";

const Navigation = ({ product }) => {
  const { pathname } = useLocation();

  return (
    <div className="navigation">
      <ul>
        <li className="category">
          <Link to={"/"}>Ana səhifə</Link>
          <img src={Navigat} alt="icon" />
        </li>

        {product?.categories
          ? product.categories.map((c) => {
              return (
                <div key={c.id}>
                  <li className="slug">
                    <Link to={`/products/${c.slug}`}>{c.name}</Link>
                    <img src={Navigat} alt="icon" />
                  </li>
                </div>
              );
            })
          : pathname.split("/products/").map((p) => {
              return (
                <li key={Math.floor(Math.random() * 100)} className="slug">
                  <Link to={`/products/${p}`}>{p}</Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Navigation;
