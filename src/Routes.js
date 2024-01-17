import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage/CartPage";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import { useDispatch } from "react-redux";
import store from "./store/Store";

const routes = [
  {
    path: "/",
    element: <Navigate to="/app/home" replace={true} />,
  },
  {
    path: "/app",

    element: <Layout />,
    //   loader: rootLoader,
    children: [
      {
        path: "/app/cart",
        element: <CartPage />,
        //   loader: teamLoader,
      },
      {
        path: "/app/home",
        element: <App />,
        //   loader: teamLoader,
      },
      {
        path: "/app/products",
        element: <ProductListPage />,
        //   loader: teamLoader,
      },
      {
        path: "/app/product/:id",
        element: <ProductDetailsPage />,
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
