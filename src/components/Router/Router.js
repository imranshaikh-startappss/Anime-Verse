import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Login  from "../Login/Login";
import ResetPass from "../Login/ResetPass";
import Home from "../Home/Home";
import RegisterForm from "../Login/RegisterForm";
// import Products from "../Products/Products";
// import Footer from "../footer/Footer";
// import Products from "../Products/Products"
const Router = () => {
  return (
    <>
    <Navbar />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Products />} /> */}
          {/* <Route path="/Products" element={<Products />} /> */} 
          <Route path="/login" element={<Login />}/>
          <Route path="/resetpass" element={<ResetPass/>}/>
          <Route path="/registerform" element={<RegisterForm/>}/>
          {/* <Route path="/" element={<Footer />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
