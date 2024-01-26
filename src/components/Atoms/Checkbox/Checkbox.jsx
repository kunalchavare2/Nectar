import React from "react";
import CheckboxStyle from "./Checkbox.styled";

const Checkbox = ({ label, isChecked, onChange, defaultChecked, ...props }) => {
  return (
    <CheckboxStyle type="checkbox" id="categoryName" name="categoryName">
      <input
        checked={isChecked}
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
