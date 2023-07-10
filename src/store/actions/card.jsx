import { commerce } from "../../commerce";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCard = createAsyncThunk("name/getCard", async () => {
  try {
    const response = await commerce.cart.retrieve();
    return response;
  } catch (err) {
    return err.message;
  }
});

export const removeCard = createAsyncThunk("name/removeCard", async (id) => {
  try {
    const response = await commerce.cart.remove(id);
    return response;
  } catch (err) {
    return err.message;
  }
});
export const updateCard = createAsyncThunk(
  "name/updateCard",
  async ({ id, quantity }) => {
    try {
      const response = await commerce.cart.update(id, {
        quantity,
      });
      return response;
    } catch (err) {
      return err.message;
    }
  }
);

// export const updateCard = async (setLoading, setCards, { id, quantity }) => {
//   try {
//     setLoading(true);
//     const response = await commerce.cart.update(id, {
//       quantity,
//     });
//     setCards(response);
//     setLoading(false);
//     return response;
//   } catch (err) {
//     return err.message;
//   }
// };
// export const removeCard = async (setLoading, setCards, id) => {
//   try {
//     setLoading(true);
//     const response = await commerce.cart.remove(id);
//     setCards(response);
//     setLoading(false);
//     return response;
//   } catch (err) {
//     return err.message;
//   }
// };

// export const getCard = async ({ setLoading, setCards }) => {
//   try {
//     setLoading(true);
//     const response = await commerce.cart.retrieve();

//     setCards(response);
//     setLoading(false);
//     return response;
//   } catch (err) {
//     return err.message;
//   }
// };
