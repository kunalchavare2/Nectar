import React, { useEffect, useState } from "react";
import AppBarStyle, { BtnWrapperStyle, IconBtnStyle } from "./AppBar.styled";
import { useLocation, useNavigate } from "react-router";
import { IoArrowBackSharp, IoSearchOutline } from "react-icons/io5";
import Logo from "./../../Atoms/Logo/Logo";

const AppBar = ({ back = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [urlData, seturlData] = useState(null);

  const PageAppbarData = {
    home: {
      back: false,
      title: null,
      buttons: [
        {
          icon: <IoSearchOutline />,
        },
      ],
    },
    products: {
      back: true,
      title: "Products",
      buttons: [
        {
          icon: <IoSearchOutline />,
        },
        {
          icon: <IoSearchOutline />,
        },
      ],
    },
    cart: {
      back: true,
      title: "Cart",
      buttons: [
        {
          icon: <IoSearchOutline />,
        },
        {
          icon: <IoSearchOutline />,
        },
      ],
    },
    wishlist: {
      back: true,
      title: "WishList",
      buttons: [
        {
          icon: <IoSearchOutline />,
        },
        {
          icon: <IoSearchOutline />,
        },
      ],
    },
  };

  useEffect(() => {
    console.log(location.pathname);
    let arr = location.pathname.split("/");
    console.log(PageAppbarData[arr[arr.length - 1]]);
    seturlData((prev) => {
      return PageAppbarData[arr[arr.length - 1]]
        ? PageAppbarData[arr[arr.length - 1]]
        : null;
    });
  }, [location]);

  return (
    <AppBarStyle>
      {urlData && (
        <>
          {urlData.back && (
            <button className="backBtn" onClick={() => navigate(-1)}>
              <IoArrowBackSharp />
            </button>
          )}
          {!urlData.back && <Logo className="logo" />}

          {urlData.back && <span className="pageName">{urlData.title}</span>}

          <BtnWrapperStyle>
            {urlData &&
              urlData.buttons.map((button) => (
                <IconBtnStyle onClick={() => {}}>{button.icon}</IconBtnStyle>
              ))}
          </BtnWrapperStyle>
        </>
      )}
    </AppBarStyle>
  );
};

export default AppBar;
