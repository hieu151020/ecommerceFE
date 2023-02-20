import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./Reducer/CategoryReducer";
import FormReducer from "./Reducer/FormReducer";
import ManufacturerReducer from "./Reducer/ManufacturerReducer";
import ProductReducer from "./Reducer/ProductReducer";
import CartReducer from "./Reducer/CartReducer";

let store = configureStore({
  reducer: {
    formRedux: FormReducer.reducer,
    productRedux: ProductReducer.reducer,
    manufacturerRedux: ManufacturerReducer.reducer,
    categoryRedux: CategoryReducer.reducer,
    cartRedux: CartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
