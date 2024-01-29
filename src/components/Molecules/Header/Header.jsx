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
          <NavIcon icon={""} text="Home" link="/app/home" hideIcon={true} />
          <NavIcon icon={""} text="Orders" link="/app/orders" hideIcon={true} />
          <NavIcon
            icon={""}
            text="Products"
            link="/app/products"
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
            link="/app/cart"
            count={cartCount}
          />
          <NavIcon
            icon={<IoHeartOutline />}
            link="/app/wishlist"
            count={wishlistCount}
          />
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
