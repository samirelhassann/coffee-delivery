import React from "react";

import { ShoppingCartSimple } from "phosphor-react";

import { Container } from "./ProductCartBox.styles";

const ProductCartBox = () => {
  return (
    <Container>
      <ShoppingCartSimple size={22} color="#FFF" weight={"fill"} />
    </Container>
  );
};

export default ProductCartBox;
