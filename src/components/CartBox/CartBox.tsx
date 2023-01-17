import React from "react";

import { ShoppingCart } from "phosphor-react";

import { Container } from "./CartBox.styles";

const CartBox = () => {
  return (
    <Container >
      <ShoppingCart color="#C47F17" weight={"fill"} size={22} />
    </Container>
  );
};

export default CartBox;
