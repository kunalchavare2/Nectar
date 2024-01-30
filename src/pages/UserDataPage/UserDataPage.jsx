import React from "react";
import UserDetails from "../../components/Organisams/UserDetails/UserDetails.jsx";
import ProfilePicture from "../../assets/images/profile-picture.png";
import UserProfile from "../../components/Molecules/UserProfile/UserProfile";
import Button from "../../components/Atoms/Button/Button";
import {
  ButtonWrapper,
  CloseBtn,
  ProfilePageStyle,
} from "./UserDataPage.styled.js";
import Drawer from "../../components/Atoms/Drawer/Drawer.jsx";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
const UserDataPage = () => {
  const navigate = useNavigate();
  const styles = `
    display: flex;
    flex-direction: column;
    align-items: flex-end;  
`;

  return (
    <Drawer extraStyles={styles} isOpen={true}>
      <ProfilePageStyle>
        <UserProfile
          photo={ProfilePicture}
          userName="Afsar Hossen"
          userMailId="Imshuvo97@gmail.com"
        />
        <UserDetails />
        <ButtonWrapper>
          <Button label="Log Out" />
        </ButtonWrapper>
        <CloseBtn
          icon={<IoClose />}
          transparent={true}
          onClick={() => {
            navigate(-1);
          }}
        />
      </ProfilePageStyle>
    </Drawer>
  );
};

export default UserDataPage;
