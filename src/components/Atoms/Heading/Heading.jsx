import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import HeadingTypes from './Heading.styled';

const Heading = ({type,label,tcolor}) => {
    return (
       <HeadingTypes size={type} textcolor={tcolor}>{label}</HeadingTypes>
    );
};
Heading.propTypes = {
    type: PropTypes.oneOf(['small','medium','large']),
    label: PropTypes.string.isRequired,
    tcolor:PropTypes.string,
}
Heading.defaultProps = {
    backgroundColor: null,
    tcolor:'green',
    type: 'small',
    label: 'fruits',
};
export default Heading;

