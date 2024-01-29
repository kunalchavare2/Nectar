import { sortTypes } from "./constant/global-const";

export const sortList = (type, list) => {
  let tempArr = [...list];
  switch (type) {
    case sortTypes.price.id:
      return tempArr.sort((a, b) => a.price - b.price);
    case sortTypes.name.id:
      return tempArr.sort((a, b) => a.title - b.title);
    case sortTypes.date.id:
      return tempArr.sort((a, b) => a.price - b.price);
    default:
      return tempArr.sort((a, b) => a.title - b.title);
  }
};
