import { createSelector } from "@reduxjs/toolkit";

let categorySelector = (state) => state.categoryRedux;

let selectListCategorySelector = createSelector(
  categorySelector,
  (state) => state.listCategory
);

export let selectListCategory = (state) => {
  return selectListCategorySelector(state);
};
