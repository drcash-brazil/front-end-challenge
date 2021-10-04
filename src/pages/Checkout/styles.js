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
  background-color: #e9ecef;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dddfe0;
  h3 {
    margin: 0.5rem 0;
  }
`;

export const ContainerFormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 468px) {
    flex-direction: column;
  }
`;

export const ContainerFormItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  width: 48%;

  label {
    margin-bottom: 0.25rem;
    font-size: 16px;
  }

  span {
    height: 1.5rem;
    padding-left: 5px;
    border-radius: 5px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 468px) {
    width: 95%;
  }
`;

export const ContainerSubmit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 468px) {
    flex-direction: column;
  }
`;

export const ContainerFormItemRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.25rem;
    font-size: 16px;
  }

  span {
    height: 1.5rem;
    padding-left: 5px;
    border-radius: 5px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ButtonBack = styled.button`
  border: 1px solid #e5e8eb;
  width: 48%;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f05555;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #f05555;
    border: 1px solid #f05555;
    transition: 0.3s;
    box-shadow: 0px 3px 2px 3px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }

  @media (max-width: 468px) {
    width: 95%;
    margin-bottom: 1rem;
  }
`;

export const ButtonAdvanced = styled.button`
  border: 1px solid #e5e8eb;
  width: 48%;
  height: 2.5rem;
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

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  @media (max-width: 468px) {
    width: 95%;
  }
`;
