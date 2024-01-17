import React from "react";
import InfoTypesStyle from "./InfoTypes.styled";
import Info from "./../../Molecules/Info/Info";
import { ReactComponent as EmptyCart } from "../../../assets/images/empty-cart.svg";
import { ReactComponent as PageNotFound } from "../../../assets/images/page-not-found.svg";
import { PropTypes } from "prop-types";

const InfoTypes = ({ type }) => {
  const infoTypes = {
    emptyCart: {
      isSvg: true,
      img: <EmptyCart />,
      message: "Your Cart is empty!",
    },
    pageNotFound: {
      isSvg: true,
      img: <PageNotFound />,
      message: "Look like you're lost!",
    },
  };
  return (
    <InfoTypesStyle>
      <Info
        isSvg={infoTypes[`${type}`].isSvg}
        img={infoTypes[`${type}`].img}
        message={infoTypes[`${type}`].message}
      />
    </InfoTypesStyle>
  );
};

InfoTypes.proptype = {
  // type have different types of states
  type: PropTypes.oneOf(["emptyCart", "pageNotFound"]),
};

export default InfoTypes;
