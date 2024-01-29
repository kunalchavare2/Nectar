import React, { useState } from "react";
import SearchBarStyle from "./SearchBar.styled";
import Searchbar from "../../Atoms/Search/Search";
import Sort from "./../Sort/Sort";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createQueryString, queryStringToObject } from "../../../utils/utility";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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
    navigate(`/app/products${queryString}`, { replace: true });
  };

  return (
    <SearchBarStyle>
      <Searchbar searchHandler={searchBarHandler} />
      <Sort />
    </SearchBarStyle>
  );
};

export default SearchBar;
