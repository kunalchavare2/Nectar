import styled from "styled-components";
import { color, opacity } from "../../../utils/constant/style-const";
export const SearchStyle = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  width: 100%;

  .icon {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
`;
export const Inputbar = styled.input`
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;

  &::placeholder {
    color: #9e9ea7;
  }

  &:focus,
  &:hover {
    outline: none;
    border-color: ${color.green100 + opacity(40)};
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
`;
export const Button = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  padding: 0px;
`;
