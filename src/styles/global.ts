import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --blue: #4C33CC;
    --yellow: #FFC042;
    --white: #fff;
    --error: #E62E2E;
    --success: #51B853;
    --warning: #f0ad4e;
    --texts: #BEBCCC;
    --texts-in-blue: #D5CCFF;
    --texts-base: #6F6C80;
    --texts-complements: #A0ACB3;
    --titles: #4C4766;
    --background: #F7F5FA;
    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    color: var(--titles);
  }

  strong, button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  input, body, textarea {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  a {
    &:active {
      color: inherit;
    }
  }

  button {
    background-color: transparent;
    cursor: pointer;
    border: 0;
  }
`;
