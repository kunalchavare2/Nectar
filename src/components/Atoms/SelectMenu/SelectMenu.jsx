import React, { useEffect, useState } from "react";
import SelectMenuStyle from "./SelectMenu.styled";
import { sortTypes } from "./../../../utils/constant/global-const";
import { queryStringToObject } from "../../../utils/utility";
import { useLocation } from "react-router";

const SelectMenu = ({
  list,
  onChange,
  defaultValue,
  isObj = true,
  ...props
}) => {
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

  const onChangeHandler = (ev) => {
    setSort(ev.target.value);
    onChange(ev);
  };

  return (
    <SelectMenuStyle
      value={sort}
      onChange={onChangeHandler}
      defaultValue={defaultValue}
    >
      {list.map((sort) => {
        if (isObj) {
          return (
            <option value={sortTypes[sort].name}>{sortTypes[sort].name}</option>
          );
        } else {
          return <option value={sort}>{sort}</option>;
        }
      })}
    </SelectMenuStyle>
  );
};

export default SelectMenu;
