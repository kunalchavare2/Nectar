import React, { useEffect, useState } from "react";
import AppBarStyle, { BtnWrapperStyle, IconBtnStyle } from "./AppBar.styled";
import { useLocation, useNavigate } from "react-router";
import { IoArrowBackSharp, IoSearchOutline } from "react-icons/io5";
import Logo from "./../../Atoms/Logo/Logo";
import { ReactComponent as FilterIcon } from "../../../assets/icons/filter.svg";

const AppBar = ({ searchToggle }) => {
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
          fun: searchToggle,
        },
      ],
    },
    products: {
      back: true,
      title: "Products",
      buttons: [
        {
          icon: <IoSearchOutline />,
          fun: searchToggle,
        },
        {
          icon: <FilterIcon />,
          fun: () => {},
        },
      ],
    },
    cart: {
      back: true,
      title: "Cart",
      buttons: [
        {
          icon: <IoSearchOutline />,
          fun: () => {},
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
    let arr = location.pathname.split("/");
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
              urlData.buttons.map((button, index) => (
                <IconBtnStyle
                  key={urlData.title + index}
                  onClick={button.fun && button.fun}
                >
                  {button.icon}
                </IconBtnStyle>
              ))}
          </BtnWrapperStyle>
        </>
      )}
    </AppBarStyle>
  );
};

export default AppBar;
