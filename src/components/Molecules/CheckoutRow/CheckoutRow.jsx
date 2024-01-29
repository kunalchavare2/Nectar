import React from "react";
import CheckoutRowStyle from "./CheckoutRow.styled";
import Heading from "../../Atoms/Heading/Heading";
import Text from "../../Atoms/Text/Text";

const CheckoutRow = ({ label, priceLabel }) => {
  return (
    <CheckoutRowStyle>
      <Heading type="medium" label={label} />
      <Text type="medium" label={priceLabel} />
    </CheckoutRowStyle>
  );
};

export default CheckoutRow;
