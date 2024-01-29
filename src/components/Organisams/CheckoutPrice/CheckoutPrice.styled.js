import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

const CheckoutPriceStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
`;

export const FreeDeliveryStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .title {
    padding: 0.3rem 0.8rem;
    /* flex: 2; */
    color: ${color.white};
    background-color: ${color.green100};
  }
  .description {
    padding: 0.3rem 0.8rem;
    flex: 4;
    color: ${color.blue500};
    background-color: ${color.gray300};
  }
`;

export default CheckoutPriceStyle;
