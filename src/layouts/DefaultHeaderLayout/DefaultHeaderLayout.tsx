import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./DefaultHeaderLayout.styles";

import Header from "../../components/Header/Header";


const DefaultHeaderLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default DefaultHeaderLayout;
