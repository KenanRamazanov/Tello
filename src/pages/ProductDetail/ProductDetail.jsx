import React, { useEffect } from "react";
import "./ProductDetail.scss";
import { getProductById } from "../../store/actions/product";
import Navigation from "../../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
import SliderSelect from "../../pages/ProductDetail/Sliders/Slider";
import Specifications from "./Specifications/Specifications";
import Main from "./Main/Main";
import LoadingSpinner from "../../components/Loading/Loading";

const ProductDetail = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [currentVariant, setCurrentVariant] = React.useState(null);

  useEffect(() => {
    getProductById(setLoading, setProduct, setCurrentVariant, id);
  }, [id]);
  if (loading && !product) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      <Navigation id={product?.id} product={product} />
      <div className="details container ">
        <SliderSelect
          images={product?.assets}
          currentVariant={currentVariant}
        />
        <Main
          name={product?.name}
          id={product?.id}
          price={currentVariant?.storage?.price?.raw || product?.price?.raw}
          variant_groups={product?.variant_groups}
          currentVariant={currentVariant}
          setCurrentVariant={setCurrentVariant}
          available={
            product?.inventory?.managed ? product?.inventory?.available : 10
          }
        />
      </div>
      <Specifications />
    </div>
  );
};

export default ProductDetail;
