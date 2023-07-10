import React, { useState } from "react";
import "./MobileVersion.scss";
import Close from "../../../assets/close.svg";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const MobileNav = ({
  setMobileNavbar,
  mobileNavbar,
  categories,
  loading,
  navBar,
}) => {
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const openDropdown = (index) => {
    setCurrentDropdown(index);
    if (index === currentDropdown) {
      setCurrentDropdown(null);
    }
  };
  const navigate = useNavigate();
  const closeNavbar = () => {
    setMobileNavbar((prev) => !prev);
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className={mobileNavbar ? `mobileNav opened` : "mobileNav"}>
      <div className="mobile-title">
        <img onClick={closeNavbar} src={Close} alt="close" />
        <Logo />
      </div>
      <ul className="navbar">
        {loading
          ? navBar?.slice(0, 8).map((el, index) => {
              return (
                <li key={el.id}>
                  <Link onClick={closeNavbar} to={`products/${el.slug}`}>
                    {el.name}
                  </Link>
                  <BsChevronRight
                    onClick={() => openDropdown(index)}
                    className={
                      currentDropdown === index
                        ? "openDropdown opened"
                        : "openDropdown"
                    }
                  />
                  {currentDropdown === index && (
                    <div className="dropdown">
                      <ul>
                        {navBar[index].children.map((el) => {
                          return (
                            <li key={el.id}>
                              <Link
                                onClick={closeNavbar}
                                to={`products/${el.slug}`}
                              >
                                {el.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })
          : categories.slice(0, 5).map((el, index) => {
              return (
                <li key={el.id}>
                  <Link onClick={closeNavbar} to={`products/${el.slug}`}>
                    {el.name}
                  </Link>
                  <BsChevronRight
                    onClick={() => openDropdown(index)}
                    className={
                      currentDropdown === index
                        ? "openDropdown opened"
                        : "openDropdown"
                    }
                  />
                  {currentDropdown === index && (
                    <div className="dropdown">
                      <ul>
                        {categories[index]?.children.map((el) => {
                          return (
                            <li key={el.id}>
                              <Link
                                onClick={closeNavbar}
                                to={`products/${el.slug}`}
                              >
                                {el.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
      </ul>
      <div className="login-buttons">
        <button onClick={navigateToLogin} className="first button">
          Daxil ol
        </button>
        <button onClick={navigateToRegister} className="second button">
          Qeydiyyat
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
