import React, { useEffect, useState } from "react";
import CheckboxStyle from "./Checkbox.styled";
import { queryStringToObject } from "../../../utils/utility";
import { useLocation } from "react-router";

const Checkbox = ({ label, isChecked, onChange, defaultChecked, ...props }) => {
  useEffect(() => {
    if (label) {
      document.getElementById(`${label}`).checked = defaultChecked;
    }
  }, [defaultChecked]);

  const onChangeHandler = (ev) => {
    console.log(label, ev.target.checked);
    onChange(ev);
  };

  return (
    <CheckboxStyle type="checkbox" id="categoryName" name="categoryName">
      <input
        className="inputCheck "
        id={label}
        type="checkbox"
        // checked={defaultCheck}
        onChange={onChange}
        defaultChecked={defaultChecked}
        {...props}
      />
      <span></span>
      <div>{label}</div>
    </CheckboxStyle>
  );
};

export default Checkbox;
