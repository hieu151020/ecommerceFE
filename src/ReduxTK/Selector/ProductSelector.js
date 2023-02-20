import { createSelector } from "@reduxjs/toolkit";

let productSelector = (state) => state.productRedux;

let selectListProductSelector = createSelector(
  productSelector,
  (state) => state.listProduct
);

let selectShowProductUpdateSelector = createSelector(
  productSelector,
  (state) => state.getUpdateProduct
);

export let selectListProduct = (state) => {
  return selectListProductSelector(state);
};

export let selectShowProductUpdate = (state) => {
  return selectShowProductUpdateSelector(state);
};
