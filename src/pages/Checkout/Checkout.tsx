import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

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

import AddressForm from "./components/AddressOptions/AddressOptions";
import CheckoutCardProduct from "./components/CheckoutCardProduct/CheckoutCardProduct";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";

import { CheckoutContext } from "../../contexts/CheckoutContext";

const newAddressValidationSchema = zod.object({
  zipCode: zod.string().min(8, "Obrigatório"),
  street: zod.string().min(1, "Obrigatório"),
  number: zod.string().min(1, "Obrigatório"),
  complement: zod.string().min(1, "Obrigatório"),
  district: zod.string().min(1, "Obrigatório"),
  city: zod.string().min(1, "Obrigatório"),
  state: zod.string().min(2, "Obrigatório"),
});

export type NewAddressFormData = zod.infer<typeof newAddressValidationSchema>;

const Checkout = () => {
  const {
    cart,
    totalItems,
    productsTotalAmount,
    deliveryTotalAmount,
    totalAmount,
  } = useContext(CheckoutContext);

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      zipCode: "",
    },
  });

  const { handleSubmit, reset } = newAddressForm;

  const isButtonEnabled = totalItems > 0;

  const renderPrice = (value: number) => {
    return `R$ ${value.toFixed(2)}`;
  };

  const handleCreateNewAddress = (data: NewAddressFormData) => {
    // createNewCycle(data);
    reset();
  };

  return (
    <form action="" onSubmit={handleSubmit(handleCreateNewAddress)}>
      <Container>
        <AddressAndPaymentContainer>
          <header>Complete seu pedido</header>
          <BackgroundContainer>
            <FormProvider {...newAddressForm}>
              <AddressForm />
            </FormProvider>
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
                <span className="price">
                  {renderPrice(productsTotalAmount)}
                </span>
              </div>
              <div>
                <span className="label">Entrega</span>
                <span className="price">
                  {renderPrice(deliveryTotalAmount)}
                </span>
              </div>
              <div>
                <span className="labelTotal">Total</span>
                <span className="priceTotal">{renderPrice(totalAmount)}</span>
              </div>
            </TotalAmountContainer>

            <ConfirmButton type="submit" isDisabled={!isButtonEnabled}>
              CONFIMAR PEDIDO
            </ConfirmButton>
          </CheckoutDetailsContainer>
        </CheckoutDetails>
      </Container>
    </form>
  );
};

export default Checkout;
