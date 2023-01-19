import React from "react";

import {
  AddressAndPaymentContainer,
  BackgroundContainer,
  CheckoutDetails,
  CheckoutDetailsContainer,
  ConfirmButton,
  Container,
  Divider,
  ProductContainer,
  ProductList,
  TotalAmountContainer,
} from "./Checkout.styles";

import traditionalEspresso from "../../assets/traditional-espresso.svg";

import AddressOptions from "./components/AddressOptions/AddressOptions";
import CheckoutCardProduct from "./components/CheckoutCardProduct/CheckoutCardProduct";
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
        <CheckoutDetailsContainer>
          <ProductList>
            <ProductContainer>
              <CheckoutCardProduct
                icon={traditionalEspresso}
                productTitle="Expresso Tradicional"
                price="R$ 9,90"
              />

              <Divider />
            </ProductContainer>

            <ProductContainer>
              <CheckoutCardProduct
                icon={traditionalEspresso}
                productTitle="Expresso Tradicional"
                price="R$ 9,90"
              />

              <Divider />
            </ProductContainer>
          </ProductList>

          <TotalAmountContainer>
            <div>
              <span className="label">Total de itens</span>
              <span className="price"> R$ 29,70</span>
            </div>
            <div>
              <span className="label">Entrega</span>
              <span className="price"> R$ 29,70</span>
            </div>
            <div>
              <span className="labelTotal">Total</span>
              <span className="priceTotal"> R$ 29,70</span>
            </div>
          </TotalAmountContainer>

          <ConfirmButton>CONFIMAR PEDIDO</ConfirmButton>
        </CheckoutDetailsContainer>
      </CheckoutDetails>
    </Container>
  );
};

export default Checkout;
