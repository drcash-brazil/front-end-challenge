import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import InputSearch from "components/InputSearch/InputSearch";
import Pagination from "components/Pagination/Pagination";
import { ClinicsType } from "types";
import { Table, TableFooter, TableHead } from "./Table";

type Props = {
  values: ClinicsType[];
};
const TableClinics: React.FC<Props> = ({ values }) => {
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
          {values.map((rede) => (
            <tr>
              <td role="cell">{rede.nome}</td>
              <td role="cell">{rede.email}</td>
              <td role="cell">{rede.fone}</td>
              <td role="cell">
                {rede.address}
                <i className="fa-solid fa-location-dot"></i>
              </td>
              <td role="cell">
                <i className="fa-solid fa-eye"></i>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TableFooter>
        <Pagination />
      </TableFooter>
    </div>
  );
};
export default TableClinics;

