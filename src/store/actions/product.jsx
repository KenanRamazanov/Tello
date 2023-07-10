import { token } from "../../commerce";
import axios from "axios";

const headers = {
  "X-Authorization": token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getProducts = async (setLoading, setProducts, params) => {
  const url = new URL("https://api.chec.io/v1/products");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  try {
    setLoading(true);
    const { data: response } = await axios.get(url, { headers });
    setProducts(response.data);
    setLoading(false);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
export const getProductsBySlug = async (setLoading, setProducts, params) => {
  const url = new URL("https://api.chec.io/v1/products");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  try {
    setLoading(true);
    const { data: response } = await axios.get(url, { headers });
    setProducts(response);

    setLoading(false);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const getProductById = async (
  setLoading,
  setProduct,
  setCurrentVariant,
  id
) => {
  const urlProduct = `https://api.chec.io/v1/products/${id}`;
  try {
    setLoading(true);
    const { data: product } = await axios.get(urlProduct, {
      headers,
    });

    const firstVariant = {
      color: product?.variant_groups?.[0]?.options[0],
      storage: product?.variant_groups?.[1]?.options[0],
    };
    setProduct(product);
    setCurrentVariant(firstVariant);
    setLoading(false);
    return "success";
  } catch (err) {
    setLoading(false);
    return err.message;
  }
};
