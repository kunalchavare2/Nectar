import styled from "styled-components";
import { device } from "../utils/constant/style-const";

const LayoutStyle = styled.div`
  height: inherit;
  .content {
    height: inherit;
  }
`;

export const ContentStyle = styled.main`
  @media ${device.laptop} {
    margin-top: 3rem;
  }
`;

export const MainContentStyle = styled.div``;

export const FilterStyle = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export default LayoutStyle;
