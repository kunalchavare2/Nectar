import styled from "styled-components";
import {
  fontSize,
  fontWeight,
  opacity,
} from "../../../utils/constant/style-const";
export const Horizon = styled.span`
  width: 248px;
  height: 105px;
  flex-shrink: 0;
  border-radius: 18px;
  background: ${(props) => props.backgroundColor + opacity(26)};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.backgroundColor};
`;
export const HorizonImage = styled.img`
  width: 45%;
  aspect-ratio: 3/2;
`;
export const HorizonText = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: ${fontSize.titleRegular};
  font-style: normal;
  font-weight: ${fontWeight.semiBold};
  line-height: normal;
  text-transform: capitalize;
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 18px;
  display: flex;
  background: ${(props) => props.backgroundColor + opacity(36)};
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  aspect-ratio: 1/1;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.backgroundColor};
`;
export const CardText = styled.div`
  color: ${(props) => props.theme.primary};
  text-align: center;
  font-size: ${fontSize.body};
  font-style: normal;
  font-weight: ${fontWeight.regular};
  text-transform: capitalize;
`;
export const CardImage = styled.img`
  width: 50%;
  flex-shrink: 0;
`;
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
