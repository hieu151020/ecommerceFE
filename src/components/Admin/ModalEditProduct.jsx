import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { selectShowFormEdit } from "../../ReduxTK/Selector/FormSelector";
import InputFormEdit from "./InputFormEdit";

function ModalEditProduct(props) {
  let { onHandleClose, onHandleEditProduct } = props;

  let stateRedux = useSelector((state) => state);
  let showFormEdit = selectShowFormEdit(stateRedux);

  let handelClose = () => {
    onHandleClose();
  };

  return (
    <Container>
      <Modal isOpen={showFormEdit}>
        <ModalHeader>
          <h3>Edit Product</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormEdit onHandleEditProduct={onHandleEditProduct} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handelClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalEditProduct;
