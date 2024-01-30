import "./App.styled.js";
import { useDispatch } from "react-redux";
import Footer from "./components/Organisams/Footer/Footer.jsx";
import HomeCategories from "./components/Organisams/HomeCategories/HomeCategories.jsx";
import HomeCarousel from "./components/Organisams/HomeCarousel/HomeCarousel.jsx";
import { changeCurrency } from "./store/Slice/AppConfig/AppConfig.js";
import { currency } from "./utils/constant/app-const.js";
import { PRODUCTS_ROUTE } from "./utils/constant/routes-cont.js";

function App() {
  const dispatch = useDispatch();
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
        linkto={PRODUCTS_ROUTE}
        tag="new"
        isshowGroceries={false}
      />

      <HomeCategories
        text="Exclusive Offer"
        linkto={PRODUCTS_ROUTE}
        tag="Exclusive"
        isshowGroceries={false}
      />

      <HomeCategories text="Groceries" isshowGroceries={true} />
      <HomeCategories
        text="Best Selling"
        linkto={PRODUCTS_ROUTE}
        tag="bestseller"
        isshowGroceries={false}
      />
      {/* <UserDataPage /> */}
      <Footer />
    </>
  );
}

export default App;
