import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    .main {
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .secondary {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
