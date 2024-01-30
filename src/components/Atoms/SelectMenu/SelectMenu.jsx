import React, { useEffect, useState } from "react";
import SelectMenuStyle from "./SelectMenu.styled";
import { sortTypes } from "./../../../utils/constant/global-const";
import { queryStringToObject } from "../../../utils/utility";
import { useLocation } from "react-router";

const SelectMenu = ({ list, onChange, defaultValue, ...props }) => {
  const [sort, setSort] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        sort: "",
      });

      if ("sort" in queryObj) {
        setSort(queryObj.sort);
      }
    } else {
      setSort("Name");
    }
  }, [location]);

  
  return (
    <SelectMenuStyle
      value={sort}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {list.map((sort) => (
        <option value={sortTypes[sort].name}>{sortTypes[sort].name}</option>
      ))}
    </SelectMenuStyle>
  );
};

export default SelectMenu;
