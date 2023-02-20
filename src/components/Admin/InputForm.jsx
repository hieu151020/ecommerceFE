import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getImageName } from "../../Helper/getImageName";
import { selectListCategory } from "../../ReduxTK/Selector/CategorySelector";
import { selectListManufacturer } from "../../ReduxTK/Selector/ManufacturerSelector";

function InputForm(props) {
  let { onHandelCreateNewProduct } = props;

  let [Name, SetName] = useState("");
  let [Price, SetPrice] = useState("");
  let [Info, SetInfo] = useState("");
  let [Detail, SetDetail] = useState("");
  let [ratingStar, SetRatingStar] = useState("");
  let [Image, SetImage] = useState("");
  let [Manufacturer, SetManufacturer] = useState("");
  let [Category, SetCategory] = useState("");

  let stateRedux = useSelector((state) => state);

  let listManufacturer = selectListManufacturer(stateRedux);
  let listCategory = selectListCategory(stateRedux);

  let onHandelCreateNew = () => {
    let newProduct = {
      name: Name,
      price: Price,
      info: Info,
      detail: Detail,
      star: ratingStar,
      image: getImageName(Image),
      manufacturer: Manufacturer,
      category: Category,
    };
    onHandelCreateNewProduct(newProduct);
  };

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
  return (
    <Container>
      <Form>
        {/* Name */}
        <FormGroup>
          <Label for="Name">Name: </Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Input Name"
            type="text"
            value={Name}
            onChange={(event) => {
              SetName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Price */}
        <FormGroup>
          <Label for="Price">Price: </Label>
          <Input
            id="Price"
            name="Price"
            placeholder="Input Price"
            type="number"
            value={Price}
            onChange={(event) => {
              SetPrice(event.target.value);
            }}
          />
        </FormGroup>

        {/* Info */}
        <FormGroup>
          <Label for="Info">Select a Info: </Label>
          <Input
            id="Info"
            name="Info"
            type="textarea"
            value={Info}
            onChange={(event) => {
              SetInfo(event.target.value);
            }}
          ></Input>
        </FormGroup>
        {/* Detail */}
        <FormGroup>
          <Label for="Detail">Select a Detail: </Label>
          <Input
            id="Detail"
            name="Detail"
            type="textarea"
            value={Detail}
            onChange={(event) => {
              SetDetail(event.target.value);
            }}
          ></Input>
        </FormGroup>
        {/* Star */}
        <FormGroup>
          <Label for="Star">Select a Star: </Label>
          <Input
            id="Star"
            name="Star"
            type="number"
            value={ratingStar}
            onChange={(event) => {
              SetRatingStar(event.target.value);
            }}
          ></Input>
        </FormGroup>
        {/* Image */}
        <FormGroup>
          <Label for="Image">Select a Image: </Label>
          <Input
            id="Image"
            name="Image"
            type="file"
            value={Image}
            onChange={(event) => {
              SetImage(event.target.value);
            }}
          ></Input>
        </FormGroup>
        {/* Manufacture */}
        <FormGroup>
          <Label for="Manufacture">Select a Manufacture: </Label>
          <Input
            id="Manufacture"
            name="Manufacture"
            type="select"
            value={Manufacturer.id}
            onChange={(event) => {
              SetManufacturer(event.target.value);
            }}
          >
            <option value="">
              ---------------Chosse Manufacturer-----------------
            </option>
            {manufacturerItem}
          </Input>
        </FormGroup>
        {/* Category */}
        <FormGroup>
          <Label for="Category">Select a Category: </Label>
          <Input
            id="Category"
            name="Category"
            type="select"
            value={Category.id}
            onChange={(event) => {
              SetCategory(event.target.value);
            }}
          >
            <option value="">
              ------------------Chosse Category-----------------
            </option>
            {categoryItem}
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button type="button" color="primary" onClick={onHandelCreateNew}>
        Create
      </Button>
      <Button type="reset" color="danger">
        Reset
      </Button>
    </Container>
  );
}

export default InputForm;
