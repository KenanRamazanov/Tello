import React from "react";
import "./Pagination.scss";
import Next from "../../../assets/next.svg";
import Previous from "../../../assets/previous.svg";

const Pagination = ({ data, currentPage, searchParams, setSearchParams }) => {
  const totalPages = new Array(data?.total_pages).fill(0);

  const pageClickHandler = (page) => {
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({ ...params, page: page });
  };
  const nextButton = () => {
    if (currentPage !== data?.total_pages) {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams({ ...params, page: currentPage + 1 });
    }
  };
  const prevButton = () => {
    if (currentPage !== 1) {
      const params = Object.fromEntries([...searchParams]);
      setSearchParams({ ...params, page: currentPage - 1 });
    }
  };
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1 && "disabled"}
        onClick={prevButton}
        className="prevBtn"
      >
        <img src={Previous} alt="previous" />
      </button>
      <div className="pages-num active">
        {totalPages.map((_, i) => (
          <span
            key={i}
            className={i + 1 == currentPage ? "active" : ""}
            onClick={() => pageClickHandler(i + 1)}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <button
        onClick={nextButton}
        className="nextBtn"
        disabled={data?.total_pages === currentPage && "disabled"}
      >
        <img src={Next} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
