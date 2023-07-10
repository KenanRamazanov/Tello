import React from "react";
import "./DropDown.scss";
import { Link } from "react-router-dom";
import Introduction from "../../Introduction/Introduction";
const DropDown = ({ subCategories }) => {
  return (
    <div className="dropdown-menu">
      <div className="row">
        {subCategories.map((el) => {
          return (
            <div key={el.id} className="column">
              <Link to={`/products/${el.slug}`} className="column-title">
                {el.name}
              </Link>
            </div>
          );
        })}
        <Introduction />
      </div>
    </div>
  );
};

export default DropDown;
