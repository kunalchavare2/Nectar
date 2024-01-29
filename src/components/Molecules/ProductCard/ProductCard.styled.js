import styled, { css } from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

const Card = styled.div`
  color: ${(props) => props.theme.primary};
  border-radius: 1.125rem;
  width: ${(props) => props.cardstyle.width};
  border: 1px solid ${color.gray100};
  background-color: ${(props) => props.theme.cardBackground};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .card-img {
    width: 70%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 3/3;
    /* mix-blend-mode: lighten; */
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
    color: ${(props) => props.theme.primary};
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
    color: ${(props) => props.theme.primary};
    font-size: ${fontSize.titleSmall};
    font-style: normal;
    font-weight: ${fontWeight.semiBold};
    line-height: 1.125rem;
    letter-spacing: 0.00625rem;
  }

  ${(props) => layoutStyle(props.$layout)}
`;

export default Card;

export const TagWrapper = styled.span`
  display: inline-block;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

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

function layoutStyle($layout) {
  if ($layout === "cart") {
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
  } else if ($layout === "wishlist" || $layout === "search") {
    return css`
      ${commomCardStyles}
      .card-content {
        justify-content: flex-start;
      }
    `;
  }
}
