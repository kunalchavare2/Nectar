import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage/CartPage";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default router;
