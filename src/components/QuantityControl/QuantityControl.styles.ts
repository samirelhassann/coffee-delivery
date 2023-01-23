import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.0625rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
    border: 0;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }

  span {
    padding: 0 7px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};
  }
`;
