import React from "react";
import SelectMenuStyle from "./SelectMenu.styled";
import { sortTypes } from "./../../../utils/constant/global-const";

const SelectMenu = ({ list, onChange, defaultValue, ...props }) => {
  return (
    <SelectMenuStyle onChange={onChange} defaultValue={defaultValue}>
      {list.map((sort) => (
        <option value={sortTypes[sort].name}>{sortTypes[sort].name}</option>
      ))}
    </SelectMenuStyle>
  );
};

export default SelectMenu;
