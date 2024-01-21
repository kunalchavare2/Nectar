import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavIconsPage from "../components/Molecules/NavIconsPage/NavIconsPage";
import LayoutStyle, {
  ContentStyle,
  FilterStyle,
  MainContentStyle,
} from "./Layout.styled";
import Header from "../components/Molecules/Header/Header";
import Theme from "../Theme/Theme";
import GlobalStyles from "../styles/globalStyles";
import AppBar from "../components/Molecules/AppBar/AppBar";
import SearchPopOver from "../components/Organisams/SearchPopOver/SearchPopOver";
const Layout = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const isShowFilter = location.pathname.split("/").includes("products");

  const searchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Theme>
      <GlobalStyles />
      <LayoutStyle>
        <Header className="header" searchToggle={searchToggle} />
        <AppBar className="appBar" searchToggle={searchToggle} />
        <ContentStyle isShowFilter={isShowFilter}>
          {isShowFilter && <FilterStyle>Filtter</FilterStyle>}

          <MainContentStyle>
            <Outlet />
          </MainContentStyle>
        </ContentStyle>
        <NavIconsPage />
        <SearchPopOver isOpen={showSearch} setIsOpen={setShowSearch} />
      </LayoutStyle>
    </Theme>
  );
};

export default Layout;
