import React from "react";
import { TagStyle } from "./Tag.styled";

const Tag = ({ label, color }) => {
  return <TagStyle backColor={color}>{label}</TagStyle>;
};

export default Tag;
