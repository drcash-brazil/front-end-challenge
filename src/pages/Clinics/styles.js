import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  margin: 2rem 0;
  h2 {
    font-weight: 500;
    font-family: sans-serif;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerBodyItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #f0f1f2;
  margin: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }

  h3 {
    font-weight: 600;
    font-size: 22px;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }

  span {
    margin-bottom: 0.25rem;
  }

  @media (max-width: 968px) {
    width: 45%;
  }
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const ContainerBodyItensArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dddfe0;
`;

export const ContainerBodyItensAddress = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const ContainerBodyItensButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonDelete = styled.button`
  border: 1px solid #e5e8eb;
  width: 48%;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f05555;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f9f9f9;
    color: #f05555;
    border: 1px solid #f05555;
    box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }
`;

export const ButtonEdit = styled.button`
  border: 1px solid #e5e8eb;
  width: 48%;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 16px;
  background-color: #3f51b5;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f9f9f9;
    color: #3f51b5;
    border: 1px solid #3f51b5;
    box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }
`;
