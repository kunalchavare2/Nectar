import styled from "styled-components";
import test from "../../../assets/icons/filter.svg";
import { color, fontSize } from "../../../utils/constant/style-const";
export const InputBlock = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
`;
export const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearnce: none;
  width: 11%;
  aspect-ratio: 1/1;
  height: 100%;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  border: 1.5px solid ${color.gray100};
  margin-right: 10px;
  &:checked {
    background-color: ${(props) => props.theme.accent};
    border: none;
  }
  &:checked::before {
    content: "\u2713";
    background-image: ${test};
    display: block;
    text-align: center;
    font-size: ${fontSize.body};
    color: ${color.white};
  }
`;
export const Label = styled.label`
  font-size: ${fontSize.body};
`;
