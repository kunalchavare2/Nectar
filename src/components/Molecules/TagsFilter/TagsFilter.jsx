import React, { useEffect, useState } from "react";
import TagsFilterStyle from "./TagsFilter.styled";
import { tags } from "../../../utils/constant/app-const";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { queryStringToObject } from "../../../utils/utility";
import { useLocation } from "react-router";

const TagsFilter = ({ getTags }) => {
  const location = useLocation();
  const [appliedTags, setAppliedTags] = useState([]);
  const [paramTags, setPramTags] = useState([]);

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        tags: [],
      });

      console.log(queryObj);

      if ("tags" in queryObj) {
        setAppliedTags(queryObj.tags);
        setPramTags(queryObj.tags);
      }
    } else {
      setAppliedTags([]);
      setPramTags([]);
    }
  }, [location]);

  const checkValue = (ele) => {
    const value = paramTags.includes(ele);
    return value;
  };

  const onChangeFilter = (ev) => {
    const id = ev.target.id;
    const value = ev.target.checked;
    let revisedArr = [];

    if (value) {
      const index = appliedTags.indexOf((tag) => {
        return tag === id;
      });

      if (index === -1) {
        revisedArr = [...appliedTags, id];
      }
    } else {
      revisedArr = appliedTags.filter((tag) => {
        return tag !== id;
      });
    }

    setAppliedTags(revisedArr);
    if (getTags) {
      getTags(revisedArr);
    }
  };

  return (
    <TagsFilterStyle>
      {tags.map((tag) => {
        const isChecked = checkValue(tag);
        return (
          <Checkbox
            key={tag}
            label={tag}
            id={tag}
            defaultChecked={isChecked}
            onChange={onChangeFilter}
          />
        );
      })}
    </TagsFilterStyle>
  );
};

export default TagsFilter;
