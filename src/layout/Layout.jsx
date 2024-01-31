import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavIconsPage from "../components/Molecules/NavIconsPage/NavIconsPage";
import LayoutStyle, { ContentStyle, MainContentStyle } from "./Layout.styled";
import Header from "../components/Molecules/Header/Header";
import Theme from "../Theme/Theme";
import GlobalStyles from "../styles/globalStyles";
import AppBar from "../components/Molecules/AppBar/AppBar";
import SearchPopOver from "../components/Organisams/SearchPopOver/SearchPopOver";
import FilterComp from "../components/Organisams/FilterComp/FilterComp";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Slice/ProductSlice/ProductSlice";
import useWindowDimensions from "../hooks/useWindowDimension";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { showFilter } from "../store/Slice/CommonStateSlice/CommonStateSlice";
import { fetchCategory } from "../store/Slice/CategorySlice/CategorySlice";
const Layout = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const filter = useSelector((state) => state.commonstate.filter);
  const isShowFilter = location.pathname.split("/").includes("products");
  const product = useSelector((state) => state.product);
  const { height, width } = useWindowDimensions();

  const dispatch = useDispatch();

  const searchToggle = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (width > 768 && !filter) {
      dispatch(showFilter());
    } else if (width < 768 && filter) {
      dispatch(showFilter());
    }
  }, [width]);

  useEffect(() => {
    if (product.products.length === 0) {
      dispatch(fetchProducts());
    }
    if (width > 768 && !filter) {
      dispatch(showFilter());
    } else if (width < 768 && filter) {
      dispatch(showFilter());
    }
  }, []);

  return (
    <Theme>
      <GlobalStyles />
      <LayoutStyle>
        <Header className="header" searchToggle={searchToggle} />
        <AppBar className="appBar" searchToggle={searchToggle} />
        <ContentStyle $isShowFilter={isShowFilter}>
          {isShowFilter && (
            <div className="mobile-filter">{filter && <FilterComp />}</div>
          )}
          {isShowFilter && (
            <div className="desktop-filter">
              <FilterComp />
            </div>
          )}

          <MainContentStyle>
            <Outlet />
          </MainContentStyle>
        </ContentStyle>
        <NavIconsPage />
        <SearchPopOver isOpen={showSearch} setIsOpen={setShowSearch} />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </LayoutStyle>
    </Theme>
  );
};

export default Layout;
