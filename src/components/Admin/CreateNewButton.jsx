import React from "react";
import "../../style/buttonCreate.css";

function CreateButton(props) {
  let { onHandleCreateNew } = props;

  return (
    <div>
      <button type="button" class="button" onClick={onHandleCreateNew}>
        ADD NEW PRODUCT
      </button>
    </div>
  );
}

export default CreateButton;
