import React from "react";
import "./Header.styled.js";
import PropTypes from "prop-types";
import HeaderStyle, {
  HeaderNavBtnStyle,
  HeaderNavStyle,
  HeaderWrapper,
} from "./Header.styled.js";
import Logo from "../../Atoms/Logo/Logo.jsx";
import NavIcon from "../../Atoms/NavIcon/NavIcon.jsx";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
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
