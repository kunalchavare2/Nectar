import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TextTypes from "./Text.styled";

const Text = ({ type, label, tcolor, ...props }) => {
  return (
    <TextTypes size={type} textcolor={tcolor} {...props}>
      {label}
    </TextTypes>
  );
};
Text.propTypes = {
  type: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  tcolor: PropTypes.string,
};
Text.defaultProps = {
  backgroundColor: null,
  tcolor: "#7C7C7C",
  type: "small",
  label: "coke",
};
export default Text;
