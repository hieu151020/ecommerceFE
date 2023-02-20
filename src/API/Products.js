import { api } from "./Api";

// get listProduct API
const getListProductAPI = () => {
  return api("GET", "products/", null);
};

// Add New Product
const addProductNewAPI = (ProductNew) => {
  return api("POST", "products/", ProductNew);
};

// Delete Product
const deleteProductAPI = (id) => {
  let url = "products/" + id;
  return api("DELETE", url, null);
};

// Update Product
const updateProductAPI = (ProductUpdate) => {
  let url = "products/" + ProductUpdate.id;
  return api("PUT", url, ProductUpdate);
};

export {
  getListProductAPI,
  addProductNewAPI,
  deleteProductAPI,
  updateProductAPI,
};
