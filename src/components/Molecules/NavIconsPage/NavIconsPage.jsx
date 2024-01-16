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

const NavIconsPage = () => {
  const navData = [
    {
      title: "Shop",
      path: "home",
      icon: <BsShopWindow />,
    },
    {
      title: "Explore",
      path: "app/explore",
      icon: <IoSearchOutline />,
    },
    {
      title: "Cart",
      path: "cart",
      icon: <IoCartOutline />,
    },
    {
      title: "Wishlist",
      path: "app/wishlist",
      icon: <IoHeartOutline />,
    },
    {
      title: "Account",
      path: "app/profile",
      icon: <AiOutlineUser />,
    },
  ];
  return (
    <PageIconsContainer>
      {navData.map((navItem) => (
        <NavIcon icon={navItem.icon} text={navItem.title} link={navItem.path} />
      ))}
    </PageIconsContainer>
  );
};

export default NavIconsPage;
