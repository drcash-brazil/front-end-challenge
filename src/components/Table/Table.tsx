import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import InputSearch from "components/InputSearch/InputSearch";
import Pagination from "components/Pagination/Pagination";
import styled from "styled-components";

const TableList = () => {
  return (
    <div>
      <TableHead>
        <ButtonIcon icon="plus">Adicionar</ButtonIcon>
        <InputSearch placeholder="Pesquisa por nome" />
      </TableHead>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td role="cell">Redes de clinicas Teste</td>
            <td role="cell">redes@teste.com.br</td>
            <td role="cell">9999999999</td>
            <td role="cell">
              Rua do funcionario teste, 003
              <i className="fa-solid fa-location-dot"></i>
            </td>
            <td role="cell">
              <i className="fa-solid fa-eye"></i>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td role="cell">Redes de clinicas Teste</td>
            <td role="cell">redes@teste.com.br</td>
            <td role="cell">9999999999</td>
            <td role="cell">
              Rua do funcionario teste, 003
              <i className="fa-solid fa-location-dot"></i>
            </td>
            <td role="cell">
              <i className="fa-solid fa-eye"></i>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td role="cell">Redes de clinicas Teste</td>
            <td role="cell">redes@teste.com.br</td>
            <td role="cell">9999999999</td>
            <td role="cell">
              Rua do funcionario teste, 003
              <i className="fa-solid fa-location-dot"></i>
            </td>
            <td role="cell">
              <i className="fa-solid fa-eye"></i>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td role="cell">Redes de clinicas Teste</td>
            <td role="cell">redes@teste.com.br</td>
            <td role="cell">9999999999</td>
            <td role="cell">
              Rua do funcionario teste, 003
              <i className="fa-solid fa-location-dot"></i>
            </td>
            <td role="cell">
              <i className="fa-solid fa-eye"></i>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
        </tbody>
      </Table>
      <TableFooter>
        <Pagination />
      </TableFooter>
    </div>
  );
};
export default TableList;

const TableHead = styled.div`
  width: 100%;
  max-width: 1240px;
  min-height: 60px;
  margin: 50px auto 0px auto;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-bottom: none;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const TableFooter = styled(TableHead)`
  margin: 0 auto;
  border: 1px solid #dee2e6;
  border-top: none;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  max-width: 1240px;
  color: #343a40;

  thead {
    background: #f8f9fa;
  }

  tr th {
    font-weight: bold;
  }

  tr,
  th,
  td {
    padding: 15px;
    text-align: left;
  }

  tr {
    border: 1px solid #dee2e6;
  }

  tbody tr:nth-child(even) {
    background-color: #f8f9fa;
  }

  tbody tr:hover {
    background-color: #e0e0e0;
  }

  td i {
    margin-left: 5px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    display: block;
    max-width: -moz-fit-content;
    max-width: fit-content;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

