import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0.1875rem 0.4375rem;
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 50%;

  margin-top: -2.1875rem;
  margin-right: -2.1875rem;

  span {
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-align: center;
  }
`;
