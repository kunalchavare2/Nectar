import React, { useEffect, useRef, useState } from "react";

import PriceFilterStyle, {
  PriceValue,
  PriceValueWrapper,
  RangeSlider,
} from "./PriceFilter.styled";
import { useLocation } from "react-router";
import { currencyConverter, queryStringToObject } from "../../../utils/utility";
import { color } from "../../../utils/constant/style-const";
import { useSelector } from "react-redux";

const PriceFilter = ({ getPrice }) => {
  const priceValue = useRef({ minValue: 0, maxValue: 16 });
  const [priceState, setPriceState] = useState({ minValue: 0, maxValue: 16 });
  const appconfig = useSelector((state) => state.appconfig);
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        maxPrice: 0,
        minPrice: 16,
      });

      if ("maxPrice" in queryObj && "minPrice" in queryObj) {
        priceValue.current = {
          minValue: Number(queryObj.minPrice),
          maxValue: Number(queryObj.maxPrice),
        };

        setPriceState({
          minValue: Number(queryObj.minPrice),
          maxValue: Number(queryObj.maxPrice),
        });
      }
    } else {
      priceValue.current = {
        minValue: 0,
        maxValue: 16,
      };
      setPriceState({ minValue: 0, maxValue: 16 });
    }
  }, [location]);

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
        max={16}
        step={0.1}
        minValue={priceValue.current.minValue}
        maxValue={priceValue.current.maxValue}
        style={{ border: "none", boxShadow: "none" }}
        className="range-slider"
        label="false"
        ruler="false"
        barInnerColor={color.green100}
        onChange={handleInput}
      />
      <PriceValueWrapper>
        <PriceValue>
          {currencyConverter(priceState.minValue, appconfig.currentCurrency)}
        </PriceValue>
        <PriceValue>
          {currencyConverter(priceState.maxValue, appconfig.currentCurrency)}
        </PriceValue>
      </PriceValueWrapper>
    </PriceFilterStyle>
  );
};

export default PriceFilter;
