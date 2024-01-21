import styled from "styled-components";
export const Horizon = styled.span`
  width: 248.187px;
  height: 105px;
  flex-shrink: 0;
  border-radius: 18px;
  background: ${(props) => props.backgroundColor + "26"};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.backgroundColor};
`;
export const HorizonImage = styled.img`
  width: 71.898px;
  height: 71.898px;
`;
export const HorizonText = styled.div`
  color: #3e423f;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;
export const Card = styled.div`
  width: 100%;
  /* height: 189.106px; */
  height: 100%;
  flex-shrink: 0;
  border-radius: 18px;
  display: flex;
  background: ${(props) => props.backgroundColor + "26"};
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  aspect-ratio:1/1;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.backgroundColor};
`;
export const CardText = styled.div`
  color: #181725;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.1px;
  text-transform: capitalize;
`;
export const CardImage = styled.img`
  width: 103.049px;
  height: 76.191px;
  flex-shrink: 0;
`;
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
