import React from "react";
import { Route, Routes } from "react-router-dom";

import DefaultHeaderLayout from "../layouts/DefaultHeaderLayout/DefaultHeaderLayout";
import Checkout from "../pages/Checkout/Checkout";
import CompletedOrder from "../pages/CompletedOrder/CompletedOrder";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultHeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-completed" element={<CompletedOrder />} />
      </Route>
    </Routes>
  );
};

export default Router;
