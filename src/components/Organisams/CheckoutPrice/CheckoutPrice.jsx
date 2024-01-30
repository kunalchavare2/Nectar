import React, { useEffect, useState } from "react";
import CheckoutPriceStyle, {
  Accordian,
  FreeDeliveryStyle,
  IconButton,
} from "./CheckoutPrice.styled";
import CheckoutRow from "../../Molecules/CheckoutRow/CheckoutRow";
import Heading from "../../Atoms/Heading/Heading";
import Button from "../../Atoms/Button/Button";
import { checkout } from "../../../utils/constant/global-const";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/Slice/UserSlice/UserSlice";
import { addToOrders } from "../../../store/Slice/OrdersSlice/OrdersSlice";
import { currencyConverter } from "../../../utils/utility";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useWindowDimensions from "../../../hooks/useWindowDimension";

const CheckoutPrice = ({ checkoutData, showOrderModal, setShowOrderModal }) => {
  const appconfig = useSelector((state) => state.appconfig);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { height, width } = useWindowDimensions();

  const onPlaceOrderHandler = () => {
    setShowOrderModal(true);
    const date = new Date();
    dispatch(addToOrders({ id: date.toString(), ...checkoutData }));
    dispatch(clearCart());
  };

  useEffect(() => {
    if (width > 768 && !isActive) {
      setIsActive(true);
    } else if (width < 768 && isActive) {
      setIsActive(false);
    }
  }, [height, width]);

  return (
    <>
      <CheckoutPriceStyle>
        <Accordian>
          <div className="accordian__btn">
            <Heading label="Price Details" type="large" />
            <IconButton
              icon={!isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
              onClick={() => setIsActive(!isActive)}
            />
          </div>
          {isActive && (
            <div className="content">
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
                  For Orders above
                  {currencyConverter(5, appconfig.currentCurrency)}
                </span>
              </FreeDeliveryStyle>
            </div>
          )}
        </Accordian>

        <CheckoutRow
          label="Final Amount:"
          priceLabel={currencyConverter(
            checkoutData.finalAmount,
            appconfig.currentCurrency
          )}
        />
        <Button
          label={"Place Order"}
          onClick={onPlaceOrderHandler}
          price={currencyConverter(
            checkoutData.finalAmount,
            appconfig.currentCurrency
          )}
        />
      </CheckoutPriceStyle>
    </>
  );
};

export default CheckoutPrice;
