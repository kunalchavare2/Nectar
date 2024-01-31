import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", () => {
  return fetch("../../data/product.json").then((res) => {
    return res.json();
  });
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default productSlice.reducer;
