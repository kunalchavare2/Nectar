import styled from "styled-components";
import Button from "../../Atoms/Button/Button";
import { device } from "../../../utils/constant/style-const";

const SearchBarStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const IconButton = styled(Button)`
  font-size: 1.5rem;
  padding: unset;
  width: fit-content;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    display: none;
  }
`;

export default SearchBarStyle;
