import React from "react";

import { SelectedCard, UnselectedCard } from "./PaymentCard.styles";

interface PaymentCardProps {
  icon: JSX.Element;
  title: string;
  isActive?: boolean;
}

const PaymentCard = ({ icon, title, isActive = false }: PaymentCardProps) => {
  return (
    <>
      {isActive ? (
        <SelectedCard>
          {icon}

          <span>{title}</span>
        </SelectedCard>
      ) : (
        <UnselectedCard>
          {icon}

          <span>{title}</span>
        </UnselectedCard>
      )}
    </>
  );
};

export default PaymentCard;
