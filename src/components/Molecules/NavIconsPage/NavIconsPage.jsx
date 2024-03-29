import React from "react";
import { PageIconsContainer } from "./NavIconsPage.styled";
import {
  IoCartOutline,
  IoSearchOutline,
  IoHeartOutline,
} from "react-icons/io5";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

const NavIconsPage = () => {
  const cartCount = useSelector((state) => state.user.cart.cartCount);

  const navData = [
    {
      title: "Shop",
      path: "home",
      icon: <BsShopWindow />,
    },
    {
      title: "Products",
      path: "products",
      icon: <IoSearchOutline />,
    },
    {
      title: "Cart",
      path: "cart",
      icon: <IoCartOutline />,
      count: cartCount,
    },
    {
      title: "Wishlist",
      path: "wishlist",
      icon: <IoHeartOutline />,
    },
    {
      title: "Account",
      path: "profile",
      icon: <AiOutlineUser />,
    },
  ];
  return (
    <PageIconsContainer>
      {navData.map((navItem) =>
        navItem.count >= 0 ? (
          <NavIcon
            key={navItem.title}
            icon={navItem.icon}
            text={navItem.title}
            link={navItem.path}
            count={navItem.count}
          />
        ) : (
          <NavIcon
            key={navItem.title}
            icon={navItem.icon}
            text={navItem.title}
            link={navItem.path}
          />
        )
      )}
    </PageIconsContainer>
  );
};

export default NavIconsPage;
