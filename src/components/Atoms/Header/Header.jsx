import React from "react";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ type }) => {
  return <div className={type}>{"title"}</div>;
};

Header.propTypes = {
  /**
   * This will decide which type of header it is
   */
  type: PropTypes.oneOf(["denger", "warning", "default"]),
  // title: PropTypes.string,
};

Header.defaultProps = {
  type: "default",
  // title: "Hello",
};

export default Header;
