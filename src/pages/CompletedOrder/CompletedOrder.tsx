import React, { useContext } from "react";

import {
  BulletInfoDetails,
  Container,
  DetailedIndfosContainer,
  OrderContainer,
  OrderLabelContainer,
} from "./CompletedOrder.styles";

import locationBullet from "../../assets/location-bullet.svg";
import moneyBullet from "../../assets/money-bullet.svg";
import orderCompletedBanner from "../../assets/order-completed-banner.svg";
import timerBullet from "../../assets/timer-bullet.svg";

import { CheckoutContext } from "../../contexts/CheckoutContext";

const CompletedOrder = () => {
  const { completedOrder } = useContext(CheckoutContext);

  return (
    <Container>
      <OrderContainer>
        <OrderLabelContainer>
          <header>Uhu! Pedido confirmado</header>
          <span>Agora é so aguardar que logo o café chegará até você</span>
        </OrderLabelContainer>

        <DetailedIndfosContainer>
          <BulletInfoDetails>
            <img src={locationBullet} />
            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {completedOrder?.address?.street},{" "}
                  {completedOrder?.address?.number}
                </strong>
              </span>
              <span>
                {completedOrder?.address?.district} -{" "}
                {completedOrder?.address?.city},{" "}
                {completedOrder?.address?.state}
              </span>
            </div>
          </BulletInfoDetails>

          <BulletInfoDetails>
            <img src={timerBullet} />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </BulletInfoDetails>

          <BulletInfoDetails>
            <img src={moneyBullet} />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{completedOrder?.paymentMethod}</strong>
              </span>
            </div>
          </BulletInfoDetails>
        </DetailedIndfosContainer>
      </OrderContainer>

      <img src={orderCompletedBanner} />
    </Container>
  );
};

export default CompletedOrder;
