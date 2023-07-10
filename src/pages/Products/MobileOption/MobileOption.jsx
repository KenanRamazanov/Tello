import React, { useState } from "react";
import Swap from "../../../assets/swap.svg";
import CloseIcon from "../../../assets/closeNavbar.svg";
import FilterIcon from "../../../assets/filter.svg";
import "./MobileOption.scss";
import Filter from "../Filter/Filter";
import Info from "../Info/Info";

const MobileOption = ({
  setSelectedBrands,
  loading,
  products,
  setSort,
  sort,
  optionsOrder,
}) => {
  const [orders, setOrders] = useState(false);
  const [filters, setFilters] = useState(false);
  const handleOrders = () => {
    setOrders((prev) => !prev);
  };
  const filtersToggle = () => {
    setFilters((prev) => !prev);
  };
  return (
    <div className="mobile-options">
      <div className={orders ? "orders opened" : "orders"}>
        <div onClick={handleOrders} className="title">
          <img src={Swap} alt="" />
          Sıralama
        </div>
        <div className="orders-content">
          <div className="row">
            <img onClick={handleOrders} src={CloseIcon} alt="close" />
            <span>Sıralama</span>
          </div>
          <div className="actions">
            <Info
              loading={loading}
              products={products}
              setSort={setSort}
              sort={sort}
              options={optionsOrder}
            />
          </div>
          <button onClick={handleOrders} className="showResults">
            Sıralanmış məhsulları göstər
          </button>
        </div>
      </div>
      <div className={filters ? "filters opened" : "filters"}>
        <div onClick={filtersToggle} className="title">
          <img src={FilterIcon} alt="filter" />
          Filterləmələr
        </div>
        <div className="filters-content">
          <div className="row">
            <span>Filterləmələr</span>
            <img onClick={filtersToggle} src={CloseIcon} alt="close" />
          </div>
          <div className="actions">
            <Filter setSelectedBrands={setSelectedBrands} />
          </div>
          <button onClick={filtersToggle} className="showResults">
            Filterlənmiş məhsulları göstər
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileOption;