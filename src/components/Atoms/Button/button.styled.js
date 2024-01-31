import styled, { css } from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";
export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
`;
export const PriceSpan = styled.div`
  font-size: ${fontSize.captionRegular};
  font-style: normal;
  font-weight: ${fontWeight.semiBold};
  border-radius: 4px;
  background: ${(props) => props.theme.btnBackground};
  padding: 2px 5px;
`;
export const StyledButton = styled.button`
  color: ${(props) => props.theme.primary};
  font-size: ${fontSize.titleSmall};
  font-weight: ${fontWeight.semiBold};
  line-height: auto;
  border: 0;
  cursor: pointer;
  display: inline-block;
  border-radius: 19px;
  width: 100%;
  padding: 1rem;
  flex-shrink: 0;
  background: ${(props) => props.theme.btnBackground};

  ${(props) =>
    props.$transparent &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.accent};
      border: 1px solid ${(props) => props.theme.btnborder};
    `}

  /* Styles for icon buttons */
  &.storybook-button--icon {
    width: 45.67px;
    height: 45.67px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) =>
    props.$backgroundColor &&
    !props.$transparent &&
    css`
      background-color: ${props.$backgroundColor};
    `}
  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      color: ${(props) => props.theme.disabled};
    `}
`;
