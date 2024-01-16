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
const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const isShowFilter = location.pathname.split("/");
    console.log(isShowFilter);
  }, [location]);
  return (
    <Theme>
      <GlobalStyles />
      <LayoutStyle>
        <Header />
        <ContentStyle>
          {"isShowFilter" && <FilterStyle>Filtter</FilterStyle>}
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
