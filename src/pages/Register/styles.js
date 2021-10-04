import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerHeader = styled.div`
  margin: 2rem 0;
  h2 {
    font-weight: 500;
    text-align: center;
  }
`;

export const ContainerForm = styled.div`
  width: 50%;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background-color: #e9ecef;

  @media (max-width: 768px) {
    width: 90%;
  }

`;

export const ContainerFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;

  label {
    margin-bottom: 0.25rem;
    font-size: 16px;
  }

  input {
    border: 1px solid #e5e8eb;
    width: 100%;
    height: 2.5rem;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const ContainerSubmit = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;

  button {
    border: 1px solid #e5e8eb;
    width: 100%;
    height: 2.5rem;
    padding-left: 10px;
    border-radius: 5px;
    font-size: 16px;
    background-color: #3f51b5;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #f9f9f9;
      color: #3f51b5;
      border: 1px solid #3f51b5;

      transition: 0.3s;
      box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.1);
      transform: scale(1.03);
    }
  }
`;
