import React from "react";
import { useDispatch } from "react-redux";
import ProductList from "../components/Product/ProductList";
import { GET_PRODUCT } from "../ReduxTK/Reducer/ProductReducer";

function ProductContainer(props) {
  let dispatchRedux = useDispatch();

  const getProduct = (product) => {
    dispatchRedux(GET_PRODUCT(product));
  };
  return (
    <>
      <ProductList getProduct={getProduct} />
    </>
  );
}

export default ProductContainer;
