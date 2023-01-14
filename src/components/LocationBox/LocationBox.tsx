import React from "react";

import { Container } from "./Location.styles";

import locationIcon from "../../assets/location-icon.svg";

interface LocationBoxProps {
  title: string;
}

const LocationBox = ({ title }: LocationBoxProps) => {
  return (
    <Container>
      <img src={locationIcon} />
      <span>{title}</span>
    </Container>
  );
};

export default LocationBox;
