import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

const AppBarStyle = styled.div`
  width: 100%;
  /* position: absolute; */
  top: 0;
  background-color: #fff;
  position: fixed;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  color: ${(props) => props.theme.primary};
  font-size: 1.2rem;
  font-weight: 500;
  height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  .logo {
    position: absolute;
    left: 1rem;
  }
  .backBtn {
    position: absolute;
    left: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: inherit;
    background-color: transparent;
    border: none;
  }
  .pageName {
    display: inline-block;
  }
  .pageName::first-letter {
    text-transform: capitalize;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const IconBtnStyle = styled.button`
  background-color: transparent;
  outline: transparent;
  border: transparent;
  font-size: 1.438rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BtnWrapperStyle = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export default AppBarStyle;
