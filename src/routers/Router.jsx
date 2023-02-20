import { Routes, Route, Navigate } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Signup from "../pages/Signup";
import Card from "../pages/Card";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="product/productCard" element={<ProductCard />} />
      <Route path="card" element={<Card />} />
      <Route path="admin" element={<Admin />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
