import styled from "styled-components";
import { color, fontSize, opacity } from "../../../utils/constant/style-const";
import { fontWeight } from "./../../../utils/constant/style-const";

const CheckboxStyle = styled.label`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;

  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${color.black + opacity(60)};
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
  }

  div {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    color: #181725;
    font-size: ${fontSize.body};
    font-style: normal;
    font-weight: ${fontWeight.regular};
    line-height: normal;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  span {
    display: inline-block;
    cursor: pointer;
  }

  span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px;
    /* Safari */
    border-color: ${color.black + opacity(60)};
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  span::after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  /* Checked, Indeterminate */
  & input:checked,
  & input:indeterminate {
    background-color: ${color.green200};
  }

  & input:checked + span::before,
  & input:indeterminate + span::before {
    border-color: ${color.green200};
    background-color: ${color.green200};
  }

  & input:checked + span::after,
  & input:indeterminate + span::after {
    border-color: ${color.white};
  }

  & input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
  }

  /* Hover, Focus */
  &:hover > input {
    opacity: 0.04;
  }

  & input:focus {
    opacity: 0.12;
  }

  &:hover > input:focus {
    opacity: 0.16;
  }

  /* Active */
  & input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  & input:active + span::before {
    border-color: ${color.greenSheen};
  }

  & input:checked:active + span::before {
    border-color: transparent;
    background-color: ${color.black + opacity(60)};
  }

  /* Disabled */
  & input:disabled {
    opacity: 0;
  }

  & input:disabled + span {
    color: ${color.black + opacity(38)};
    cursor: initial;
  }

  & input:disabled + span::before {
    border-color: currentColor;
  }

  & input:checked:disabled + span::before,
  & input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
  }
`;

export default CheckboxStyle;
