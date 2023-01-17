import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0.75rem;

  div {
    display: flex;
    gap: inherit;
  }
`;

export enum sizeValues {
  AUTO = "100%",
  SMALL = "12.5rem",
  VERYSMALL = "3.75rem",
}

interface InputProps {
  sizeType?: sizeValues;
}

export const Input = styled.input<InputProps>`
  width: ${(props) => props.sizeType};
  padding: 12px;
  height: 42px;

  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
