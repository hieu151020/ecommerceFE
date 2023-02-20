import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Routers from "../routers/Router";

function Layout(props) {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
