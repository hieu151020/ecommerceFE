import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteItem } from "../../ReduxTK/Reducer/CartReducer";

function CartItem(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartRedux.cartItems);

  let items = "";
  items = cartItems.map((item, index) => {
    const deleteProduct = () => {
      dispatch(deleteItem(item.id));
      toast.success("Product delete success");
    };
    return (
      <tr>
        <td>
          <img
            src={require(`../../assets/images/${item.imageName}`)}
            alt={item.imageName}
            width={"50px"}
          />
        </td>
        <td className="mt-5">{item.productName}</td>
        <td>{item.price} VND</td>
        <td>{item.quantity}</td>
        <td>
          <AiFillDelete className="delete" onClick={deleteProduct} />
        </td>
      </tr>
    );
  });

  return <>{items}</>;
}

export default CartItem;
