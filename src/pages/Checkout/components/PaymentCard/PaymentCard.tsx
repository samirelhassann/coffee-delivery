import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { CardSelection } from "./PaymentCard.styles";

interface PaymentCardProps {
  icon: JSX.Element;
  title: string;
  isActive?: boolean;
}

const PaymentCard = ({ icon, title, isActive = false }: PaymentCardProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="paymentMethod"
      render={({ field: { onChange } }) => (
        <CardSelection isActive={isActive} onClick={() => onChange(title)}>
          {icon}

          <span>{title}</span>
        </CardSelection>
      )}
    />
  );
};

export default PaymentCard;
