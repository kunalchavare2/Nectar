import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice/ProductSlice/ProductSlice";
import CategorySlice from "./Slice/CategorySlice/CategorySlice";
import UserSlice from "./Slice/UserSlice/UserSlice";
import OrdersSlice from "./Slice/OrdersSlice/OrdersSlice";
import AppConfigSlice from "./Slice/AppConfig/AppConfig";
import CommonStateSlice from "./Slice/CommonStateSlice/CommonStateSlice";
import AuthSlice from "./Slice/AuthSlice/AuthSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    category: CategorySlice,
    user: UserSlice,
    orders: OrdersSlice,
    appconfig: AppConfigSlice,
    commonstate: CommonStateSlice,
    authState: AuthSlice,
  },
});

export default store;
