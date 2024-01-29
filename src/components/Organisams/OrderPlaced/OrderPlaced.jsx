import React from "react";
import OrderPlaceStyle, { IconButton } from "./OrderPlaced.styled";
import Drawer from "./../../Atoms/Drawer/Drawer";
import Info from "./../../Molecules/Info/Info";
import { ReactComponent as OrderSuccess } from "../../../assets/images/orderSuccess.svg";
import Text from "../../Atoms/Text/Text";
import Heading from "../../Atoms/Heading/Heading";
import Button from "../../Atoms/Button/Button";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const OrderPlaced = ({ showSuccess, setShowSuccess }) => {
  const navigate = useNavigate();
  const navigateToOrders = () => {
    setShowSuccess(false);
    //Navigate to Orders page
    navigate("../orders", { replace: true });
  };

  return (
    <Drawer isOpen={showSuccess}>
      <OrderPlaceStyle>
        <div className="imgWrapper">
          <Info img={<OrderSuccess />} />
        </div>
        <Heading label="Your Order has been accepted" type="large" />
        <Text
          label="Your items has been placcd and is on it’s way to being processed"
          type="small"
        />
        <Button label="Go To Orders" onClick={navigateToOrders} />
        <IconButton icon={<IoClose />} onClick={() => setShowSuccess(false)} />
      </OrderPlaceStyle>
    </Drawer>
  );
};

export default OrderPlaced;
