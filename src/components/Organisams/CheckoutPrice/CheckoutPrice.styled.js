import styled from "styled-components";
import { color, device } from "../../../utils/constant/style-const";
import Button from "../../Atoms/Button/Button";

const CheckoutPriceStyle = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.primary};

  @media ${device.tablet} {
    position: unset;
    width: fit-content;
    margin-top: 4rem;
  }
`;

export const FreeDeliveryStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .title {
    padding: 0.3rem 0.8rem;
    color: ${(props) => props.theme.primary};
    background-color: ${color.green100};
  }
  .description {
    padding: 0.3rem 0.8rem;
    flex: 4;
    color: ${(props) => props.theme.secondary};
    background-color: ${color.gray300};
  }
`;

export const Accordian = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .accordian__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const IconButton = styled(Button)`
  font-size: 1.5rem;
  padding: 0.3rem;
  width: fit-content;
  border: none;
  z-index: 2000;
  background-color: transparent;
  color: ${color.gray100};
  font-size: 1.7rem;
  &:hover {
    color: ${color.blue500};
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export default CheckoutPriceStyle;
