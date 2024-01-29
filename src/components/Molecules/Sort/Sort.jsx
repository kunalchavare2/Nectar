import React, { useEffect } from "react";
import SortStyle from "./Sort.styled";
import { sortTypes } from "../../../utils/constant/global-const";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import { useLocation, useNavigate } from "react-router";
import { createQueryString, queryStringToObject } from "../../../utils/utility";

const Sort = ({ getSort, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const setSortHandler = (ev) => {
    const queryObj = queryStringToObject(location.search, {
      maxPrice: 0,
      minPrice: 6,
      category: [],
      search: "",
      sort: "",
    });
    const newQueryObj = {
      ...queryObj,
      sort: ev.target.value,
    };

    const queryString = createQueryString({ ...newQueryObj });
    navigate(`/app/products${queryString}`, { replace: true });
  };

  return (
    <SortStyle {...props}>
      <SelectMenu
        list={Object.keys(sortTypes)}
        defaultValue={""}
        onChange={setSortHandler}
      />
    </SortStyle>
  );
};

export default Sort;
