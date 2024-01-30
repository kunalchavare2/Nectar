import React, { useContext, useState } from "react";
import "./Header.styled.js";
import HeaderStyle, {
  HeaderNavBtnStyle,
  HeaderNavStyle,
  HeaderWrapper,
  SearchBtnStyle,
} from "./Header.styled.js";
import Logo from "../../Atoms/Logo/Logo.jsx";
import NavIcon from "../../Atoms/NavIcon/NavIcon.jsx";
import {
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import { ThemeDispatcher } from "../../../Theme/Theme.jsx";
import { ThemeData } from "../../../Theme/ThemeData.js";
import {
  CART_ROUTE,
  DEFAULT_SEARCH_PARAMS,
  HOME_ROUTE,
  ORDERS_ROUTE,
  PRODUCTS_ROUTE,
  PROFILE_ROUTE,
  WISHLIST_ROUTE,
} from "../../../utils/constant/routes-cont.js";
import { ReactComponent as ProfileIcons } from "../../../assets/icons/marathi-woman.svg";

const Header = ({ searchToggle }) => {
  const user = useSelector((state) => state.user);
  const cartCount = user.cart.cartCount;
  const wishlistCount = user.wishlist.wishlistItems.length;
  const chnageTheme = useContext(ThemeDispatcher);

  return (
    <HeaderStyle>
      <HeaderWrapper>
        <Logo showText={true} />
        <HeaderNavStyle>
          <NavIcon icon={""} text="Home" link={HOME_ROUTE} hideIcon={true} />
          <NavIcon
            icon={""}
            text="Orders"
            link={ORDERS_ROUTE}
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="Products"
            link={PRODUCTS_ROUTE + DEFAULT_SEARCH_PARAMS}
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="About Us"
            link="/app/about"
            hideIcon={true}
          />
        </HeaderNavStyle>

        <HeaderNavBtnStyle>
          <input
            type="checkbox"
            onChange={(ev) => {
              if (ev.target.checked) {
                chnageTheme(ThemeData.dark);
              } else {
                chnageTheme(ThemeData.light);
              }
            }}
          />
          <SearchBtnStyle onClick={searchToggle}>
            <IoSearchOutline />
          </SearchBtnStyle>
          <NavIcon
            icon={<IoCartOutline />}
            link={CART_ROUTE}
            count={cartCount}
          />
          <NavIcon
            icon={<IoHeartOutline />}
            link={WISHLIST_ROUTE}
            count={wishlistCount}
          />
          <NavIcon icon={<ProfileIcons />} link={PROFILE_ROUTE} />
        </HeaderNavBtnStyle>
      </HeaderWrapper>
    </HeaderStyle>
  );
};

Header.propTypes = {
  /**
   * This will decide which type of header it is
   */
  // type: PropTypes.oneOf(["denger", "warning", "default"]),
  // title: PropTypes.string,
};

Header.defaultProps = {
  // type: "default",
  // title: "Hello",
};

export default Header;
