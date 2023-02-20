import React from "react";
import "../../style/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../ReduxTK/Reducer/CartReducer";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  BsStarFill,
  BsStarHalf,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

import { Container, Row, Col } from "reactstrap";

function ProductCard(props) {
  const dispatch = useDispatch();

  let stateRedux = useSelector((state) => state);
  let product = stateRedux.productRedux.updateProduct;
  // let ratingStarString = "";
  // let star = () => {
  //   let ratingStar = product.ratingStar;
  //   for (let i = 0; i < ratingStar; i++) {
  //     ratingStarString += `<span>
  //         <BsStarFill />
  //       </span>`;
  //   }
  //   console.log(ratingStarString);
  //   for (let i = 0; i < 5 - ratingStar; i++) {
  //     ratingStarString += `<span>
  //     <BsStarHalf />
  //   </span>`;
  //   }
  //   return (
  //     <>
  //       <div>{ratingStarString}</div>
  //     </>
  //   );
  // };

  let addToCard = (data) => {
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
  return (
    <>
      <section className="return">
        <Container>
          <Row>
            <Col>
              <Link to="/product">
                <BsFillArrowLeftSquareFill />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product">
        <Container>
          <Row>
            <Col lg="6">
              <img
                src={require(`../../assets/images/${product.imageName}`)}
                alt={product.imageName}
                width={"500px"}
              />
            </Col>
            <Col lg="6" className="product__details">
              <div className="product__detail">
                <h2>{product.name}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarHalf />
                    </span>
                    {/* {star()} */}
                  </div>

                  <p>
                    (<span>{product.ratingStar}</span> rating)
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">
                    Giá: {product.price} VNĐ
                  </span>
                  <span>Manufacturer: {product.manufacturerName}</span>
                  <span>Category: {product.categoryName}</span>
                </div>
                <p className="mt-3">{product.info}</p>

                <Link to={"/card"}>
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="buy__btn"
                    onClick={() => addToCard(product)}
                  >
                    Add to Cart
                  </motion.button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review ({reviews.lenght})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Hieu</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Review Product for other</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            row={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12">
              <h2 className="related__title ">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section> */}
    </>
  );
}

export default ProductCard;
