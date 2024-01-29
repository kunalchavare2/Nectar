import React, { useState } from "react";
import CheckoutPriceStyle, { FreeDeliveryStyle } from "./CheckoutPrice.styled";
import CheckoutRow from "../../Molecules/CheckoutRow/CheckoutRow";
import Heading from "../../Atoms/Heading/Heading";
import Button from "../../Atoms/Button/Button";
import { checkout } from "../../../utils/constant/global-const";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/Slice/UserSlice/UserSlice";
import { addToOrders } from "../../../store/Slice/OrdersSlice/OrdersSlice";
import { currencyConverter } from "../../../utils/utility";

const CheckoutPrice = ({ checkoutData, showOrderModal, setShowOrderModal }) => {
  const appconfig = useSelector((state) => state.appconfig);
  const dispatch = useDispatch();

  const onPlaceOrderHandler = () => {
    setShowOrderModal(true);
    const date = new Date();
    dispatch(addToOrders({ id: date.toString(), ...checkoutData }));
    dispatch(clearCart());
  };

  return (
    <>
      <CheckoutPriceStyle>
        <Heading label="Price Details" type="large" />
        {checkout.map((check) => (
          <CheckoutRow
            label={check.label}
            priceLabel={currencyConverter(
              checkoutData[check.key],
              appconfig.currentCurrency
            )}
          />
        ))}
        <FreeDeliveryStyle>
          <span className="title">Free Delivery</span>
          <span className="description">
            For Orders above {currencyConverter(5, appconfig.currentCurrency)}
          </span>
        </FreeDeliveryStyle>
        <CheckoutRow
          label="Final Amount:"
          priceLabel={currencyConverter(
            checkoutData.finalAmount,
            appconfig.currentCurrency
          )}
        />
        <Button label={"Place Order"} onClick={onPlaceOrderHandler} />
      </CheckoutPriceStyle>
    </>
  );
};

export default CheckoutPrice;
