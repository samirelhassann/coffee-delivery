import React, { useContext } from "react";

import { ShoppingCart } from "phosphor-react";

import { Container, ProductCounter } from "./CartBox.styles";

import { CheckoutContext } from "../../contexts/CheckoutContext";

const CartBox = () => {
  const { totalItems } = useContext(CheckoutContext);

  return (
    <Container>
      <ShoppingCart color="#C47F17" weight={"fill"} size={22} />
      {totalItems > 0 && (
        <ProductCounter>
          <span>{totalItems}</span>
        </ProductCounter>
      )}
    </Container>
  );
};

export default CartBox;
