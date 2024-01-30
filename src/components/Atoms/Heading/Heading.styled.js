import styled, { css } from "styled-components";
import { fontWeight } from "../../../utils/constant/style-const";

const HeadingTypes = styled.div`
  color: ${(props) => props.textcolor};
  background-color: transparent;
  font-weight: ${fontWeight.semiBold};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "1rem";
      case "medium":
        return "1.125rem";
      case "large":
        return "1.5rem";
      default:
        return props.size;
    }
  }};
`;
export default HeadingTypes;
