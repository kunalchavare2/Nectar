import react from 'react';
import PropTypes from "prop-types";
import DisplayPicture from '../../Atoms/DisplayPicture/DisplayPicture';
import Heading from '../../Atoms/Heading/Heading.jsx';
import Text from '../../Atoms/Text/Text.jsx';
import {Details,UserDetails} from "./UserProfile.styled.js";
const UserProfile = ({photo,userName,userMailId}) => {
    return (
        <>
            <Details>
                <DisplayPicture photo={photo} />
                <UserDetails>
                    <Heading label={userName}/>
                    <Text label ={userMailId}/>
                </UserDetails>
            </Details>
        </>
    );
}
UserProfile.propTypes = {
    photo:PropTypes.any,
    userName:PropTypes.string,
    userMailId:PropTypes.string,
};
export default UserProfile;