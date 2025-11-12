import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        margin:  0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.fontColor};
    }

    h1,
    h2,
    h3 {
        font-family: "Playfair Display";
        font-style: Bold;
        
        padding-top: 50px;
        padding-bottom: 50px;
    }

    p {
        font-weight: 400;
        font-size: calc((100vw - 360px) / (1920 - 360) * (18 - 14) + 14px);
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: none;
        border: none;
    }

    input, textarea {
        max-width: 400px;
        width: 100%;
        min-height: 25px;

        padding: 0 5px;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.secondaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.primaryBg};
    }
`