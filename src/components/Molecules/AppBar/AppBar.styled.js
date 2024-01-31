import styled from "styled-components";
import {
  boxshadow,
  device,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

const AppBarStyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground};
  position: fixed;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  color: ${(props) => props.theme.primary};
  font-size: ${fontSize.titleSmall};
  font-weight: ${fontWeight.medium};
  height: 3rem;
  box-shadow: ${boxshadow.appbar};

  .logo {
    position: absolute;
    left: 1rem;
  }
  .backBtn {
    position: absolute;
    left: 1rem;
    font-size: ${fontSize.titleSmall};
    font-weight: ${fontWeight.semiBold};
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
  font-size: ${fontSize.titleLarge};
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
