import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getListProductAPI,
  addProductNewAPI,
  deleteProductAPI,
  updateProductAPI,
} from "../../API/Products";
import {
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_LIST_PRODUCT,
} from "../ActionType/ActionType";

// Call API getAllProduct
export let actionFetchListProductAPI = createAsyncThunk(
  FETCH_LIST_PRODUCT,
  async () => {
    let listProductAPI = await getListProductAPI();
    return listProductAPI;
  }
);

// Call API addNewProduct
export let actionAddNewProduct = createAsyncThunk(
  ADD_NEW_PRODUCT,
  async (productnew) => {
    let ProductNewAPI = await addProductNewAPI(productnew);
    return ProductNewAPI;
  }
);

// Call API editProduct
export let actionEditProduct = createAsyncThunk(
  EDIT_PRODUCT,
  async (ProductUpdate) => {
    let ProductUpdateAPI = await updateProductAPI(ProductUpdate);
    return ProductUpdateAPI;
  }
);

// Call API deleteProduct
export let actionDeleteProduct = createAsyncThunk(
  DELETE_PRODUCT,
  async (idDelete) => {
    let ProductDeleteAPI = await deleteProductAPI(idDelete);
    return ProductDeleteAPI.id;
  }
);

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState: { listProduct: [], updateProduct: {} },
  reducers: {
    GET_PRODUCT: (state, action) => {
      state.updateProduct = action.payload;
    },
  },
  extraReducers: {
    [actionFetchListProductAPI.fulfilled]: (state, action) => {
      state.listProduct = action.payload;
    },
    [actionFetchListProductAPI.pending]: (state) => {},

    [actionAddNewProduct.fulfilled]: (state, action) => {
      state.listProduct.push(action.payload);
    },

    [actionDeleteProduct.fulfilled]: (state, action) => {
      state.listProduct.splice(action.payload, 1);
    },

    [actionEditProduct.fulfilled]: (state, action) => {
      const newProduct = action.payload;
      const productIndex = state.listProduct.findIndex(
        (product) => product.id === newProduct.id
      );

      if (productIndex >= 0) {
        state.listProduct[productIndex] = newProduct;
      }
    },
  },
});

export let { reducer, actions } = ProductReducer;
export const { GET_PRODUCT } = actions;

export default ProductReducer;
