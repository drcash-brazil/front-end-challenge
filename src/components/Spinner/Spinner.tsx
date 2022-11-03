import React from "react";
import styled from "styled-components";

const Spinner: React.FC = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
      data-testid="spinner"
    />
  </StyledSpinner>
);

export default Spinner;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  color: #073b4c;
  & .path {
    stroke: #073b4c;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

