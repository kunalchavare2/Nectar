import React, { useEffect, useRef, useState } from "react";
import Heading from "../../Atoms/Heading/Heading";
import { Filter, FilterCategories, IconButton } from "./FilterComp.styled";
import CategoryFilter from "../../Molecules/CategoryFilter/CategoryFilter";
import PriceFilter from "../../Molecules/PriceFilter/PriceFilter";
import { createQueryString, queryStringToObject } from "../../../utils/utility";
import { useLocation, useNavigate } from "react-router";
import TagsFilter from "../../Molecules/TagsFilter/TagsFilter";
import { PRODUCTS_ROUTE } from "../../../utils/constant/routes-cont";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { showFilter } from "../../../store/Slice/CommonStateSlice/CommonStateSlice";

const FilterComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState({});

  useEffect(() => {
    if (location.search.length) {
      const queryObj = queryStringToObject(location.search, {
        maxPrice: 1,
        minPrice: 6,
        category: [],
        search: "",
        sort: "",
        tags: [],
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
  const getTagsHandler = (tagArr) => {
    console.log(filterState);
    setFilterState((prev) => {
      return { ...prev, tags: tagArr };
    });
  };

  const getCategoriesHandler = (categoryArr) => {
    setFilterState((prev) => {
      return { ...prev, category: categoryArr };
    });
  };

  useEffect(() => {
    let queryString = createQueryString({ ...filterState });

    if (location.search.length > 1 && !filterState.category && !queryString) {
      queryString = location.search;
    }
    navigate(`${PRODUCTS_ROUTE + queryString}`, { replace: true });
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
      <FilterCategories>
        <Heading type="large" label="Tags" />
        <TagsFilter getTags={getTagsHandler} />
      </FilterCategories>
      <IconButton
        icon={<IoClose />}
        transparent={true}
        onClick={() => {
          dispatch(showFilter());
        }}
      />
    </Filter>
  );
};
export default FilterComp;
