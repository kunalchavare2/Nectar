import { createSlice } from "@reduxjs/toolkit";
import { currency } from "../../../utils/constant/app-const";

const initialState = {
  currentCurrency: currency.doller,
  currency: currency,
};

const AppConfigSlice = createSlice({
  name: "appconfig",
  initialState: initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

export default AppConfigSlice.reducer;
export const { changeCurrency } = AppConfigSlice.actions;
