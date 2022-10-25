import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    &::-webkit-scrollbar-track {
      visibility: hidden;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      visibility: hidden;
      background-color: #00000029;
    }
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    &:hover {
      &::-webkit-scrollbar-thumb {
        visibility: visible;
      }
      &::-webkit-scrollbar-track {
        visibility: visible;
      }
      scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3);
    }
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
  
  .iclinic_select__control {
    min-height: 48px !important;
    background-color: ${({ theme }) => theme.pallet.gray.gray100} !important;
    border-width: 2px !important;
    border-color: ${({ theme }) => theme.pallet.green.green500} !important;

    &:hover {
      box-shadow: none !important;
    }
  }
`;

export default GlobalStyle;
