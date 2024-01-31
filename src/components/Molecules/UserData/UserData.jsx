import React from "react";
import Heading from "../../Atoms/Heading/Heading";
import PropTypes from "prop-types";
import rightarrow from "../../../assets/icons/rightarrow.svg";
import { UserDataItem, DataIconTitle, Button } from "./UserData.styled";
const UserData = ({ icon, imgAltDetails, dataName, onClick, children }) => {
  return (
    <div onClick={onClick}>
      <UserDataItem>
        <DataIconTitle>
          <img src={icon} alt={imgAltDetails} />
          <Heading type="medium" label={dataName} />
        </DataIconTitle>
        <Button>
          <img src={rightarrow} alt="right arrow" />
        </Button>
      </UserDataItem>
      {children}
    </div>
  );
};
UserData.propTypes = {
  icon: PropTypes.any,
  imgAltDetails: PropTypes.string,
  dataName: PropTypes.string,
};

export default UserData;
