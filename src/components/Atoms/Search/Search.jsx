import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Inputbar, SearchStyle, IconBtn } from "./Search.styled";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search_2.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLocation } from "react-router";
import { queryStringToObject } from "../../../utils/utility";

const Search = ({
  placeholderValue,
  searchHandler,
  defaultValue,
  searchRef,
  searchEnterHandler,
  ...props
}) => {
  const [isValue, setisValue] = useState(false);
  const [searchInput, setSearchInput] = useState(defaultValue);
  const location = useLocation();
  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
    searchHandler(e.target.value);
  };

  const handleClick = (e) => {
    setSearchInput("");
  };

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        search: "",
      });

      if ("search" in queryObj) {
        setSearchInput(queryObj.search);
      }
    } else {
      setSearchInput("");
    }
  }, [location]);

  useEffect(() => {
    if (searchInput) {
      setisValue(true);
    } else {
      setisValue(false);
    }
  }, [searchInput]);

  return (
    <SearchStyle>
      <SearchIcon />
      <Inputbar
        class="input"
        placeholder={placeholderValue}
        onChange={onChangeHandler}
        value={searchInput}
        ref={searchRef}
        onKeyUp={searchEnterHandler}
        autoFocus
        {...props}
      />

      {isValue ? (
        <IconBtn icon={<IoIosCloseCircleOutline />} onClick={handleClick} />
      ) : null}
    </SearchStyle>
  );
};
Search.propTypes = {
  placeholderValue: PropTypes.string,
};
Search.defaultProps = {
  placeholderValue: "Search store",
};
export default Search;
