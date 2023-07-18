import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Header/Navbar";
import Login  from "../Login/Login";
import Footer from "../footer/Footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/" element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
