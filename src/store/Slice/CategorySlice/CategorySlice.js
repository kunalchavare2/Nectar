import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
  loading: false,
  categories: [],
  error: null,
};


export const fetchCategory = createAsyncThunk("category/fetch", () => {
  return fetch("../../data/product.json").then((res) => {
    return res.json();
  });
});

const CategorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
      state.error = null;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default CategorySlice.reducer;
