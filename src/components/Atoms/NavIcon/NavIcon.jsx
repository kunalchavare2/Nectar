import React from "react";
import { IconContainer } from "./NavIcon.styled";


const NavIcon =({imgSrc,text})=> {
return (
    <IconContainer>
        <div className="icon">{imgSrc}</div>
        <p className="icon-text">{text}</p>
    </IconContainer>
      
)
} 
export default NavIcon;