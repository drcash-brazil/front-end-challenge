import styled from "styled-components";

export const TableHead = styled.div`
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

export const TableFooter = styled(TableHead)`
  margin: 0 auto;
  border: 1px solid #dee2e6;
  border-top: none;
`;

export const Table = styled.table`
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

  @media (max-width: 780px) {
    display: block;
    max-width: -moz-fit-content;
    max-width: fit-content;
    overflow-x: auto;
    white-space: nowrap;

    thead th {
      width: 1%;
    }
  }
`;

