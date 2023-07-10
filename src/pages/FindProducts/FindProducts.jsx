import React, { useCallback, useState, useEffect } from "react";
import "./FindProducts.scss";
import Skeleton from "../../components/Skeleton/Card";
import Card from "../../components/Card/Card";
import Pagination from "../Products/Pagination/Pagination";
import { commerce } from "../../commerce";
import { useParams, useSearchParams } from "react-router-dom";
import Sort from "../../assets/sort.svg";

const SearchProducts = () => {
  const query = useParams().query;
  // console.log(query);
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page"))
  );
  window.scrollTo(0, 0);

  const getResults = useCallback(
    async (query) => {
      try {
        setLoading(true);
        const response = await commerce.products.list({
          query: query,
          limit: 8,
          page: currentPage,
        });
        setResults(response);
      } catch (err) {
        return err.message;
      }
      setLoading(false);
    },
    [currentPage]
  );
  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
    getResults(query);
  }, [query, currentPage, searchParams, getResults]);
  const [sortDropDown, setSortDropDown] = useState(false);

  const setDropdownOpen = () => {
    setSortDropDown((prev) => !prev);
  };
  return (
    <div className="searchResults container">
      <div className="info">
        <div className="product-number">
          {loading
            ? "Loading..."
            : `${results.meta?.pagination.total} məhsul tapıldı`}
        </div>
      </div>
      <div className="results">
        {loading && !results.length > 0
          ? new Array(6).fill(0).map((_, i) => {
              return <Skeleton key={i} />;
            })
          : results.data?.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  image={el.image.url}
                  price={el.price.raw}
                />
              );
            })}
      </div>
      {loading ||
        (results.meta?.pagination?.total > 8 && (
          <Pagination
            data={results?.meta?.pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        ))}
    </div>
  );
};

export default SearchProducts;