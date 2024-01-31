import styled from "styled-components";
import { color, fontSize } from "../../../utils/constant/style-const";
import Button from "../../Atoms/Button/Button";

const OrderPlaceStyle = styled.div`
  position: relative;
  background-color: ${color.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  .imgWrapper {
    svg {
      width: 150px;
      height: 150px;
      aspect-ratio: 1/1;
    }
  }
`;

export const IconButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: ${fontSize.titleLarge};
  padding: 0.3rem;
  width: fit-content;
  border: none;
  background-color: transparent;
  color: ${color.gray100};
  font-size: ${fontSize.headingMedium};
  &:hover {
    color: ${color.blue500};
  }
`;

export default OrderPlaceStyle;
