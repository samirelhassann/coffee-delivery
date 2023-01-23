import React from "react";

import { Trash } from "phosphor-react";

import { Container } from "./RemoveButton.styles";

interface RemoveButtonProps {
  onRemove: () => void;
}

const RemoveButton = ({ onRemove }: RemoveButtonProps) => {
  const handleRemoveProduct = () => {
    onRemove();
  };

  return (
    <Container onClick={handleRemoveProduct}>
      <Trash size={16} color="#8047F8" />
      <span>REMOVER</span>
    </Container>
  );
};

export default RemoveButton;
