import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #2ecc71;
    --dark-green: #27ae60;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, div#root {
    height: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .error{
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;

    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .show-modal {
    display: block;
  }

  .hide-modal {
    display: none;
  }
`
