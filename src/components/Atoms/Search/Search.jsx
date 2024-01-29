import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cross from "../../../assets/icons/cross.svg";
import { Inputbar, Button, SearchStyle } from "./Search.styled";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search_2.svg";

const Search = ({
  placeholderValue,
  searchHandler,
  searchRef,
  ...props
}) => {
  const [isValue, setisValue] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
    searchHandler(e.target.value);
  };
  const handleClick = (e) => {
    setSearchInput("");
  };
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
        onInput={onChangeHandler}
        value={searchInput}
        ref={searchRef}
        autoFocus
        {...props}
      />

      {isValue ? (
        <Button onClick={handleClick}>
          <img src={cross} alt="cross" />
        </Button>
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
