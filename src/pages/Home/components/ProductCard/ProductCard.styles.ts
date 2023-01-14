import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  .coffeeImage {
    margin-top: -2.5rem;
  }
`;

export const TagsArea = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const ProductInfoArea = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;

  header {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme["base-label"]};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
`;

export const PriceAndButtonsArea = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  align-items: center;
  gap: 1.4375rem;
`;

export const PriceArea = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: baseline;

  .priceSign {
    color: ${(props) => props.theme["base-text"]};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  .price {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 31.2px;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;
