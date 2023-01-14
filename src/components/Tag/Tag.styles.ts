import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 100px;

  span {
    padding: 4px 8px;

    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
  }
`;
