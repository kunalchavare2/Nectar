import styled, { css } from "styled-components";
import { fontSize, fontWeight } from "../../../utils/constant/style-const";

const HeadingTypes = styled.div`
  color: ${(props) => props.textcolor};
  background-color: transparent;
  font-weight: ${fontWeight.semiBold};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return fontSize.titleSmall;
      case "medium":
        return fontSize.titleMedium;
      case "large":
        return fontSize.titleLarge;
      default:
        return props.size;
    }
  }};
`;
export default HeadingTypes;
