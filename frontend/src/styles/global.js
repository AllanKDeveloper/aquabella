import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

     @media(max-width: 720px){
      font-size: 87.5%;
    }

    @media(max-width: 600px){
      font-size: 81.25%;
    }

    @media(max-width: 320px){
      font-size: 75%;
    }
  }

   body {
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  a {
  text-decoration: none;
}

`;
