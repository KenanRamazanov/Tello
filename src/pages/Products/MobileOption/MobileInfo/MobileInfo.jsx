import React, { useState } from "react";
import "./MobileInfo.scss";
import Sort from "../../../../assets/sort.svg";

const MobileInfo = () => {
  const [sortDropDown, setSortDropDown] = useState(false);

  const setDropdownOpen = () => {
    setSortDropDown((prev) => !prev);
  };
  return (
    <div className="info">
      <div className="sortMobile" onClick={setDropdownOpen}>
        <span>Ən yenilər</span>
        <img src={Sort} alt="icon" />
        {sortDropDown && (
          <div className="sort-dropdown">
            <div className="sort-option">Azdan çoxa</div>
            <div className="sort-option">Çoxdan aza</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileInfo;
