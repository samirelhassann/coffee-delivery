import styled from "styled-components";

import { SIZE_TYPES } from "./FormInput";

interface ContainerProps {
  sizeType?: SIZE_TYPES;
}

interface InputProps {
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.sizeType};
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<InputProps>`
  padding: 12px;
  height: 42px;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid
    ${(props) =>
    props.hasError ? props.theme.red : props.theme["base-button"]};
  border-radius: 4px;

  ::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.red};
  font-size: 14px;
`;
