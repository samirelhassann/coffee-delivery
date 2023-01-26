import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const OrderLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  header {
    color: ${(props) => props.theme["yellow-dark"]};
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};

    font-stretch: 100;
  }
`;

export const DetailedIndfosContainer = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.yellow};
`;

export const BulletInfoDetails = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
