import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e8eb;
  background-color: #fff;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const IconCash = styled.img`
  width: 20px;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media (max-width: 1068px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    width: 20%;
  }

  ${(props) =>
    props.middle &&
    css`
      justify-content: space-between;
      width: 50%;

      @media (max-width: 1068px) {
        width: 65%;
      }
      @media (max-width: 468px) {
        width: 90%;
      }
    `}
`;

export const ContainerIconLogo = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 22px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    cursor: pointer;
    color: #3f51b5;
  }

  @media (max-width: 1068px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 468px) {
    width: 10%;
    padding-left: 2rem;
  }
`;

export const ContainerIconSelect = styled.div`
  height: 30px;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;

  span {
    font-size: 16px;
  }
  small {
    color: white;
    margin-left: 5px;
    font-weight: 600;
    font-size: 10px;
  }
`;

export const ImageUsers = styled.img`
  margin-left: 30px;
  width: 100%;
  cursor: pointer;
`;

export const ContainerIconSelectGreen = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
  button {
    font-size: 16px;
    color: green;
  }
`;

export const ContainerButton = styled.div`
  height: 30px;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
  font-size: 16px;

  button {
    width: 100%;
    height: 100%;
    background-color: #f05555;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 5px;
  }

  ${(props) =>
    props.users &&
    css`
      button {
        background-color: #3f51b5;
      }
    `}
`;
