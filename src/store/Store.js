import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice/ProductSlice/ProductSlice";
import CategorySlice from "./Slice/CategorySlice/CategorySlice";
import UserSlice from "./Slice/UserSlice/UserSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    category: CategorySlice,
    user: UserSlice,
  },
});

export default store;
