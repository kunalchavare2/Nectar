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
    // To remove the element from cart items
    // removeFromCart: (state, action) => {
    //   // Getting current state cart items
    //   const cartItems = [...current(state.cart.cartItems)];

    //   // removeing the element from cart items
    //   const filterCartItems = cartItems.filter(
    //     (item) => item.id !== action.payload
    //   );

    //   // assigning new list of cart items
    //   state.cart.cartItems = [...filterCartItems];

    //   // Updating the cart items count
    //   state.cart.cartCount = state.cart.cartItems.length;
    // },
    // // To update the quantity of an item in cart
    // updateCartItemQuantity: (state, action) => {
    //   // Getting current state cart items
    //   const cartItems = [...current(state.cart.cartItems)];

    //   // Getting position of item to updated
    //   const position = cartItems.findIndex((item) => {
    //     return item.id === action.payload.id;
    //   });

    //   // Updating item quantity using position
    //   state.cart.cartItems[position].quantity = action.payload.quantity;
    // },
    // addToWishList: (state, action) => {
    //   // Getting current state wishlist items
    //   const wishListItems = [...current(state.wishlist.wishlistItems)];

    //   // check if item is already in wishlist
    //   const item = wishListItems.find((item) => item.id === action.payload);

    //   if (!item) {
    //     // If item is not in wishlist then add it
    //     state.wishlist.wishlistItems.push(action.payload);
    //   } else {
    //     // if item is in wishlis list then remove it
    //     state.wishlist.wishlistItems = wishListItems.filter(
    //       (item) => item.id === action.payload
    //     );
    //   }
    // },
    // removeFromWishList: (state, action) => {
    //   // Getting current state wishlist items
    //   const wishListItems = [...current(state.wishlist.wishlistItems)];

    //   // removeing the element from wishlist items
    //   const filterWishlistItems = wishListItems.filter(
    //     (item) => item !== action.payload
    //   );

    //   // Assigning filter list to wishlist items
    //   state.wishlist.wishlistItems = [...filterWishlistItems];
    // },
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
