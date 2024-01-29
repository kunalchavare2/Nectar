import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";

import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import OrdersPageStyle from "./OrdersPage.styled";

const OrdersPage = () => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);
  return (
    <OrdersPageStyle>
      {orders.lenght === 0 && <InfoTypes type="emptyCart" />}

      {orders.map((item) => {
        return (
          <div style={{ marginBottom: "1rem" }}>
            {Object.keys(item).map((key) => (
              <div>
                <span>{key}</span>
                <span>{item[key]}</span>
              </div>
            ))}
          </div>
        );
      })}
    </OrdersPageStyle>
  );
};

export default OrdersPage;
