import React from "react";

import { ShoppingCartSimple } from "phosphor-react";

import { Container } from "./ProductCartBox.styles";

interface ProductCartBoxProps {
  onAddProduct: () => void;
}

const ProductCartBox = ({ onAddProduct }: ProductCartBoxProps) => {
  const handleAddProduct = () => {
    onAddProduct();
  };

  return (
    <Container onClick={handleAddProduct}>
      <ShoppingCartSimple size={22} color="#FFF" weight={"fill"} />
    </Container>
  );
};

export default ProductCartBox;
