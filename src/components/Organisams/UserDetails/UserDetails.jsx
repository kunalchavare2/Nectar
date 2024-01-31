import React, { useContext } from "react";
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
import Heading from "../../Atoms/Heading/Heading";
import Text from "../../Atoms/Text/Text";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import { ThemeDispatcher } from "../../../Theme/Theme";
import { ThemeData } from "../../../Theme/ThemeData";
import { ThemeContainer } from "./UserDetails.styled";
import { useDispatch } from "react-redux";
import { changeCurrency } from "../../../store/Slice/AppConfig/AppConfig";
import { currency } from "../../../utils/constant/app-const";
const UserDetails = () => {
  const chnageTheme = useContext(ThemeDispatcher);
  const navigate = useNavigate();
  const themes = ["Light", "Dark", "Other"];
  const currencyList = ["Doller", "Rupee"];
  const dispatch = useDispatch();

  const onChnageHandler = (ev) => {
    chnageTheme(ThemeData[ev.target.value.toLowerCase()]);
  };

  const oncurrencyHandler = (ev) => {
    dispatch(changeCurrency(currency[ev.target.value.toLowerCase()]));
  };

  return (
    <>
      <UserData
        icon={mydetails}
        imgAltDetails="details icon"
        dataName="Settings"
      >
        <ThemeContainer className="themeContainer">
          <Text label="Theme" />
          <SelectMenu isObj={false} list={themes} onChange={onChnageHandler} />
        </ThemeContainer>
        <ThemeContainer className="themeContainer">
          <Text label="Currency" />
          <SelectMenu
            isObj={false}
            list={currencyList}
            onChange={oncurrencyHandler}
          />
        </ThemeContainer>
      </UserData>
      <UserData
        icon={order}
        imgAltDetails="order icon"
        dataName="Orders"
        onClick={() => {
          navigate(ORDERS_ROUTE, { replace: true });
        }}
      />

      {/* <UserData
        icon={mydetails}
        imgAltDetails="details icon"
        dataName="Details"
      /> */}

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

      {/* <UserData
        icon={Promocard}
        imgAltDetails="Promo card icon"
        dataName="promo card"
      />

      <UserData
        icon={notifications}
        imgAltDetails="notifications icon"
        dataName="Notifications"
      /> */}

      <UserData icon={help} imgAltDetails="help icon" dataName="Help" />

      <UserData icon={about} imgAltDetails="about icon" dataName="About" />
    </>
  );
};
export default UserDetails;
