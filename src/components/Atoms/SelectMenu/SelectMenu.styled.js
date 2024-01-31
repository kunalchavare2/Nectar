import styled from "styled-components";
import { fontSize } from "../../../utils/constant/style-const";

const SelectMenuStyle = styled.select`
  font-size: ${fontSize.body};
  padding: 0.6rem 0.8rem;
  border-radius: 5px;
  border: transparent;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.searchBackground};
`;

export default SelectMenuStyle;
