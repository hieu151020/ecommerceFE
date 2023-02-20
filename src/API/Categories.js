import { api } from "./Api";

const getListCategoryAPI = () => {
  return api("GET", "categorys/", null);
};

// export
export { getListCategoryAPI };
