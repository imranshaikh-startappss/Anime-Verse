import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Header/Navbar";
// import Login  from "../Login/Login";
import Home from "../Home/Home.jsx";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
