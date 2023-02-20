import React from "react";
import "../style/cart.css";
import { Container, Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/Card/CartItem";

function CardContainer(props) {
  const cartItems = useSelector((state) => state.cartRedux.cartItems);
  const totalAmount = useSelector((state) => state.cartRedux.totalAmount);
  return (
    <section className="cart">
      <Container>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className="fs-4 text-center">No item added to your cart</h2>
            ) : (
              <Table bordered>
                <thead>
                  <tr className="table-primary">
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                </tbody>
              </Table>
            )}
          </Col>
          <Col lg="3" className="total">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                Total
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </h6>
            </div>
            <div>
              <button className="buy__btn w-100 ">
                <Link to="/checkout">Checkout</Link>
              </button>
              <button className="buy__btn w-100 mt-3">
                <Link to="/product">Continue Shopping</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CardContainer;
