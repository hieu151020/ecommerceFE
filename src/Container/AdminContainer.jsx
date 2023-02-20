import React from "react";
import CreateButton from "../components/Admin/CreateNewButton";
import ListProduct from "../components/Admin/ListProduct";
import ModalCreateNew from "../components/Admin/ModalCreateNew";
import { useDispatch } from "react-redux";
import {
  SHOW_FORM,
  CLOSE_FORM,
  SHOW_FORM_EDIT,
  CLOSE_FORM_EDIT,
} from "../ReduxTK/Reducer/FormReducer";
import { useEffect } from "react";
import {
  actionAddNewProduct,
  actionFetchListProductAPI,
  actionDeleteProduct,
  actionEditProduct,
  GET_PRODUCT,
} from "../ReduxTK/Reducer/ProductReducer";
import { actionFetchListManufacturerAPI } from "../ReduxTK/Reducer/ManufacturerReducer";
import { actionFetchListCategoryAPI } from "../ReduxTK/Reducer/CategoryReducer";
import ModalEditProduct from "../components/Admin/ModalEditProduct";
const AdminContainer = (props) => {
  let dispatchRedux = useDispatch();

  let onHandleCreateNew = () => {
    dispatchRedux(SHOW_FORM());
  };

  let onHandleClose = () => {
    dispatchRedux(CLOSE_FORM());
  };

  let onHandleShowEdit = (productEdit) => {
    dispatchRedux(GET_PRODUCT(productEdit));
    dispatchRedux(SHOW_FORM_EDIT());
  };

  let onHandleCloseEdit = () => {
    dispatchRedux(CLOSE_FORM_EDIT());
  };

  //Create new product
  let onHandelCreateNewProduct = (newProduct) => {
    let newProductAPI = {
      name: newProduct.name,
      price: newProduct.price,
      info: newProduct.info,
      detail: newProduct.detail,
      ratingStar: newProduct.star,
      imageName: newProduct.image,
      manufacturerId: newProduct.manufacturer,
      categoryId: newProduct.category,
    };
    dispatchRedux(actionAddNewProduct(newProductAPI));
    dispatchRedux(actionFetchListProductAPI());
    dispatchRedux(CLOSE_FORM());
  };

  //Update product
  let onHandleEditProduct = (productUpdated) => {
    const productUpdateAPI = {
      id: productUpdated.id,
      name: productUpdated.name,
      price: productUpdated.price,
      info: productUpdated.info,
      detail: productUpdated.detail,
      ratingStar: productUpdated.ratingStar,
      imageName: productUpdated.imageName,
      manufacturerId: productUpdated.manufacturerId,
      categoryId: productUpdated.categoryId,
    };
    console.log("productUpdateAPI", productUpdateAPI);
    dispatchRedux(actionEditProduct(productUpdateAPI));
    dispatchRedux(CLOSE_FORM_EDIT());
  };

  //Delete product
  let onHandelDelete = (idDelete) => {
    dispatchRedux(actionDeleteProduct(idDelete));
    dispatchRedux(actionFetchListProductAPI());
  };

  useEffect(() => {
    dispatchRedux(actionFetchListProductAPI());
    dispatchRedux(actionFetchListManufacturerAPI());
    dispatchRedux(actionFetchListCategoryAPI());
  });

  return (
    <>
      <CreateButton onHandleCreateNew={onHandleCreateNew} />
      <ListProduct
        onHandelDelete={onHandelDelete}
        onHandleShowEdit={onHandleShowEdit}
      />
      <ModalCreateNew
        onHandleClose={onHandleClose}
        onHandelCreateNewProduct={onHandelCreateNewProduct}
      />
      <ModalEditProduct
        onHandleClose={onHandleCloseEdit}
        onHandleEditProduct={onHandleEditProduct}
      />
    </>
  );
};

export default AdminContainer;
