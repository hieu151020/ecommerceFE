import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-black">My Shop</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              repudiandae delectus maiores quae nulla ab quod vitae amet non
              consectetur dolore inventore unde nihil veritatis dignissimos
              quasi officiis, rem ipsam?
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">ALL</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">SAMSUNG</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">IPHONE</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">REDMI</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title ">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/home">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/admin">Admin</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact Us</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <p>Bắc Từ Liêm, Hà Nội</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <p>+8448887072</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <AiFillMail />
                  </span>
                  <p>hieu15102000@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Me
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
