import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    transition: all ease 0.5s;
  }
`;
