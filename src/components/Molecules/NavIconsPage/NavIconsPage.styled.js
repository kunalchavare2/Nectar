import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";
export const PageIconsContainer = styled.div`
  border-radius: 15px 15px 0px 0px;
  background: #fff;
  box-shadow: 0px -12px 37px 0px rgb(185 185 185 / 50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: fit-content;
  padding: 0.5rem 0;
  z-index: 700;

  @media ${device.tablet} {
    display: none;
  }
`;
