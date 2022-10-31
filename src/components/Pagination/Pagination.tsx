import styled from "styled-components";

const Pagination: React.FC = () => {
  return (
    <MainContainer>
      <span>Linhas por paginas:</span>
      <Select>
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </Select>

      <PaginationContainer>
        <PaginationButton>
          <i className="fa-solid fa-chevron-left"></i>
        </PaginationButton>
        <span>1/10</span>
        <PaginationButton>
          <i className="fa-solid fa-chevron-right"></i>
        </PaginationButton>
      </PaginationContainer>
    </MainContainer>
  );
};

export default Pagination;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  color: #343a40;
`;

const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
  height: 30px;
  font-size: 14px;
  outline: none;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  color: #343a40;
`;

const PaginationContainer = styled.div`
  margin-left: 40px;
  display: flex;
  gap: 15px;
`;

const PaginationButton = styled.div`
  outline: none;
  cursor: pointer;
  border: none;
`;

