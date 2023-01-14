import React, { useState } from "react";

import { Minus, Plus } from "phosphor-react";

import { Container } from "./QuantityControl.styles";

const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container>
      <Minus size={14} color="#8047F8" />
      <span>{quantity}</span>
      <Plus size={14} color="#8047F8" />
    </Container>
  );
};

export default QuantityControl;
