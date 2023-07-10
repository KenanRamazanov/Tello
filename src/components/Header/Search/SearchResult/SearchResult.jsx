import React from "react";
import "./SearchResult.scss";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ id, image, name, price, setResultDropdown }) => {
  const navigate = useNavigate();
  const handleResult = () => {
    navigate(`/details/${id}`);
    setResultDropdown(false);
  };
  return (
    <div onClick={handleResult} className="search-result">
      <div className="searchImg">
        <img src={image} alt="iphone" />
      </div>
      <div className="searchDetails">
        <div className="productName">{name}</div>
        <div className="price">{price} AZN</div>
      </div>
    </div>
  );
};

export default SearchResult;
