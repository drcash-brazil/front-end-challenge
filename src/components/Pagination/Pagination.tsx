import { useCallback } from "react";
import styled from "styled-components";

interface Props {
  selectItemsPerPage: (itemsPerPage: number) => void;
  page: number;
  listLength: number;
  ItemsPerPage: number;
  selectPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  selectItemsPerPage,
  page,
  listLength,
  ItemsPerPage,
  selectPage,
}) => {
  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectItemsPerPage(Number(e.target.value));
  };

  const nextPage = useCallback(() => {
    if (page === Math.ceil((listLength + 1) / ItemsPerPage)) return;

    selectPage(page + 1);
  }, [page, selectPage,listLength,ItemsPerPage]);

  const previousPage = useCallback(() => {
    if (page === 1) return;

    selectPage(page - 1);
  }, [page, selectPage]);

  return (
    <MainContainer>
      <span>Linhas por paginas:</span>
      <Select value={ItemsPerPage} onChange={handleItemsPerPage}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </Select>

      <PaginationContainer>
        <PaginationButton>
          <i onClick={previousPage} className="fa-solid fa-chevron-left"></i>
        </PaginationButton>
        <span>
          {page}/{Math.ceil(listLength / ItemsPerPage)}
        </span>
        <PaginationButton>
          <i onClick={nextPage} className="fa-solid fa-chevron-right"></i>
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

