import React from "react";

import {
  BannerDetails,
  BulletInfo,
  BulletsContainer,
  Container,
  DetailsContainer,
  InfoContainer,
} from "./Banner.styles";

import boxBullet from "../../../../assets/box-bullet.svg";
import cartBullet from "../../../../assets/cart-bullet.svg";
import coffeBullet from "../../../../assets/coffee-bullet.svg";
import imageBanner from "../../../../assets/coffee-delivery-img-banner.svg";
import timerBullet from "../../../../assets/timer-bullet.svg";

const Banner = () => {
  return (
    <Container>
      <BannerDetails>
        <DetailsContainer>
          <InfoContainer>
            <header>Encontre o café perfeito para qualquer hora do dia</header>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </InfoContainer>

          <BulletsContainer>
            <BulletInfo>
              <img src={cartBullet} />
              <span>Compra simples e segura</span>
            </BulletInfo>
            <BulletInfo>
              <img src={boxBullet} />
              <span>Embalagem mantém o café intacto</span>
            </BulletInfo>
            <BulletInfo>
              <img src={timerBullet} />
              <span>Entrega rápida e rastreada</span>
            </BulletInfo>
            <BulletInfo>
              <img src={coffeBullet} />
              <span>O café chega fresquinho até você</span>
            </BulletInfo>
          </BulletsContainer>
        </DetailsContainer>

        <img src={imageBanner} />
      </BannerDetails>
    </Container>
  );
};

export default Banner;
