import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Header/Navbar";
import Login  from "../component/Login/Login";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
