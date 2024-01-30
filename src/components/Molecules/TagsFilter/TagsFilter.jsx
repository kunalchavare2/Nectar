import React, { useEffect, useState } from "react";
import TagsFilterStyle from "./TagsFilter.styled";
import { tags } from "../../../utils/constant/app-const";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { queryStringToObject } from "../../../utils/utility";
import { useLocation } from "react-router";

const TagsFilter = ({ getTags }) => {
  const location = useLocation();
  const [appliedTags, setAppliedTags] = useState([]);

  useEffect(() => {
    if (location.search) {
      const queryObj = queryStringToObject(location.search, {
        tags: [],
      });

      if ("tags" in queryObj) {
        setAppliedTags(queryObj.tags);
      }
    } else {
      setAppliedTags([]);
    }
  }, [location]);

  const checkValue = (ele) => {
    const value = appliedTags.includes(ele);
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
