import React, { useEffect, useRef, useState } from "react";
import SearchBarStyle, { IconButton } from "./SearchBar.styled";
import Searchbar from "../../Atoms/Search/Search";
import Sort from "./../Sort/Sort";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createQueryString, queryStringToObject } from "../../../utils/utility";
import { PRODUCTS_ROUTE } from "../../../utils/constant/routes-cont";
import { CiFilter } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { showFilter } from "../../../store/Slice/CommonStateSlice/CommonStateSlice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const queryRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchBarHandler = (value) => {
    setSearchValue(value.toLowerCase());

    const queryObj = queryStringToObject(location.search, {
      maxPrice: 0,
      minPrice: 6,
      category: [],
      search: "",
      sort: "",
    });
    const newQueryObj = {
      ...queryObj,
      search: value.toLowerCase(),
    };

    const queryString = createQueryString({ ...newQueryObj });
    queryRef.current = queryString;
  };

  const enterKeyEvent = (ev) => {
    if (ev.key === "Enter") {
      navigate(`${PRODUCTS_ROUTE}${queryRef.current}`, { replace: true });
    }
  };

  return (
    <SearchBarStyle>
      <Searchbar
        searchHandler={searchBarHandler}
        searchEnterHandler={enterKeyEvent}
      />
      <Sort />
      <IconButton
        icon={<CiFilter />}
        transparent={true}
        onClick={() => {
          dispatch(showFilter());
        }}
      />
    </SearchBarStyle>
  );
};

export default SearchBar;
