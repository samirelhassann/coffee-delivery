import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .price {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 16px;
    line-height: 130%;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
