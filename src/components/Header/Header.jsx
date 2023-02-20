import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={require(`../../assets/images/logo.png`)} alt="logo" />
              <div>
                <h1>My Shop</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                <motion.li whileHover={{ scale: 1.2 }} className="nav__item">
                  <NavLink to="/home">HOME</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }} className="nav__item">
                  <NavLink to="/product">PRODUCT</NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }} className="nav__item">
                  <NavLink to="/admin">ADMIN</NavLink>
                </motion.li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <AiOutlineHeart />
              </span>
              <span className="cart__icon">
                <Link to="/card">
                  <BsCartDash />
                </Link>
              </span>
              <span className="user__icon">
                <Link to="/login">
                  <FaUserAlt />
                </Link>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
