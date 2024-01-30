import { createSlice, current } from "@reduxjs/toolkit";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../utils/utility";
import { LocalStorageKeys } from "../../../utils/constant/global-const";

const savedLocalData = getFromLocalStorage(LocalStorageKeys.orders);
const initialState = savedLocalData
  ? savedLocalData
  : {
      orders: [],
    };

const OrdersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    // To add new cart item into existing cart items
    addToOrders: (state, action) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith("orders/"),
      (state) => {
        saveToLocalStorage(current(state), LocalStorageKeys.orders);
      }
    );
  },
});

export default OrdersSlice.reducer;
export const {
  addToOrders,
  //   removeFromCart,
  //   updateCartItemQuantity,
  //   addToWishList,
  //   removeFromWishList,
} = OrdersSlice.actions;
