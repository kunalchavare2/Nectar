import styled from "styled-components";
import Button from "../../components/Atoms/Button/Button";
import { fontSize } from "../../utils/constant/style-const";

export const ProfilePageStyle = styled.div`
  width: 40%;
  position: relative;

  background-color: ${(props) => props.theme.body};
`;

export const ButtonWrapper = styled.div`
  margin: 30px 10px;
`;

export const CloseBtn = styled(Button)`
  width: fit-content;
  border: transparent;
  position: absolute;
  top: 1rem;
  right: 0;
  font-size: ${fontSize.titleLarge};
`;
