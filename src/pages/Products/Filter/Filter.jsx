import React, { useState } from "react";
import "./Filter.scss";
import Plus from "../../../assets/plus.svg";
import Minus from "../../../assets/minus.svg";
import { v4 as uuidv4 } from "uuid";
export const optionsFilter = [
  {
    id: uuidv4(),
    name: "apple",
    label: "Apple",
    value: ["iphone", "ipad", "airpods", "macbook"],
    checked: false,
  },
  {
    id: uuidv4(),
    name: "samsung",
    label: "Samsung",
    value: ["samsung"],
    checked: false,
  },
  {
    id: uuidv4(),
    name: "xiaomi",
    label: "Xiaomi",
    value: ["xiaomi"],
    checked: false,
  },
  {
    id: uuidv4(),
    name: "Asus",
    label: "Asus",
    value: ["asus"],
    checked: false,
  },
  {
    id: uuidv4(),
    name: "Hp",
    label: "Hp",
    value: ["Hp"],
    checked: false,
  },
];

const Filter = ({ setSelectedBrands }) => {
  const [filter, setFilter] = useState(false);
  const setFilterOpen = () => {
    setFilter((prev) => !prev);
  };
  const onChangeHandler = (e, value) => {
    setSelectedBrands((prev) => {
      let newOptions = prev;
      if (e.target.checked) {
        newOptions = prev.concat(",", value.join(","));
      } else {
        newOptions = newOptions.split(value);
        newOptions = newOptions.join("");
      }
      if (newOptions.startsWith(",")) {
        newOptions = newOptions.replace(",", "");
      }
      if (newOptions.endsWith(",")) {
        newOptions = newOptions.slice(0, -1);
      }
      newOptions = newOptions.replace(",,", ",");
      return newOptions;
    });
  };
  return (
    <div className="filter">
      <div className="filter-title">
        <h3>Brend</h3>
        {filter ? (
          <img onClick={setFilterOpen} src={Minus} alt="minus" />
        ) : (
          <img onClick={setFilterOpen} src={Plus} alt="plus" />
        )}
      </div>
      {filter && (
        <ul className="options">
          {optionsFilter.map((el) => {
            return (
              <li key={el.id}>
                <input
                  onChange={(e) => onChangeHandler(e, el.value)}
                  name={el.name}
                  id={el.name}
                  type="checkbox"
                />
                <label htmlFor={el.name}>{el.label}</label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Filter;
