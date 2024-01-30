import styled from "styled-components";
import { color, device } from "../../../utils/constant/style-const";
import Button from "../../Atoms/Button/Button";
export const FilterCategories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${color.gray100};
`;

export const Filter = styled.div`
  position: fixed;
  height: fit-content;
  width: 100%;
  z-index: 2000;
  background-color: red;
  left: 0;
  bottom: 0;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.body};

  @media ${device.tablet} {
    position: unset;
    border-radius: unset;
    box-shadow: unset;
    max-width: 500px;
  }
`;

export const IconButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  padding: 0.3rem;
  width: fit-content;
  border: none;
  z-index: 2000;
  background-color: transparent;
  color: ${color.gray100};
  font-size: 1.7rem;
  &:hover {
    color: ${color.blue500};
  }
  @media ${device.tablet} {
    display: none;
  }
`;
