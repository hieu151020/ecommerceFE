import { createSelector } from "@reduxjs/toolkit";

let manufacturerSelector = (state) => state.manufacturerRedux;

let selectListManufacturerSelector = createSelector(
  manufacturerSelector,
  (state) => state.listManufacturer
);

export let selectListManufacturer = (state) => {
  return selectListManufacturerSelector(state);
};
