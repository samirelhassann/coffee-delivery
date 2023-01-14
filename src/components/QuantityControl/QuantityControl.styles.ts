import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  span {
    padding: 0 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};
  }
`;
