import styled from "styled-components";
import { device } from "../../utils/constant/style-const";

const WishlistPageStyle = styled.div`
  height: inherit;
  margin-top: 3rem;
  @media ${device.tablet} {
    margin: unset;
  }
`;

export default WishlistPageStyle;
