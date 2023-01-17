import React from "react";
import { Link } from "react-router-dom";

import { ButtonsArea, Container } from "./Header.styles";

import logo from "../../assets/coffe-delivery-logo.svg";

import CartBox from "../CartBox/CartBox";
import LocationBox from "../LocationBox/LocationBox";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ButtonsArea>
        <LocationBox title="Porto Alegre, RS" />
        <Link to="/checkout">
          <CartBox />
        </Link>
      </ButtonsArea>
    </Container>
  );
};

export default Header;
