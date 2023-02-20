import React from "react";
import "../../style/product-detail.css";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../ReduxTK/Reducer/CartReducer";
import { toast } from "react-toastify";

function ProductDetail(props) {
  let { data, getProduct } = props;

  const dispatch = useDispatch();

  const getProductDetail = (product) => {
    getProduct(product);
  };
  const addToCard = (data) => {
    let newItem = {
      id: data.id,
      productName: data.name,
      price: data.price,
      detail: data.detail,
      imageName: data.imageName,
    };
    dispatch(addItem(newItem));
    toast.success("Product add success");
  };
  let items = "";
  items = data.map((data, index) => {
    return (
      <Col lg="3" md="4">
        <div className="product__item">
          <div className="product__img">
            <Link to="./productCard" onClick={() => getProductDetail(data)}>
              <img
                src={require(`../../assets/images/${data.imageName}`)}
                alt={data.imageName}
              />
            </Link>
          </div>
          <div className="p-2 product__info">
            <h5 className="product__name">
              <Link to="/productCard">{data.name} </Link>
            </h5>
          </div>
          <div>
            <span>{data.info}</span>
          </div>
          <div>
            <span>{data.detail}</span>
          </div>
          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">{data.price} VND</span>
            <motion.span
              whileTap={{ scale: 1.2 }}
              onClick={() => addToCard(data)}
            >
              <IoIosAddCircle />
            </motion.span>
          </div>
        </div>
      </Col>
    );
  });
  return (
    <section className="products">
      <Row className="trending">{items}</Row>
    </section>
  );
}

export default ProductDetail;
