import React, { useState } from "react";
import "./Products.scss";
import Filter from "./Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";
import Info from "./Info/Info";
import Card from "../../components/Card/Card";
import Pagination from "./Pagination/Pagination";
import MobileOption from "./MobileOption/MobileOption";
import { useParams, useSearchParams } from "react-router-dom";
import Skeleton from "../../components/Skeleton/Card";
import { getProductsBySlug } from "../../store/actions/product";
import { optionsOrder } from "./data";

const Products = () => {
  window.scrollTo(0, 0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  const [selectedBrands, setSelectedBrands] = useState("");
  const [sort, setSort] = React.useState(optionsOrder.find((el) => el.active));
  const { slug } = useParams();
  const currentPage = React.useCallback(
    Number(searchParams.get("page") || 1, [searchParams])
  );

  const params = React.useCallback(
    {
      category_slug: [slug],
      limit: 6,
      page: currentPage,
      ...(selectedBrands && { query: selectedBrands }),
      ...(sort && {
        sortBy: sort.actions.sortBy,
        sortDirection: sort.actions.sortDirection,
      }),
    },
    [searchParams, selectedBrands, sort]
  );
  React.useEffect(() => {
    getProductsBySlug(setLoading, setProducts, params);
  }, [slug, params]);
  return (
    <div className="products container ">
      <div className="left">
        <Navigation />
        <Filter setSelectedBrands={setSelectedBrands} />
      </div>
      <div className="mobile">
        <MobileOption
          loading={loading}
          products={products}
          setSelectedBrands={setSelectedBrands}
          setSort={setSort}
          sort={sort}
          options={optionsOrder}
        />
      </div>
      <div className="product-list">
        <Info
          loading={loading}
          products={products}
          setSort={setSort}
          sort={sort}
          options={optionsOrder}
        />
        <div className="card-list">
          {loading &&
            new Array(9).fill(0).map((_, i) => {
              return <Skeleton key={i} />;
            })}
          {!loading &&
            products?.data?.length > 0 &&
            products.data.slice(0, 9).map((el) => {
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
        {!loading && (
          <Pagination
            data={products?.meta?.pagination}
            currentPage={currentPage}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        )}
      </div>
    </div>
  );
};

export default Products;