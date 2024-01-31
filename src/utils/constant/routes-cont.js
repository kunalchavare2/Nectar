import { createSearchParams } from "react-router-dom";

export const BASE_ROUTE = "/app";
export const HOME_ROUTE = BASE_ROUTE + "/home";
export const PROFILE_ROUTE = "profile";
export const PRODUCTS_ROUTE = BASE_ROUTE + "/products";
export const PRODUCT_DETAIL_ROUTE = BASE_ROUTE + "/product/";
export const CART_ROUTE = BASE_ROUTE + "/cart";
export const WISHLIST_ROUTE = BASE_ROUTE + "/wishlist";
export const ORDERS_ROUTE = BASE_ROUTE + "/orders";
export const ID_ROUTE = ":id";
export const DEFAULT_SEARCH_PARAMS =
  "?" +
  createSearchParams({
    minPrice: "0",
    maxPrice: "16",
    sort: "Name",
  });
