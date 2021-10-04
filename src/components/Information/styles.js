import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #2d3748;
  padding: 2.5rem 0;
`;

export const ContainerRow = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
`;

export const Column1 = styled.div`
  width: 55%;
  padding-left: 6.25rem;
  color: #2d3748;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 1.25rem;
    width: 85%;
  }

  button {
    background-color: #3f51b5;
    color: white;
    font-size: 1rem;
    width: 11rem;
    height: 2.5rem;
    border-radius: 0.4rem;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
export const Column1Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 25%;

  @media (max-width: 1068px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
  }
`;

export const Column1ItemImage = styled.div`
  width: 10%;
  margin-right: 1rem;
`;

export const Column1ItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  span {
    font-size: 1.25rem;
  }
  small {
    font-size: 1rem;
  }
`;

export const Column2 = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: #3f51b5;
    color: white;
    font-size: 1rem;
    width: 14rem;
    height: 3rem;
    border-radius: 0.4rem;
    margin-top: 1rem;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #f9f9f9;
      color: #3f51b5;
      border: 1px solid #3f51b5;

      transition: 0.3s;
      box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
  }
`;
