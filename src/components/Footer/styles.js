import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 4rem 8rem;
  background-color: #1b1642;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const ContainerFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 2.5rem;

  background-color: #1b1642;
  color: #fff;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 2rem;
  }

  @media (max-width: 468px) {
    margin-left: 0;
  }
`;

export const ContainerList = styled.div`
  color: #a4a2b3;

  .MuiSvgIcon-root {
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;

export const ContainerFooterItemName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  width: 25%;
  background-color: #1b1642;
  color: #fff;

  span {
    color: #a4a2b3;
    line-height: 1.5rem;
    cursor: pointer;
  }
  @media (max-width: 558px) {
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  margin-left: 0;

  }
`;

export const ContainerFooterCollumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 3rem;
    justify-content: space-around;
    padding-bottom: 2rem;
  }

  @media (max-width: 558px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 468px) {
    margin-left: 0;
  }
`;
