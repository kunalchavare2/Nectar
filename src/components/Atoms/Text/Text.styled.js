import styled, { css } from "styled-components";
import { fontSize } from "../../../utils/constant/style-const";

const TextTypes = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return fontSize.captionRegular;
      case "medium":
        return fontSize.body;
      case "large":
        return fontSize.titleSmall;
      default:
        return props.size;
    }
  }};
`;
export default TextTypes;
