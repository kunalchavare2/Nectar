import styled from "styled-components";

const SelectMenuStyle = styled.select`
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  border-radius: 5px;
  border: transparent;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.searchBackground};
`;

export default SelectMenuStyle;
