import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  };

  img{
    max-width: 100%;
  };

  html, body, #root {
    height: 100%;
  };
  #root {
    display: flex ;
    flex-direction:  column;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: ${({ theme }) => theme.pallet.gray.gray200};
    pointer-events: auto !important;
  };

  a {
    &:hover {
      text-decoration: none;
    };

    &[disabled] {
      cursor: not-allowed;
      &:active {
        pointer-events: none;
        box-shadow: none;
      };
    };
  };

  button {
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline:none;
    };
    &[disabled] {
      cursor: not-allowed;
      &:active {
        box-shadow: none;
      };
    };
  };

  ul {
    padding: 0;
    margin: 0;
  };

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
