import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../Header/Navbar";
// import Header from "../Header/Header";
import Layout from "../Layout";

const Router = () => {
  return (
    <>
      <Suspense>
        <BrowserRouter fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />} />
            {/* <Route path="/" element={<Header />} /> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
export default Router;
