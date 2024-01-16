import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: ${color.gray400};
    text-decoration: none;
    align-self: strech;
  }
  .active {
    color: ${color.green100};
  }
  .active > p {
    color: ${color.green100};
  }
  .icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .icon {
    font-size: 23px;
  }
  p {
    color: #181725;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const CountStyle = styled.div`
  background-color: red;
  font-size: 0.7rem;
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
`;
