import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

const CheckoutPriceStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
  color: ${(props) => props.theme.primary};
`;

export const FreeDeliveryStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .title {
    padding: 0.3rem 0.8rem;
    /* flex: 2; */
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

export default CheckoutPriceStyle;
