import React from "react";
import { Route, Routes } from "react-router-dom";

import DefaultHeaderLayout from "../layouts/DefaultHeaderLayout/DefaultHeaderLayout";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultHeaderLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
