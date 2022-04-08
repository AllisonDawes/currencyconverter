import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #1A202C;
    --secundary: #171923;

    --red: #e52e4d;    
    --green: #33cc95;

    --input: #2D3748;
    --button: #319795;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--primary);
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, a {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer
  }

  [desabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
