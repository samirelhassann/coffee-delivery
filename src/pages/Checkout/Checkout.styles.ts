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

export const BackgroundContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const CheckoutDetails = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CheckoutDetailsContainer = styled(BackgroundContainer)`
  min-height: 498px;
  border-radius: 6px 44px;
`;
