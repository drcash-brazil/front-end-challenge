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

  .addressCep {
    display: flex;
    button {
      margin-left: 32px;
      padding: 0 40px;
    }
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
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #073b4c;
  }
`;

export const Body = styled.div`
  width: 100%;
  border: 1px solid #06d6a0;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  color: #073b4c;
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 16px;

  .diplayCollumn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: bold;
    color: #06d6a0;
    text-decoration: underline;
  }

  h2 {
    margin-top: 0;
  }
`;

export const Address = styled.div`
  color: #073b4c;
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 16px;
  p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: bold;
    color: #06d6a0;
    text-decoration: underline;
  }

  h2 {
    margin-top: 0;
    font-size: 12px;
  }

  .addressText {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .diplayCollumn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
