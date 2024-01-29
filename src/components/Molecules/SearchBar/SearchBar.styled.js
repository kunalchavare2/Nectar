import styled from "styled-components";
import Button from "../../Atoms/Button/Button";

const SearchBarStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

export const IconButton = styled(Button)`
  font-size: 1.5rem;
  padding: 0.3rem;
  width: fit-content;
`;

export default SearchBarStyle;
