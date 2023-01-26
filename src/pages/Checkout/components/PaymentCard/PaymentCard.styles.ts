import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 9rem;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  /* input{
    display: none;
  } */

  span {
    color: ${(props) => props.theme["base-text"]};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }
`;

interface PaymentCardProps {
  isActive: boolean;
}

export const CardSelection = styled(Container)<PaymentCardProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme["purple-light"] : props.theme["base-button"]};

  border: ${(props) =>
    props.isActive ? `1px solid ${props.theme.purple}` : "none"};

  cursor: default;

  ${(props) =>
    !props.isActive &&
    ` &:hover { background-color: ${props.theme["base-hover"]}; transition: all ease 0.5s; }`}
`;
