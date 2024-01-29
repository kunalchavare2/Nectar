import styled from "styled-components";
import Heading from "./../../components/Atoms/Heading/Heading";
import { color } from "../../utils/constant/style-const";

const CartPageStyle = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 0 1rem;
`;

export const CartItemsWrapperStyle = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .divider {
    height: 100%;
    width: 1px;
    background-color: ${color.gray100};
    margin: 0 1rem;
  }
`;

export const CartItemsStyle = styled.div`
  flex: 4;
  max-width: 800px;
  padding-top: 2rem;
  overflow: hidden;
  .products {
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
`;

export const HeadingStyle = styled.div`
  margin-bottom: 2rem;
  width: fit-content;
  z-index: 500;
  background-color: ${color.white};
`;
export default CartPageStyle;
