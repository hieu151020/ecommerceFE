import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getListManufacturerAPI } from "../../API/Manufacturers";
import { FETCH_LIST_MANUFACTURER } from "../ActionType/ActionType";

export let actionFetchListManufacturerAPI = createAsyncThunk(
  FETCH_LIST_MANUFACTURER,
  async () => {
    let listManufacturerAPI = await getListManufacturerAPI();
    return listManufacturerAPI;
  }
);

const ManufacturerReducer = createSlice({
  name: "ManufacturersReducer",
  initialState: { listManufacturer: [] },
  reducers: {},
  extraReducers: {
    [actionFetchListManufacturerAPI.fulfilled]: (state, action) => {
      state.listManufacturer = action.payload;
    },
    [actionFetchListManufacturerAPI.pending]: (state) => {},
  },
});

export let { actions } = ManufacturerReducer;

export default ManufacturerReducer;
