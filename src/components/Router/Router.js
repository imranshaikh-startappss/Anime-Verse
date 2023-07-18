import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Header/Navbar";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
