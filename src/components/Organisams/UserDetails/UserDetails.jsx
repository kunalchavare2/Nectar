import React from "react";
import UserData from "../../Molecules/UserData/UserData";
import order from "../../../assets/icons/order.svg";
import mydetails from "../../../assets/icons/mydetails.svg";
import about from "../../../assets/icons/about.svg";
import help from "../../../assets/icons/help.svg";
import location from "../../../assets/icons/location.svg";
import notifications from "../../../assets/icons/notifications.svg";
import paymentmethod from "../../../assets/icons/paymentmethod.svg";
import Promocard from "../../../assets/icons/Promocard.svg";
import { useNavigate } from "react-router";
import { ORDERS_ROUTE } from "../../../utils/constant/routes-cont";
const UserDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <UserData
        icon={order}
        imgAltDetails="order icon"
        dataName="Orders"
        onClick={() => {
          navigate(ORDERS_ROUTE, { replace: true });
        }}
      />

      <UserData
        icon={mydetails}
        imgAltDetails="details icon"
        dataName="Details"
      />

      <UserData
        icon={location}
        imgAltDetails="Delivery address icon"
        dataName="Delivery Address"
      />

      <UserData
        icon={paymentmethod}
        imgAltDetails="Payment Address icon"
        dataName="Payment Methods"
      />

      <UserData
        icon={Promocard}
        imgAltDetails="Promo card icon"
        dataName="promo card"
      />

      <UserData
        icon={notifications}
        imgAltDetails="notifications icon"
        dataName="Notifications"
      />

      <UserData icon={help} imgAltDetails="help icon" dataName="Help" />

      <UserData icon={about} imgAltDetails="about icon" dataName="About" />
    </>
  );
};
export default UserDetails;
