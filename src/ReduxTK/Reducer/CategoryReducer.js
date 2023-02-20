import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListCategoryAPI } from "../../API/Categories";
import { FETCH_LIST_CATEGORY } from "../ActionType/ActionType";

export let actionFetchListCategoryAPI = createAsyncThunk(
  FETCH_LIST_CATEGORY,
  async () => {
    let listCategoryAPI = await getListCategoryAPI();
    return listCategoryAPI;
  }
);

const CategoryReducer = createSlice({
  name: "CategorysReducer",
  initialState: { listCategory: [] },
  reducers: {},
  extraReducers: {
    [actionFetchListCategoryAPI.fulfilled]: (state, action) => {
      state.listCategory = action.payload;
    },
    [actionFetchListCategoryAPI.pending]: (state) => {},
  },
});

export let { actions } = CategoryReducer;

export default CategoryReducer;
