import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    section{
        padding-left:  10rem;
        padding-right:  10rem;
    }

    body{
        background: ${(props) => props.theme.background};
    }

    header{
        font-family: "Baloo 2", sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
