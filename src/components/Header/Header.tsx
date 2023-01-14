import React from "react";

import { ButtonsArea, Container } from "./Header.styles";

import logo from "../../assets/coffe-delivery-logo.svg";

import CartBox from "../CartBox/CartBox";
import LocationBox from "../LocationBox/LocationBox";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <ButtonsArea>
        <LocationBox title="Porto Alegre, RS" />
        <CartBox />
      </ButtonsArea>
    </Container>
  );
};

export default Header;
