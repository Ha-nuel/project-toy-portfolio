import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default GlobalStyle;
