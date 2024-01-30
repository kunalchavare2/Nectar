import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyConverter } from "../../utils/utility";
import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import {
  OrdersPageStyle,
  OrderContianer,
  OrderedItem,
  OrderedList,
} from "./OrdersPage.styled";
import Text from "../../components/Atoms/Text/Text";
import { v4 as uuidv4 } from "uuid";

const OrdersPage = () => {
  const orders = useSelector((state) => state.orders.orders);
  const appconfig = useSelector((state) => state.appconfig);

  const formatDate = (date) => {
    const presentDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return presentDate;
  };
  console.log(orders);

  return (
    <OrdersPageStyle>
      {orders.lenght === 0 && <InfoTypes type="emptyCart" />}

      {orders.map((item) => {
        const id = uuidv4();
        const date = new Date(item.id);
        return (
          <OrderContianer key={id}>
            <OrderedList>
              <OrderedItem>
                <Text label="Order Placed" type="medium" />
                <Text label={formatDate(date)} type="small" />
              </OrderedItem>
              <OrderedItem>
                <Text label={"TotalPrice"} type="medium" />
                <Text
                  label={currencyConverter(
                    item["finalAmount"],
                    appconfig.currentCurrency
                  )}
                  tcolor="#53B175"
                  type="small"
                />
              </OrderedItem>

              <OrderedItem>
                <Text label="Ship To" type="medium" />
                <Text label="Ram" type="small" />
              </OrderedItem>
            </OrderedList>
            <OrderedItem>
              <Text label="Order ID" type="medium" />
              <Text label={id} type="small" />
            </OrderedItem>
          </OrderContianer>
        );
      })}
    </OrdersPageStyle>
  );
};

export default OrdersPage;
