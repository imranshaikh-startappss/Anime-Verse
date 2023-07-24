import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "../Header/Navbar";
import Login  from "../Login/Login";
import ResetPass from "../Login/ResetPass";
import Home from "../Home/Home";
// import Products from "../Products/Products";
// import Footer from "../footer/Footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
          {/* <Route path="/Products" element={<Products />} /> */} 
          <Route path="/login" element={<Login />}/>
          <Route path="/resetpass" element={<ResetPass/>}/>
          {/* <Route path="/" element={<Footer />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
