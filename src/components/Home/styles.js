import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  background-color: #f7f9fa;
`;

export const Column1 = styled.div`
  width: 50%;
  padding: 2.5rem 0 2.5rem 6.25rem;
  color: #2d3748;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 2.5rem 0 2.5rem 4.5rem;
  }
`;

export const ContainerColumn1Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;

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
  @media (max-width: 468px) {
    h3 {
      font-size: 32px;
    }
  }
`;

export const Column2 = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    clip-path: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
    shape-outside: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
  }
`;
