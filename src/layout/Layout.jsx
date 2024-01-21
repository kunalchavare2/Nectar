import React, { useEffect } from "react";
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
const Layout = () => {
  const location = useLocation();
  const isShowFilter = location.pathname.split("/").includes("products");
  console.log(isShowFilter);

  return (
    <Theme>
      <GlobalStyles />
      <LayoutStyle>
        <Header className="header" />
        <AppBar className="appBar" title="Home" />
        <ContentStyle isShowFilter={isShowFilter}>
          {isShowFilter && <FilterStyle>Filtter</FilterStyle>}

          <MainContentStyle>
            <Outlet />
          </MainContentStyle>
        </ContentStyle>
        <NavIconsPage />
      </LayoutStyle>
    </Theme>
  );
};

export default Layout;
