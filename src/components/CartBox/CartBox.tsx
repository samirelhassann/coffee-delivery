import React from "react";

import { Container } from "./CartBox.styles";

import cartIcon from "../../assets/cart-icon.svg";

const CartBox = () => {
  return (
    <Container>
      <img src={cartIcon} />
    </Container>
  );
};

export default CartBox;
