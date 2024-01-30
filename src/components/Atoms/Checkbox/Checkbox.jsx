import React, { useEffect, useState } from "react";
import CheckboxStyle from "./Checkbox.styled";

const Checkbox = ({ label, isChecked, onChange, defaultChecked, ...props }) => {
  useEffect(() => {
    if (label) {
      document.getElementById(`${label}`).checked = defaultChecked;
    }
  }, [defaultChecked]);

  return (
    <CheckboxStyle type="checkbox" id="categoryName" name="categoryName">
      <input
        className="inputCheck "
        id={label}
        type="checkbox"
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
