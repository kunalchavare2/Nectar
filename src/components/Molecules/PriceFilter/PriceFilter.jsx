import React, { useEffect, useRef, useState } from "react";

import PriceFilterStyle, {
  PriceValue,
  PriceValueWrapper,
  RangeSlider,
} from "./PriceFilter.styled";
import { useLocation } from "react-router";
import { queryStringToObject } from "../../../utils/utility";

const PriceFilter = ({ getPrice }) => {
  const priceValue = useRef({ minValue: 0, maxValue: 6 });
  const [priceState, setPriceState] = useState({ minValue: 0, maxValue: 6 });
  const location = useLocation();

  useEffect(() => {
    if (location.search.length) {
      const queryObj = queryStringToObject(location.search, {
        maxPrice: 0,
        minPrice: 6,
      });
     
      if ("maxPrice" in queryObj && "minPrice" in queryObj) {
     console.log(queryObj);
        priceValue.current = {
          minValue: Number(queryObj.minPrice),
          maxValue: Number(queryObj.maxPrice),
        };

        setPriceState({
          minValue: Number(queryObj.minPrice),
          maxValue: Number(queryObj.maxPrice),
        });
      }
    }
  }, []);

  const handleInput = (e) => {
    if (
      e.minValue !== priceState.minValue ||
      e.maxValue !== priceState.maxValue
    ) {
      priceValue.current = { minValue: e.minValue, maxValue: e.maxValue };

      setPriceState(priceValue.current);

      if (getPrice) {
        // To fix the case where the minValue is 0 and
        // it is not reflected in the query string
        const price = {
          minPrice: e.minValue.toString(),
          maxPrice: e.maxValue.toString(),
        };
        getPrice(price);
      }
    }
  };

  return (
    <PriceFilterStyle>
      <RangeSlider
        min={0}
        max={6}
        step={0.1}
        minValue={priceValue.current.minValue}
        maxValue={priceValue.current.maxValue}
        style={{ border: "none", boxShadow: "none" }}
        className="range-slider"
        label="false"
        ruler="false"
        barInnerColor="#53B175"
        onChange={handleInput}
      />
      <PriceValueWrapper>
        <PriceValue>{"$" + priceState.minValue}</PriceValue>
        <PriceValue>{"$" + priceState.maxValue}</PriceValue>
      </PriceValueWrapper>
    </PriceFilterStyle>
  );
};

export default PriceFilter;
