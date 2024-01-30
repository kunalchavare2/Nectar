import styled from "styled-components";
import { color, device } from "../../utils/constant/style-const";

const CartPageStyle = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  margin-top: 2rem;
  @media ${device.tablet} {
    margin: unset;
  }
`;

export const CartItemsWrapperStyle = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    .divider {
      height: 100%;
      width: 1px;
      background-color: ${color.gray100};
      margin: 0 1rem;
    }
  }
`;

export const CartItemsStyle = styled.div`
  max-width: 800px;
  padding-top: 2rem;
  position: relative;
  /* overflow: hidden; */
  .products {
    height: 90%;
    overflow-y: scroll;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
  @media ${device.tablet} {
    flex: 4;
  }
`;

export const HeadingStyle = styled.div`
  margin-bottom: 2rem;
  width: fit-content;
  z-index: 500;
  color: ${(props) => props.theme.primary};
`;
export default CartPageStyle;
