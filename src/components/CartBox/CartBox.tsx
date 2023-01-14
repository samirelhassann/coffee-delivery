import React from "react";

import { ShoppingCart, ShoppingCartSimple } from "phosphor-react";

import { Container } from "./CartBox.styles";

export interface CartBoxProps {
  isHeader?: boolean;
}

const CartBox = ({ isHeader }: CartBoxProps) => {
  return (
    <Container isHeader={isHeader}>
      {isHeader && <ShoppingCart color="#C47F17" weight={"fill"} size={22} />}
      {!isHeader && (
        <ShoppingCartSimple size={22} color="#FFF" weight={"fill"} />
      )}
    </Container>
  );
};

export default CartBox;
