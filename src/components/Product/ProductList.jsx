import React, { useState } from "react";
import "../../style/product-list.css";
import { BiSearchAlt } from "react-icons/bi";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import ProductDetail from "./ProductDetail";
import { selectListProduct } from "../../ReduxTK/Selector/ProductSelector";

function ProductList(props) {
  let { getProduct } = props;
  let stateRedux = useSelector((state) => state);
  let listProduct = selectListProduct(stateRedux);

  const [productData, setProductsData] = useState(listProduct);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      let filteredProducts = listProduct;
      setProductsData(filteredProducts);
    }

    if (filterValue === "samsung") {
      let filteredProducts = listProduct.filter((item) => {
        return item.manufacturerName === "SAMSUNG";
      });
      setProductsData(filteredProducts);
    }

    if (filterValue === "apple") {
      let filteredProducts = listProduct.filter(
        (item) => item.manufacturerName === "APPLE"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "xiaomi") {
      let filteredProducts = listProduct.filter(
        (item) => item.manufacturerName === "XIAOMI"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "oppo") {
      let filteredProducts = listProduct.filter(
        (item) => item.manufacturerName === "OPPO"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue === "phone") {
      let sortedProducts = listProduct.filter((item) => {
        return item.categoryName === "Điện thoại";
      });
      setProductsData(sortedProducts);
    }
    if (sortValue === "tablet") {
      let sortedProducts = listProduct.filter((item) => {
        return item.categoryName === "Tablet";
      });
      setProductsData(sortedProducts);
    }
    if (sortValue === "laptop") {
      let sortedProducts = listProduct.filter((item) => {
        return item.categoryName === "Laptop";
      });
      setProductsData(sortedProducts);
    }
  };

  //   Search
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = listProduct.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <>
      <section>
        <Container>
          <Row className="action">
            <Col lg="3" md="6">
              <div className="filter">
                <select onChange={handleFilter}>
                  <option>Filter By Manufacturer</option>
                  <option value="all">All</option>
                  <option value="samsung">SAMSUNG</option>
                  <option value="apple">APPLE</option>
                  <option value="xiaomi">XIAOMI</option>
                  <option value="oppo">OPPO</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter">
                <select onChange={handleSort}>
                  <option>Sort By Category</option>
                  <option value="phone">Điện thoại</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
              </div>
            </Col>
            <Col lg="4" md="12" className="search">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......."
                  onChange={handleSearch}
                />
                <motion.span whileTap={{ scale: 1.2 }}>
                  <BiSearchAlt />
                </motion.span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center">No product are found!!</h1>
            ) : (
              <ProductDetail data={productData} getProduct={getProduct} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProductList;
