import styled from "styled-components";

import { CartBoxProps } from "./CartBox";

export const Container = styled.div<CartBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.isHeader ? props.theme["yellow-light"] : props.theme["purple-dark"]};
  border-radius: 0.375rem;
  padding: 0.5rem;
`;
