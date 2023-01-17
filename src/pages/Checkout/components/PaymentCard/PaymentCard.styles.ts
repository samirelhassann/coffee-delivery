import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 9rem;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  span {
    color: ${(props) => props.theme["base-text"]};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }
`;

export const UnselectedCard = styled(Container)`
  background-color: ${(props) => props.theme["base-button"]};

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    transition: all ease 0.5s;
  }
`;

export const SelectedCard = styled(Container)`
  background-color: ${(props) => props.theme["purple-light"]};
  border: 1px solid ${(props) => props.theme.purple};
  cursor: default;
`;
