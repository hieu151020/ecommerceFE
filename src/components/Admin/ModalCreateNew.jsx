import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { selectShowForm } from "../../ReduxTK/Selector/FormSelector";
import InputForm from "./InputForm";

function ModalCreateNew(props) {
  let { onHandleClose, onHandelCreateNewProduct } = props;

  // useSelector: lấy các State đang được quản lý bởi Redux
  let stateRedux = useSelector((state) => state);
  let showForm = selectShowForm(stateRedux);

  return (
    <Container>
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Product</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm onHandelCreateNewProduct={onHandelCreateNewProduct} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onHandleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNew;
