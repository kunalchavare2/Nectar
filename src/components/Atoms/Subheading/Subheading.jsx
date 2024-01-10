import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import SubHeadingTypes from './Subheading.styled';

const Subheading = ({type,label,tcolor}) => {
    return (
       <SubHeadingTypes size={type} textcolor={tcolor}>{label}</SubHeadingTypes>
    );
};
Subheading.propTypes = {
    type: PropTypes.oneOf(['small','medium','large']),
    label: PropTypes.string.isRequired,
    tcolor:PropTypes.string,
}
Subheading.defaultProps = {
    backgroundColor: null,
    tcolor:'green',
    type: 'small',
    label: 'coke',
};
export default Subheading;
