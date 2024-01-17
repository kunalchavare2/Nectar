import React from "react";
import { CountStyle, IconContainer } from "./NavIcon.styled";
import { Link, NavLink } from "react-router-dom";

const NavIcon = ({ icon, text, link, hideIcon = false, count }) => {
  return (
    <IconContainer>
      <NavLink to={link} className="link" activeClassName="active">
        {!hideIcon && <div className="icon">{icon}</div>}
        {text && <p className="icon-text">{text}</p>}
        {count !== undefined && <CountStyle>{count}</CountStyle>}
      </NavLink>
    </IconContainer>
  );
};
export default NavIcon;
