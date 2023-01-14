import styled from "styled-components";

import BannerBackground from "../../../../assets/background-banner.svg";

export const Container = styled.div`
  min-height: 34rem;

  background-image: url(${BannerBackground});
  background-size: cover;

  section {
    padding-top: 5.875rem;
    padding-bottom: 5.875rem;

    display: flex;
    justify-content: space-evenly;
  }
`;

export const DetailsContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    font-style: normal;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const BulletsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem;
`;

export const BulletInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  span {
    color: ${(props) => props.theme["base-text"]};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
`;

export const Title = styled.header``;
