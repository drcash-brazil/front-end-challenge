import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #073b4c;
  }

  h1 {
    margin: 0;
    padding: 0;
    color: #073b4c;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #06d6a0;
    margin: 30px 0;
  }

  label {
    font-size: 15px;
    color: #073b4c;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #06d6a0;
      border-radius: 10px;
      color: #073b4c;
      outline: 0;
      font-size: 15px;
    }
  }

  button {
    background-color: #06d6a0;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    margin-top: 30px;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
