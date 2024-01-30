import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage/CartPage";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import {
  BASE_ROUTE,
  CART_ROUTE,
  HOME_ROUTE,
  ORDERS_ROUTE,
  PRODUCTS_ROUTE,
  PRODUCT_DETAIL_ROUTE,
  PROFILE_ROUTE,
  WISHLIST_ROUTE,
} from "./utils/constant/routes-cont";
import UserDataPage from "./pages/UserDataPage/UserDataPage";

const routes = [
  {
    path: "/",
    element: <Navigate to={HOME_ROUTE} replace={true} />,
  },
  {
    path: BASE_ROUTE,
    element: <Layout />,
    children: [
      {
        path: CART_ROUTE,
        element: <CartPage />,
      },
      {
        path: WISHLIST_ROUTE,
        element: <WishlistPage />,
        //   loader: teamLoader,
      },
      {
        path: HOME_ROUTE,
        element: <App />,
        //   loader: teamLoader,
      },
      {
        path: ORDERS_ROUTE,
        element: <OrdersPage />,
        //   loader: teamLoader,
      },
      {
        path: PRODUCTS_ROUTE,
        element: <ProductListPage />,
        //   loader: teamLoader,
      },
      {
        path: PRODUCT_DETAIL_ROUTE,
        element: <ProductDetailsPage />,
      },
      {
        path: PROFILE_ROUTE,
        element: <UserDataPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default router;
