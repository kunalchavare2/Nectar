import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage/CartPage";

const routes = [
  {
    path: "/",

    element: <App />,
    //   loader: rootLoader,
    children: [
     
    ],
  },
  {
    path: "/cart",
    element: <CartPage />,
    //   loader: teamLoader,
  },
  {
    path: "*",
    element: (
      <div>
        <h2>404 Page not found</h2>
      </div>
    ),
  },
];

const router = createBrowserRouter(routes, );

export default router;
