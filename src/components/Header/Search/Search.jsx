import React, { useState, useEffect } from "react";
import "./Search.scss";
import lupa from "../../../assets/search.svg";
import { useNavigate, useParams } from "react-router-dom";
import { commerce } from "../../../commerce";
import SearchResult from "./SearchResult/SearchResult";
import { DebounceInput } from "react-debounce-input";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [resultDropdown, setResultDropdown] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  let recentSearchs = localStorage.getItem("recentSearchs");
  const [searchs, setSearchs] = useState(
    recentSearchs ? JSON.parse(recentSearchs) : []
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("recentSearchs", JSON.stringify(searchs));
  }, [searchs]);
  useEffect(() => {
    if (inputValue.length > 0) {
      getResults(inputValue);
      setResultDropdown(true);
      setDropdownVisible(false);
    } else {
      setResultDropdown(false);
    }
  }, [inputValue]);

  const getResults = async (query) => {
    try {
      setLoading(true);
      const response = await commerce.products.list({ query: query });
      setResults(response.data);
    } catch (err) {
      return err.message;
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputClick = () => {
    setDropdownVisible(true);
  };
  const handleOutsideClick = () => {
    setDropdownVisible(false);
  };
  const handleOutsideClickResult = () => {
    setResultDropdown(false);
  };
  const handleResultClear = () => {
    setInputValue("");
    setResultDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    setResultDropdown(false);
    inputValue.trim("").length > 0 && setSearchs([...searchs, inputValue]);
    navigate(`/search-results/${inputValue}`);
  };
  const handleSearchClear = () => {
    setSearchs([]);
    setDropdownVisible(false);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <img className="searchIcon" src={lupa} alt="search" />
      <DebounceInput
        type="text"
        placeholder="Axtarış..."
        value={inputValue}
        onChange={handleInputChange}
        minLength={2}
        debounceTimeout={500}
        onClick={handleInputClick}
      />
      {dropdownVisible && (
        <div className=" search inputDropdown">
          <div className="last-search">
            Son axtarışlar
            <span onClick={handleSearchClear}>Təmizlə</span>
          </div>
          <div className="searchs">
            {searchs.map((el, index) => {
              return (
                <span
                  onClick={() => setInputValue(el)}
                  key={index}
                  className="search"
                >
                  {el}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {dropdownVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          onClick={handleOutsideClick}
        />
      )}
      {resultDropdown && (
        <div className="resultDropdown inputDropdown">
          <div className="last-search">
            Nəticələr
            <span onClick={handleResultClear}>Təmizlə</span>
          </div>
          {!loading && (
            <div className="results">
              {results?.map((el) => {
                return (
                  <SearchResult
                    key={el.id}
                    id={el.id}
                    image={el.image.url}
                    name={el.name}
                    price={el.price.raw}
                    setResultDropdown={setResultDropdown}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
      {resultDropdown && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          onClick={handleOutsideClickResult}
        />
      )}
    </form>
  );
};

export default Search;
