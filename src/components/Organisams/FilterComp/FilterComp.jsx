import React, { useEffect, useRef, useState } from "react";
import Heading from "../../Atoms/Heading/Heading";
import { Filter, FilterCategories } from "./FilterComp.styled";
import CategoryFilter from "../../Molecules/CategoryFilter/CategoryFilter";
import PriceFilter from "../../Molecules/PriceFilter/PriceFilter";
import { createQueryString } from "../../../utils/utility";
import { useNavigate } from "react-router";

const FilterComp = () => {
  const navigate = useNavigate();
  const [filterState, setFilterState] = useState({});

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
    console.log(filterState);
    const queryString = createQueryString({...filterState});

    console.log(queryString);
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
