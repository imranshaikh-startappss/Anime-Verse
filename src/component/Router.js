import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../components/footer/Footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
