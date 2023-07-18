import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "../Header/Navbar";
import Login  from "../Login/Login";
import Home from "../Home/Home";
import Products from "../Products/Products";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} /> */}
          <Route path="/" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
