import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { Container, PaymentList } from "./PaymentMethods.styles";

import PaymentCard from "../PaymentCard/PaymentCard";
import SectionLabel from "../SectionLabel/SectionLabel";

const PaymentMethods = () => {
  const { control } = useFormContext();

  const paymentMethod = useWatch({
    control,
    name: "paymentMethod",
  });

  return (
    <Container>
      <SectionLabel
        icon={<CurrencyDollar size={22} color="#8047F8" />}
        title="Pagamento"
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <PaymentList>
        <PaymentCard
          icon={<CreditCard size={16} color="#8047F8" />}
          title="Cartão de Crédito"
          isActive={paymentMethod === "Cartão de Crédito"}
        />
        <PaymentCard
          icon={<Bank size={16} color="#8047F8" />}
          title="Cartão de Débito"
          isActive={paymentMethod === "Cartão de Débito"}
        />
        <PaymentCard
          icon={<Money size={16} color="#8047F8" />}
          title="Dinheiro"
          isActive={paymentMethod === "Dinheiro"}
        />
      </PaymentList>
    </Container>
  );
};

export default PaymentMethods;
