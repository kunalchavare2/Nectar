import React, { useEffect, useRef, useState } from "react";
import Heading from "../../Atoms/Heading/Heading";
import { Filter, FilterCategories } from "./FilterComp.styled";
import CategoryFilter from "../../Molecules/CategoryFilter/CategoryFilter";
import PriceFilter from "../../Molecules/PriceFilter/PriceFilter";
import { createQueryString, queryStringToObject } from "../../../utils/utility";
import { useLocation, useNavigate } from "react-router";

const FilterComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterState, setFilterState] = useState({});

  useEffect(() => {
    if (location.search.length) {
      const queryObj = queryStringToObject(location.search, {
        maxPrice: 1,
        minPrice: 6,
        category: [],
        search: "",
        sort: "",
      });

      if ("maxPrice" in queryObj && "category" in queryObj) {
        setFilterState((prev) => {
          return { ...prev, ...queryObj };
        });
      }
    }
  }, []);

  const getPriceHandler = (priceObj) => {
    setFilterState((prev) => {
      return { ...prev, ...priceObj };
    });
  };

  const getCategoriesHandler = (categoryArr) => {
    setFilterState((prev) => {
      return { ...prev, category: categoryArr };
    });
  };

  const handleFilterChange = (e) => {};

  useEffect(() => {
    let queryString = createQueryString({ ...filterState });

    if (location.search.length > 1 && !filterState.category && !queryString) {
      queryString = location.search;
    }
    navigate(`/app/products${queryString}`, { replace: true });
  }, [filterState]);

  return (
    <Filter>
      <FilterCategories>
        <Heading type="large" label="Price" />
        <PriceFilter getPrice={getPriceHandler} />
      </FilterCategories>
      <FilterCategories>
        <Heading type="large" label="Categories" />
        <CategoryFilter getCategories={getCategoriesHandler} />
      </FilterCategories>
    </Filter>
  );
};
export default FilterComp;
