import { createSelector } from "@reduxjs/toolkit";

let formSelector = (state) => state.formRedux;

let selectShowFormSelector = createSelector(
  formSelector,
  (state) => state.showForm
);

let selectShowFormEditSelector = createSelector(
  formSelector,
  (state) => state.showFormEdit
);

export let selectShowForm = (state) => {
  return selectShowFormSelector(state);
};

export let selectShowFormEdit = (state) => {
  return selectShowFormEditSelector(state);
};
