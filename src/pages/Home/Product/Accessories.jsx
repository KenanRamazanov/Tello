import React, { useEffect, useState } from "react";
import { getProducts } from "../../../store/actions/product";
import Card from "../../../components/Card/Card";
import Skeleton from "../../../components/Skeleton/Card";

import "./Product.scss";

const params = {
  category_slug: ["aksesuarlar"],
  limit: 6,
};

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProducts(setLoading, setProducts, params);
  }, []);

  return (
    <div className="product">
      <div className="cards">
        {loading &&
          new Array(4).fill(0).map((el, i) => {
            return <Skeleton key={i} />;
          })}
        {!loading &&
          products?.length > 0 &&
          products.slice(0, 6).map((el) => {
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
    </div>
  );
};

export default Accessories;
