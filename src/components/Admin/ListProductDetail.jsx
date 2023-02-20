import React from "react";
import { useSelector } from "react-redux";
import { selectListProduct } from "../../ReduxTK/Selector/ProductSelector";

function ListProductDetail(props) {
  let { onHandelDelete, onHandleShowEdit } = props;
  let stateRedux = useSelector((state) => state);
  let listProduct = selectListProduct(stateRedux);

  let handleDelete = (idDelete) => {
    onHandelDelete(idDelete);
  };

  let handelEdit = (productEdit) => {
    onHandleShowEdit(productEdit);
  };

  let items = "";
  items = listProduct.map((product, index) => {
    return (
      <>
        <tbody>
          <tr>
            <th className="">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.info}</td>
            <td>{product.detail}</td>
            <td>{product.ratingStar}</td>
            <td>
              <img
                src={require(`../../assets/images/${product.imageName}`)}
                style={{ width: "40px" }}
                alt={product.imageName}
              />
            </td>
            <td>{product.manufacturerName}</td>
            <td>{product.categoryName}</td>

            <td>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => handelEdit(product)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </>
    );
  });
  return items;
}

export default ListProductDetail;
