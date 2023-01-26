import styled from "styled-components";

export const Container = styled.section`
  margin: 2.5rem 0px;
  display: flex;
  gap: 2rem;

  header {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`;

export const AddressAndPaymentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

interface BackgroundContainerProps {
  hasError?: boolean;
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;

  border: ${(props) => props.hasError && "1px solid red"};
`;

export const CheckoutDetails = styled.div`
  width: 40%;
  min-width: 31.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CheckoutDetailsContainer = styled(BackgroundContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 6px 44px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.0625rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
`;

export const TotalAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label {
    font-size: 14px;
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};
  }

  .price {
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};
  }

  .labelTotal {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  .priceTotal {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

interface ConfirmButtonProps {
  isDisabled?: boolean;
}

export const ConfirmButton = styled.button<ConfirmButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;

  border: none;
  background-color: ${(props) =>
    props.isDisabled ? props.theme["base-hover"] : props.theme.yellow};
  border-radius: 6px;

  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  font-stretch: 100;

  &:hover {
    background-color: ${(props) =>
    !props.isDisabled && props.theme["yellow-dark"]};
    transition: all ease 0.5s;
  }
`;
