import { token } from "../../commerce";
import axios from "axios";

const headers = {
  "X-Authorization": token,
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const getCategoriesName = async (setLoading, setCategories, params) => {
  const url = new URL("https://api.chec.io/v1/categories");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  try {
    setLoading(true);
    const { data: response } = await axios.get(url, { headers });
    setCategories(response.data);
    setLoading(false);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
