import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { Container, ErrorMessage, Input } from "./FromInput.styles";

export enum SIZE_TYPES {
  AUTO = "100%",
  SMALL = "12.5rem",
  VERYSMALL = "3.75rem",
}

interface Props {
  sizeType: SIZE_TYPES;
  type: string;
  placeholder: string;
  limit?: number;
  hasError?: boolean;
  errorMessage?: string;
  registerControl?: UseFormRegisterReturn<string>;
}

const FormInput = ({
  sizeType,
  type,
  placeholder,
  limit,
  hasError,
  errorMessage,
  registerControl,
}: Props) => {
  return (
    <Container sizeType={sizeType}>
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Input
        type={type}
        hasError={hasError}
        placeholder={placeholder}
        maxLength={limit}
        {...registerControl}
      />
    </Container>
  );
};

export default FormInput;
