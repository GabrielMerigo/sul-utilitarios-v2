import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --gray-light: #333333;
    --gray-dark: #5c5c5c;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Oswald;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 1rem = tamanho do font-size da nossa página 
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button{ 
    cursor: pointer;
  }
`;