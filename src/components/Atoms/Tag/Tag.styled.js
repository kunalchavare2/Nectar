import styled from "styled-components";
import {
  fontSize,
  fontWeight,
  opacity,
} from "../../../utils/constant/style-const";

export const TagStyle = styled.p`
  padding: 0.2rem;
  color: ${(prop) => prop.theme.primary};
  background-color: ${(prop) => prop.backColor + opacity(80)};
  font-size: 0.7rem;
  font-weight: ${fontWeight.medium};
  z-index: 200;
  width: fit-content;
  border-radius: 5px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
