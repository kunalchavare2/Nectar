import styled, { css } from "styled-components";
export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
`;
export const PriceSpan = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 150% */
  border-radius: 4px;
  background: #489e67;
  padding: 2px 5px;
`;
export const StyledButton = styled.button`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  border-radius: 19px;
  width: 100%;
  /* height: 67px; */
  padding: 1rem;
  flex-shrink: 0;

  ${(props) =>
    props.$transparent &&
    css`
      background-color: #fff;
      color: #53b175;
      border: 1px solid rgba(226, 226, 226, 1);
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
      color: grey;
    `}
`;
