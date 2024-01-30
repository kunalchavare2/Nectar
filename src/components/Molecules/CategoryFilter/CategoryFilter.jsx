import React, { useEffect, useRef, useState } from "react";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { useLocation, useNavigate } from "react-router";
import { createQueryString, queryStringToObject } from "../../../utils/utility";
import CategoryFilterStyle from "./CategoryFilter.styled";
import { categories } from "../../../utils/constant/app-const";

const CategoryFilter = ({ getCategories }) => {
  const location = useLocation();
  const [appliedCategory, setAppliedCategory] = useState([]);
  const [paramCategory, setPramCategory] = useState([]);

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        category: [],
      });

      if ("category" in queryObj) {
        setAppliedCategory(queryObj.category);
        setPramCategory(queryObj.category);
      }
    } else {
      setAppliedCategory([]);
      setPramCategory([]);
    }
  }, [location]);

  const checkValue = (ele) => {
    const value = paramCategory.includes(ele);
    return value;
  };

  const onChangeFilter = (ev) => {
    const id = ev.target.id;
    const value = ev.target.checked;
    let revisedArr = [];
    console.log(revisedArr);
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
    console.log(revisedArr);

    setAppliedCategory(revisedArr);
    if (getCategories) {
      getCategories(revisedArr);
    }
  };

  return (
    <CategoryFilterStyle>
      {categories.map((elements) => {
        const isChecked = checkValue(elements);
        return (
          <Checkbox
            key={elements}
            label={elements}
            id={elements}
            defaultChecked={isChecked}
            onChange={onChangeFilter}
          />
        );
      })}
    </CategoryFilterStyle>
  );
};

export default CategoryFilter;
