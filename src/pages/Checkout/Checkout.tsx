import React from "react";

import {
  AddressAndPaymentContainer,
  BackgroundContainer,
  CheckoutDetails,
  CheckoutDetailsContainer,
  Container,
} from "./Checkout.styles";

import AddressOptions from "./components/AddressOptions/AddressOptions";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";

const Checkout = () => {
  return (
    <Container>
      <AddressAndPaymentContainer>
        <header>Complete seu pedido</header>
        <BackgroundContainer>
          <AddressOptions />
        </BackgroundContainer>

        <BackgroundContainer>
          <PaymentMethods />
        </BackgroundContainer>
      </AddressAndPaymentContainer>

      <CheckoutDetails>
        <header>Cafés selecionados</header>
        <CheckoutDetailsContainer></CheckoutDetailsContainer>
      </CheckoutDetails>
    </Container>
  );
};

export default Checkout;
