import React from "react";
import "../../style/listproduct.css";
import { Table } from "reactstrap";
import ListProductDetail from "./ListProductDetail";

function ListProduct(props) {
  let { onHandelDelete, onHandleShowEdit } = props;
  return (
    <div className="product__table">
      <Table bordered>
        <thead>
          <tr className="table-primary">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Info</th>
            <th>Detail</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Manufacture</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <ListProductDetail
          onHandelDelete={onHandelDelete}
          onHandleShowEdit={onHandleShowEdit}
        />
      </Table>
    </div>
  );
}

export default ListProduct;
