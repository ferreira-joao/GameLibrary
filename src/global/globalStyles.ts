import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: Quicksand, sans-serif;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        background-color: #151515;
    }
`;

export default GlobalStyle;
