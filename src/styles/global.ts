import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select, p {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  #__next {
    min-height: 100vh;
  }

  .toastifyContainer{
    align-items: center !important;
    justify-content:center !important;
  }

  .Toastify__toast-container {
    z-index: 999999999999 !important;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  :root {
    --main:#2AD2C9;
    --secondary:#1B1D36;

    --white: #ffffff;
    --black: #000;

    --gray-200: #E2E8F0;
    --gray-400:#A0AEC0;
    --gray-600:#8B97B1;
    --gray-high:#777E8A;

    --text: #6A777D;
    --gray: #F1F1F1;
    --gray-high: #76899F;

    --title: #232129;
    --text: #454851;
    --placeholder: #666360;

    --pink:#ED2E7E;
    --rose:#F59090;
    --violet:#9290F5;
    --green:#00BA88;
    --yellow:#F4B740;
    --purple:#4164E3;
  }

  @media (max-width: 425px) {
    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }
`;
