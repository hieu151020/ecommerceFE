import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import "../style/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { selectListProduct } from "../ReduxTK/Selector/ProductSelector";
import { actionFetchListProductAPI } from "../ReduxTK/Reducer/ProductReducer";
import { actionFetchListManufacturerAPI } from "../ReduxTK/Reducer/ManufacturerReducer";
import { actionFetchListCategoryAPI } from "../ReduxTK/Reducer/CategoryReducer";
import Slider from "../components/Home/Slider";

function Home(props) {
  let dispatchRedux = useDispatch();
  let stateRedux = useSelector((state) => state);
  let listProduct = selectListProduct(stateRedux);

  let items = "";
  items = listProduct.map((data, index) => {
    return (
      <Col lg="4" md="3">
        <div className="product__itemm">
          <div className="product__img">
            <Link to="/productCard">
              <img
                src={require(`../assets/images/${data.imageName}`)}
                alt={data.imageName}
              />
            </Link>
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">
              <Link to="/productCard">{data.name}</Link>
            </h3>
          </div>
          <div>
            <span>{data.info}</span>
          </div>
          <div>
            <span>{data.detail}</span>
          </div>
          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">{data.price} VND</span>
            <motion.span whileTap={{ scale: 1.2 }}>
              <IoIosAddCircle />
            </motion.span>
          </div>
        </div>
      </Col>
    );
  });

  // useEffect(() => {
  //   dispatchRedux(actionFetchListProductAPI());
  //   dispatchRedux(actionFetchListManufacturerAPI());
  //   dispatchRedux(actionFetchListCategoryAPI());
  // });

  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2>
                  Make your choice with many interesting products in our shop
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  optio ratione repudiandae perferendis animi aliquid natus
                  magni alias voluptas vitae quisquam, incidunt corrupti in
                  provident veniam adipisci quod distinctio consequuntur!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/product">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img
                  src={require(`../assets/images/phones-switch-apps.jpg`)}
                  alt="img"
                  width={"557px"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              {/* <Slider /> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trending__products">
        <Container className="trending">
          <Row>
            <Col lg="12" className="text-center ">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            {items}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
