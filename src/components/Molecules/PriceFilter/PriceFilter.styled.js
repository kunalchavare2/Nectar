import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";
import MultiRangeSlider from "multi-range-slider-react";

const PriceFilterStyle = styled.div``;

export const PriceValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
`;
export const PriceValue = styled.div`
  display: inline-block;
  min-width: 25%;
  border: 1px solid ${color.gray100};
  padding: 0.3rem;
  text-align: center;
  border-radius: 5px;
`;

export const RangeSlider = styled(MultiRangeSlider)`
  width: 100%;
  max-width: 400px;
  margin-top: 5px;

  /* Important is used because this component 
   not local it is install using npm
  some styles are inline so we need to
  use inportant for that
   */
  & .caption * {
    background-color: #53b175 !important;
    border-radius: 3px !important;
  }

  & .bar-inner {
    border: none !important;
    box-shadow: none !important;
  }

  & .thumb::before {
    border-color: gray !important;
  }
`;

export default PriceFilterStyle;
