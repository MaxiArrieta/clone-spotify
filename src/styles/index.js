import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: 'Poppins', sans-serif;
        background-color: #000;
        color: white;
    }

    button {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: normal;
        line-height: 16px;
        text-transform: none;
    }
`
