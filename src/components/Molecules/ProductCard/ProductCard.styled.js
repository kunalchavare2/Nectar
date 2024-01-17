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
  display: flex;
  flex-direction: column;
  align-items: center;
  .card-img {
    width: 70%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 3/3;
  }

  .card-content {
    align-self: stretch;
  }

  .card-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .card-title {
    color: ${(props) => props.theme.primary};
    font-size: ${fontSize.body};
    font-style: normal;
    font-weight: ${600};
    line-height: 1.125rem;
    letter-spacing: 0.00625rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 100px;
    height: 36px;
  }

  .card-quantity {
    color: ${(props) => props.theme.secondary};
    font-size: ${fontSize.captionRegular};
    font-style: normal;
    font-weight: ${fontWeight.regular};
    line-height: 1.125rem;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 10px;
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

  ${(props) => layoutStyle(props.layout)}
`;

export default Card;

const commomCardStyles = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0;
  height: fit-content;

  .card-title {
    max-width: unset;
    height: auto;
  }

  .card-title {
    max-width: unset;
    height: auto;
  }
  .card-btn {
    display: none;
  }

  .card-img {
    width: 30%;
    height: 100px;
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

function layoutStyle(layout) {
  if (layout === "cart") {
    return css`
      ${commomCardStyles}

      .card-quantity-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-right: 3rem;
      }
    `;
  } else if (layout === "wishlist") {
    return css`
      ${commomCardStyles}
      .card-content {
        justify-content: flex-start;
      }

     
    `;
  }
}
