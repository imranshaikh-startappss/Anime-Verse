import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Products from "../Products/Products"
const Router = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
