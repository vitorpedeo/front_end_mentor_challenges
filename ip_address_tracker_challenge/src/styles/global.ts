import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font: 400 1.125rem 'Rubik', sans-serif;
  }

  @media screen and (max-width: 640px) {
    html {
      font-size: 88.888888888889%; // This percentage is calculated of 1.125rem (18px), resulting 1rem (16px)
    }
  }
`;
