import { css } from "styled-components";

export const themes = {
  pallet: {
    green: {
      green500: "#3FD2B6",
      green300: "#31E8C5",
    },
    gray: {
      gray100: "#f0f8ff",
      gray200: "#f4f6f8",
      gray900: "#121214",
    },
    white: "#fff",
    black: "#000",
    red: "#b20a0a",
  },
  boxShadow: {
    main: "5px 6px 4px rgba(0, 0, 0, 0.25)",
    focus:
      "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    modal:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    variant: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  },
  borderRadius: {
    rectangle: "4px",
  },
  fontSize: {
    /** @property 0.75rem (12px) */
    xs: "0.75rem",
    /** @property 0.875rem (14px) */
    sm: "0.875rem",
    /** @property 1rem (16px) */
    md: "1rem",
    /** @property 1.125rem (18px) */
    lg: "1.125rem",
    /** @property 2rem (32px) */
    xxxl: "2rem",
  },
  device: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
  css: {
    scrollBars: {
      thin: css`
        &::-webkit-scrollbar-track {
          background: #f5f5f5;
        }
        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        &::-webkit-scrollbar-thumb {
          background: #00000029;
        }
        scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.15);
        scrollbar-width: thin;
        -webkit-overflow-scrolling: touch;
      `,
      thinHover: css`
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
      `,
    },
  },
};
