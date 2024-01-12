import React from "react";
import { PageIconsContainer } from "./NavIconsPage.styled";
import { CiShop } from "react-icons/ci";
import { MdManageSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import NavIcon from "../../Atoms/NavIcon/NavIcon";

const NavIconsPage = () => {
  return (
    <PageIconsContainer>
      <NavIcon imgSrc={<CiShop />} text="Shop"></NavIcon>
      <NavIcon imgSrc={<MdManageSearch />} text="Explore"></NavIcon>
      <NavIcon imgSrc={<IoCartOutline />} text="Cart"></NavIcon>
      <NavIcon imgSrc={<FaRegHeart />} text="Favourite"></NavIcon>
      <NavIcon imgSrc={<CiUser />} text="Account"></NavIcon>
    </PageIconsContainer>
  );
};

export default NavIconsPage;
