import React, { useContext } from "react";

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

import AddressOptions from "./components/AddressOptions/AddressOptions";
import CheckoutCardProduct from "./components/CheckoutCardProduct/CheckoutCardProduct";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";

import { CheckoutContext } from "../../contexts/CheckoutContext";

const Checkout = () => {
  const {
    cart,
    totalItems,
    productsTotalAmount,
    deliveryTotalAmount,
    totalAmount,
  } = useContext(CheckoutContext);

  const isButtonEnabled = totalItems > 0;

  const renderPrice = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
  };

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
            {cart.map((productByQuantity) => {
              return (
                <ProductContainer key={productByQuantity.product.id}>
                  <CheckoutCardProduct
                    product={productByQuantity.product}
                    price={productByQuantity.totalPrice}
                    cartQuantity={productByQuantity.quantity}
                  />

                  <Divider />
                </ProductContainer>
              );
            })}
          </ProductList>

          <TotalAmountContainer>
            <div>
              <span className="label">Total de itens</span>
              <span className="price">{renderPrice(productsTotalAmount)}</span>
            </div>
            <div>
              <span className="label">Entrega</span>
              <span className="price">{renderPrice(deliveryTotalAmount)}</span>
            </div>
            <div>
              <span className="labelTotal">Total</span>
              <span className="priceTotal">{renderPrice(totalAmount)}</span>
            </div>
          </TotalAmountContainer>

          <ConfirmButton isDisabled={!isButtonEnabled}>CONFIMAR PEDIDO</ConfirmButton>
        </CheckoutDetailsContainer>
      </CheckoutDetails>
    </Container>
  );
};

export default Checkout;
