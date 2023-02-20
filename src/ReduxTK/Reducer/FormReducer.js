import { createSlice } from "@reduxjs/toolkit";

const FormReducer = createSlice({
  name: "FormReducer",
  initialState: { showForm: false, showFormEdit: false },
  reducers: {
    SHOW_FORM: (state) => {
      state.showForm = true;
    },
    CLOSE_FORM: (state) => {
      state.showForm = false;
    },
    SHOW_FORM_EDIT: (state) => {
      state.showFormEdit = true;
    },
    CLOSE_FORM_EDIT: (state) => {
      state.showFormEdit = false;
    },
  },
});

export let { actions } = FormReducer;
export let { SHOW_FORM, CLOSE_FORM, SHOW_FORM_EDIT, CLOSE_FORM_EDIT } = actions;

export default FormReducer;
