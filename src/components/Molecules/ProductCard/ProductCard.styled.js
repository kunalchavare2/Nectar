import React from "react";
import styled, { css } from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

const Card = styled.div`
  color: ${(props) => props.theme.primary};
  border-radius: 1.125rem;
  width: ${(props) =>
    props.style && (props.style.width ? props.style.width : "fit-content")};
  border: 1px solid ${color.gray100};
  padding: 1rem;
  ${(props) => layoutStyle(props.layout)}

  .card-img {
    width: 100px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .card-title {
    color: ${(props) => props.theme.primary};
    font-size: ${fontSize.body};
    font-style: normal;
    font-weight: ${600};
    line-height: 1.125rem;
    letter-spacing: 0.00625rem;
    text-align: left;
  }

  .card-quantity {
    color: ${(props) => props.theme.secondary};
    font-size: ${fontSize.captionRegular};
    font-style: normal;
    font-weight: ${fontWeight.regular};
    line-height: 1.125rem;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .card-priceWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-price {
    color: #181725;
    font-size: ${fontSize.titleSmall};
    font-style: normal;
    font-weight: ${fontWeight.semiBold};
    line-height: 1.125rem;
    letter-spacing: 0.00625rem;
  }
`;

export default Card;

function layoutStyle(layout) {
  if (layout === "cart") {
    return css`
      display: flex;
      flex-direction: row;
      gap: 1rem;
      position: relative;
      border-left: none;
      border-right: none;
      border-radius: 0;

      .card-btn {
        display: none;
      }

      .card-quantity-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-right: 3rem;
      }
      .card-close-btn {
        position: absolute;
        top: 4%;
        right: 3%;
        font-size: ${fontSize.titleLarge};
        background: transparent;
        border: none;
        color: ${(props) => props.theme.secondary};
      }
      .card-close-btn:hover {
        color: ${color.black500};
      }
    `;
  } else if (layout === "wishlist") {
    return css`
      display: flex;
      flex-direction: row;
      gap: 1rem;

      .card-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
    `;
  }
}
