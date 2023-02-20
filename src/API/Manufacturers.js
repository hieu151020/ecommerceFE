import { api } from "./Api";

const getListManufacturerAPI = () => {
  return api("GET", "manufacturers/", null);
};

// export
export { getListManufacturerAPI };
