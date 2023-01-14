import React from "react";

import { Container } from "./Tag.styles";

interface TagProps {
  title: string;
}

const Tag = ({ title }: TagProps) => {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  );
};

export default Tag;
