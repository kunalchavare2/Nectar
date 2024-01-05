import React from "react";
import styled from "styled-components";
import InputStyles from "./Input.styled";

const Input = styled.input`
  ${InputStyles};
`;

const InputType = () => {
  return (
    <div>
      <Input />
      <br />
      <Input placeholder="A bigger text input" size="10em" />
    </div>
  );
};

export default InputType;
