import React, { useEffect, useState } from "react";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { useLocation, useNavigate } from "react-router";
import { createQueryString, queryStringToObject } from "../../../utils/utility";
import CategoryFilterStyle from "./CategoryFilter.styled";

const CategoryFilter = ({ getCategories }) => {
  const location = useLocation();
  const [appliedCategory, setAppliedCategory] = useState([]);

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        search: null,
        category: null,
      });

      if ("category" in queryObj) {
        console.log(queryObj.category);
      }
    }
  }, [location]);

  const categories = [
    "Beverages",
    "Dairy & Eggs",
    "Fresh Fruits & Vegetable",
    "Meat & Fish",
    "Bakery & Snacks",
    "Cooking Oil & Ghee",
  ];

  const onChangeFilter = (ev) => {
    const id = ev.target.id;
    const value = ev.target.checked;

    let revisedArr = [];
    if (value) {
      const index = appliedCategory.indexOf((category) => {
        return category === id;
      });

      if (index === -1) {
        revisedArr = [...appliedCategory, id];
      }
    } else {
      revisedArr = appliedCategory.filter((category) => {
        return category !== id;
      });
    }
    setAppliedCategory(revisedArr);
    if (getCategories) {
      getCategories(revisedArr);
    }
  };

  return (
    <CategoryFilterStyle>
      {categories.map((elements) => (
        <Checkbox
          key={elements}
          label={elements}
          id={elements}
          defaultChecked={false}
          onChange={onChangeFilter}
        />
      ))}
    </CategoryFilterStyle>
  );
};

export default CategoryFilter;
