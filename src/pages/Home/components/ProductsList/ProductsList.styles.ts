import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
  padding-top: 6.25rem;

  header {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`;

export const CoffeeList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.875rem 2rem;
`;
