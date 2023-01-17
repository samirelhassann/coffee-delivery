import React from "react";

import { Container } from "./SectionLabel.style";

interface SectionLabelProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SectionLabel = ({ icon, title, description }: SectionLabelProps) => {
  return (
    <Container>
      {icon}
      <div>
        <span className="main">{title}</span>
        <span className="secondary">{description}</span>
      </div>
    </Container>
  );
};

export default SectionLabel;
