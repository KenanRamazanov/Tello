import axios from "axios";
import { commerce } from "../../commerce";
const headers = {
  "X-Authorization": "sk_5253176900d5d647997dc48d84317e57a3e0193bb09d9",
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const userLogin = async ({ email, baseUrl }) => {
  const url = new URL("https://api.chec.io/v1/customers/email-token");
  try {
    let body = {
      email: email,
      base_url: `${baseUrl}/create-token`,
    };
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
export const userRegister = async ({ firstname, lastname, email }) => {
  const url = new URL("https://api.chec.io/v1/customers");
  let body = {
    firstname,
    lastname,
    email,
  };
  // console.log(body);
  try {
    const response = await axios.post(url, body, { headers });
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const updateUser = async ({ firstname, lastname, email }, id) => {
  // console.log(lastname, firstname, email, id);
  try {
    const response = await commerce.customer.update(
      {
        email,
        firstname,
        lastname,
        // phone,
      },
      id
    );
    return response;
  } catch (err) {
    return err.message;
  }
};
