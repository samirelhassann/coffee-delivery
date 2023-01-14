import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 0.375rem;
  padding: 0.5rem;

  span {
    color: ${(props) => props.theme["purple-dark"]};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1375rem;
  }
`;
