import React from "react";

import { Minus, Plus } from "phosphor-react";

import { Container } from "./QuantityControl.styles";

interface QuantityControlProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityControl = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityControlProps) => {
  const handleIncrement = () => {
    onIncrement();
  };

  const handleDecrement = () => {
    onDecrement();
  };

  return (
    <Container>
      <button>
        <Minus size={14} color="#8047F8" onClick={handleDecrement} />
      </button>
      <span>{quantity}</span>
      <button>
        <Plus size={14} color="#8047F8" onClick={handleIncrement} />
      </button>
    </Container>
  );
};

export default QuantityControl;
