import React from "react";

import { Trash } from "phosphor-react";

import { Container } from "./RemoveButton.styles";

const RemoveButton = () => {
  return (
    <Container>
      <Trash size={16} color="#8047F8" />
      <span>REMOVER</span>
    </Container>
  );
};

export default RemoveButton;
