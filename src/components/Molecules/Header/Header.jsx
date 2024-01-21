import React, { useState } from "react";
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
import SearchPopOver from "../../Organisams/SearchPopOver/SearchPopOver.jsx";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const user = useSelector((state) => state.user);
  const cartCount = user.cart.cartCount;
  const wishlistCount = user.wishlist.wishlistItems.length;
  return (
    <HeaderStyle>
      <HeaderWrapper>
        <Logo showName={true} />
        <HeaderNavStyle>
          <NavIcon icon={""} text="Home" link="/app/home" hideIcon={true} />
          <NavIcon
            icon={""}
            text="Explore"
            link="/app/explore"
            hideIcon={true}
          />
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
          <SearchBtnStyle onClick={() => setShowSearch(!showSearch)}>
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
      <SearchPopOver isOpen={showSearch} setIsOpen={setShowSearch} />
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
