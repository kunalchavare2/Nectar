import styled from "styled-components";
import { color, fontSize } from "../../../utils/constant/style-const";
export const CarouselContianer = styled.div`
  position: relative;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`;

export const CarouselImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
`;
export const CarouselContent = styled.div`
  position: absolute;
  text-align: center;
  top: 30%;
  left: 30%;
  color: ${color.white};
  div {
    font-size: ${fontSize.headingMedium};
    padding-bottom: 1rem;
    color: ${color.white};
  }
`;

export const CarouselButtons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;
