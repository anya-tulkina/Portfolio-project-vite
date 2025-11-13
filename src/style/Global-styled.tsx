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
        font-family: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.fontColor};
        //line-height: 1.2px;
    }
    

    //p {
    //    font-size: calc((100vw - 360px) / (1920 - 360) * (20 - 15) + 15px);
    //}
    //
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background: none;
        border: none;
    }

    input, textarea {
        max-width: 400px;
        width: 100%;
        min-height: 25px;

        padding: 0 5px;
    }
    
    // section:nth-of-type(odd) {
    //     background-color: ${theme.colors.secondaryBg};
    // }
    //
    // section:nth-of-type(even) {
    //     background-color: ${theme.colors.primaryBg};
    // }
`