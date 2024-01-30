import React from "react";
import CheckoutRowStyle from "./CheckoutRow.styled";
import Heading from "../../Atoms/Heading/Heading";
import Text from "../../Atoms/Text/Text";
import { fontSize } from "../../../utils/constant/style-const";

const CheckoutRow = ({ label, priceLabel }) => {
  return (
    <CheckoutRowStyle>
      <Heading type={fontSize.body} label={label} />
      <Text type="medium" label={priceLabel} />
    </CheckoutRowStyle>
  );
};

export default CheckoutRow;
