import InputSearch from "components/Input/InputSearch";
import Pagination from "components/Pagination/Pagination";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FeedbackText, Table, TableFooter, TableHead } from "styles";

interface GenericType {
  id: number;
  nome: string;
}

type Props = {
  values: GenericType[];
  name: "clinica" | "funcionario" | "rede";
};

const AssociatesTable: React.FC<Props> = ({ values, name }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const onChangeSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, []);

  const itemsFiltered = useMemo(
    () =>
      values
        .slice((page - 1) * itemsPerPage, itemsPerPage * page)
        .filter((value) => value.nome.includes(search)),
    [values, itemsPerPage, page, search]
  );

  return (
    <div>
      <TableHead>
        <InputSearch
          onChange={onChangeSearch}
          value={search}
          placeholder="Pesquisa por nome"
        />
      </TableHead>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {itemsFiltered.map((item, index) => (
            <tr key={`table-${name}-item-${index}`}>
              <td>{item.nome}</td>

              <td>
                <i
                  onClick={() => navigate(`/${name}/${item.id}/view`)}
                  className="fa-solid fa-eye"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TableFooter>
        <Pagination
          ItemsPerPage={itemsPerPage}
          listLength={values.length}
          page={page}
          selectItemsPerPage={setItemsPerPage}
          selectPage={setPage}
        />
      </TableFooter>
      {itemsFiltered.length === 0 && (
        <FeedbackText>
          Infelizmente nenhum item corresponde a sua pesquisa
        </FeedbackText>
      )}
    </div>
  );
};
export default AssociatesTable;

