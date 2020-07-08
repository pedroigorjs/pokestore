import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    color: #313131;
  }

  body,
  button,
  input {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`;
