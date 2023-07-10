import { createSlice } from "@reduxjs/toolkit";
import { getCard, removeCard, updateCard } from "../actions/card";

const initState = {
  card: [],
  loading: false,
  errors: null,
};

const cardReducer = createSlice({
  name: "bestSellers",
  initialState: initState,
  extraReducers: {
    [getCard.pending]: (state) => {
      state.loading = true;
    },
    [getCard.rejected]: (state, payload) => {
      state.loading = false;
      state.errors = payload;
    },
    [getCard.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.card = payload;
    },
    [removeCard.pending]: (state) => {
      state.loading = true;
    },
    [removeCard.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    [removeCard.fulfilled]: (state, { payload }) => {
      state.card = payload;
      state.loading = false;
    },
    [updateCard.pending]: (state) => {
      state.loading = true;
    },
    [updateCard.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    [updateCard.fulfilled]: (state, { payload }) => {
      state.card = payload;
      state.loading = false;
    },
  },
});

export default cardReducer.reducer;
