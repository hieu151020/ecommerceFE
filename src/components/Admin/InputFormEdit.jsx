import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getImageName } from "../../Helper/getImageName";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { selectListCategory } from "../../ReduxTK/Selector/CategorySelector";
import { selectListManufacturer } from "../../ReduxTK/Selector/ManufacturerSelector";

function InputFormEdit(props) {
  let { onHandleEditProduct } = props;

  let stateRedux = useSelector((state) => state);
  const productUpdate = stateRedux.productRedux.updateProduct;

  let listManufacturer = selectListManufacturer(stateRedux);
  let listCategory = selectListCategory(stateRedux);

  let [nameUpdate, setNameUpdate] = useState(productUpdate.name);
  let [priceUpdate, setPriceUpdate] = useState(productUpdate.price);
  let [infoUpdate, setInfoUpdate] = useState(productUpdate.info);
  let [detailUpdate, setDetailUpdate] = useState(productUpdate.detail);
  let [ratingStarUpdate, setRatingStarUpdate] = useState(
    productUpdate.ratingStar
  );
  let [imageUpdate, setImageUpdate] = useState();
  let [manufacturerUpdate, setManufacturerUpdate] = useState(
    productUpdate.manufacturerName
  );
  let [categoryUpdate, setCategoryUpdate] = useState(
    productUpdate.categoryName
  );

  let manufacturerItem = listManufacturer.map((manufacturer, index) => {
    return (
      <option value={manufacturer.id} key={index}>
        {manufacturer.name}
      </option>
    );
  });
  let categoryItem = listCategory.map((category, index) => {
    return (
      <option value={category.id} key={index}>
        {category.name}
      </option>
    );
  });

  const handleUpdate = () => {
    const productUpdated = {
      id: productUpdate.id,
      name: nameUpdate,
      price: priceUpdate,
      info: infoUpdate,
      detail: detailUpdate,
      ratingStar: ratingStarUpdate,
      imageName: getImageName(imageUpdate),
      manufacturerId: manufacturerUpdate,
      categoryId: categoryUpdate,
    };
    onHandleEditProduct(productUpdated);
  };

  return (
    <Form>
      <FormGroup>
        <Label>ID</Label>
        <Input type="text" disabled value={productUpdate.id} />
      </FormGroup>

      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={nameUpdate}
          onChange={(e) => setNameUpdate(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Price</Label>
        <Input
          type="text"
          value={priceUpdate}
          onChange={(e) => setPriceUpdate(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Info</Label>
        <Input
          type="textarea"
          value={infoUpdate}
          onChange={(e) => setInfoUpdate(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Detail</Label>
        <Input
          type="textarea"
          value={detailUpdate}
          onChange={(e) => setDetailUpdate(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Star</Label>
        <Input
          type="text"
          value={ratingStarUpdate}
          onChange={(e) => setRatingStarUpdate(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Image</Label>
        <Input
          type="file"
          value={imageUpdate}
          onChange={(e) => setImageUpdate(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Manufacturer</Label>
        <Input
          type="select"
          value={manufacturerUpdate}
          onChange={(e) => setManufacturerUpdate(e.target.value)}
        >
          {manufacturerItem}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label>Category</Label>
        <Input
          type="select"
          value={categoryUpdate}
          onChange={(e) => setCategoryUpdate(e.target.value)}
        >
          {categoryItem}
        </Input>
      </FormGroup>

      <Button type="button" color="primary" onClick={handleUpdate}>
        Update
      </Button>
      <Button type="reset" color="danger">
        Reset
      </Button>
    </Form>
  );
}

export default InputFormEdit;
