import React from "react";
import LogoStyle, { BrandName } from "./Logo.styled";
import { ReactComponent as LogoSvg } from "../../../assets/icons/logo.svg";

const Logo = ({ showText = true }) => {
  return (
    <LogoStyle>
      <LogoSvg />
      {showText && <BrandName>Nectar</BrandName>}
    </LogoStyle>
  );
};

export default Logo;
