import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.4063rem 0.5rem;
  width: fit-content;

  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  cursor: pointer;

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    transition: all ease 0.5s;
  }
`;
