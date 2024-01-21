import styled, { css } from "styled-components";
import { device } from "../utils/constant/style-const";

const LayoutStyle = styled.div`
  height: inherit;
  .content {
    height: inherit;
  }

  .appBar {
    @media ${device.tablet} {
      display: none;
    }
  }
  .header {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
`;
export const Grid = css`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
`;
export const ContentStyle = styled.main`
  ${Grid}
  grid-template-columns:1fr;
  height: 100%;
  overflow: hidden;
  @media ${device.tablet} {
    padding-top: 4rem;
    grid-template-columns: ${(props) =>
      props.isShowFilter ? "100px 1fr" : "1fr"};
  }
`;

export const MainContentStyle = styled.div`
  height: inherit;
  overflow: scroll;
  padding-bottom: 4rem;

  @media ${device.tablet} {
    padding-bottom: 0;
  }
`;

export const FilterStyle = styled.div`
  display: none;
  @media ${device.tablet} {
    display: inline-block;
  }
`;

export default LayoutStyle;
