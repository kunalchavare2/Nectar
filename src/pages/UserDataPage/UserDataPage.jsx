import React from 'react';
import UserDetails from '../../components/Organisams/UserDetails/UserDetails.jsx';
import ProfilePicture from '../../assets/images/profile-picture.png';
import UserProfile from '../../components/Molecules/UserProfile/UserProfile';
import Button from '../../components/Atoms/Button/Button';
import {ButtonWrapper} from './UserDataPage.styled.js';
const UserDataPage = () => {
    return (
        <div>

            <UserProfile photo={ProfilePicture} userName="Afsar Hossen" userMailId="Imshuvo97@gmail.com" />
            <UserDetails/>          
            <ButtonWrapper>
                <Button label="Log Out"/>
            </ButtonWrapper>  
        </div>
    )
}


export default UserDataPage;