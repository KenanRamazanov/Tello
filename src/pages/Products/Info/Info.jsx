import React, { useState } from "react";
import "./Info.scss";
import Sort from "../../../assets/sort.svg";

const Info = ({ loading, products, options, sort, setSort }) => {
  const [sortDropDown, setSortDropDown] = useState(false);
  const setDropdownOpen = () => {
    setSortDropDown((prev) => !prev);
  };
  const onClickHandler = (id, option) => {
    options.map((el) => {
      if (el.id == id) {
        el.active = true;
      } else {
        el.active = false;
      }
    });
    setSort(option);
  };
  return (
    <div className="info">
      <div className="product-number">
        {loading
          ? "Axtarılır..."
          : `${products.meta?.pagination.total} məhsul tapıldı`}
      </div>
      <div className="sort" onClick={setDropdownOpen}>
        <span>{sort.label}</span>
        <img src={Sort} alt="icon" />
        {sortDropDown && (
          <div className="sort-dropdown">
            {/* <div className="sort-option">Azdan çoxa</div> */}
            {/* <div className="sort-option">Çoxdan aza</div> */}
            {options.map((el) => {
              if (!el.active) {
                return (
                  <div
                    key={el.id}
                    onClick={() => onClickHandler(el.id, el)}
                    className="sort-option"
                  >
                    {el.label}
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;