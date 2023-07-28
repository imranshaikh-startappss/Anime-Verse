import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "../Header/Navbar";
// import Login from "../Login/Login";
// import Home from "../Home/Home";
// import Products from "../Products/Products";
import Footer from "../footer/Footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} /> */}
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
