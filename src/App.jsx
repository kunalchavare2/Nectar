import { useEffect } from "react";
import "./App.styled.js";
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/Slice/ProductSlice/ProductSlice";
import styled from "styled-components";
import { addToCart } from "./store/Slice/UserSlice/UserSlice";
import { Link, Navigate } from "react-router-dom";
import { createQueryString } from "./utils/utility";
import Footer from "./components/Organisams/Footer/Footer.jsx";
import AppStyle from "./App.styled.js";
import HomeCategories from "./components/Organisams/HomeCategories/HomeCategories.jsx";
import HomeCarousel from "./components/Organisams/HomeCarousel/HomeCarousel.jsx";
import UserDataPage from "./pages/UserDataPage/UserDataPage.jsx";
import { changeCurrency } from "./store/Slice/AppConfig/AppConfig.js";
import { currency } from "./utils/constant/app-const.js";
import { useContext } from "react";
import { ThemeDispatcher } from "./Theme/Theme.jsx";
import { ThemeData } from "./Theme/ThemeData.js";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  gap: 1rem;
  padding: 1rem;
  // margin-left: 20%;
`;

function App() {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.user.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product.products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };

  return (
    <>
      <HomeCarousel />
      <button
        onClick={() => {
          dispatch(changeCurrency(currency.rupee));
        }}
      >
        chnage currency
      </button>
      <HomeCategories
        text="New Products"
        linkto={"/app/products"}
        tag="new"
        isshowGroceries={false}
      />

      <HomeCategories
        text="Exclusive Offer"
        linkto={"/app/products"}
        tag="Exclusive"
        isshowGroceries={false}
      />

      <HomeCategories text="Groceries" isshowGroceries={true} />
      <HomeCategories
        text="Best Selling"
        linkto={"/app/products"}
        tag="bestseller"
        isshowGroceries={false}
      />
      {/* <UserDataPage /> */}
      <Footer />
    </>
  );
}

export default App;
