import ButtonIcon from "components/Button/ButtonIcon";
import InputSearch from "components/Input/InputSearch";
import ModalConfirm from "components/Modals/ModalConfirm";
import Pagination from "components/Pagination/Pagination";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addressToUrlMaps, capitalizeFirstLetter, formatPhone } from "utils";
import { FeedbackText, Table, TableFooter, TableHead } from "styles";
import ModalAssociate from "components/Modals/ModalAssociate";
import useStore from "services/store";
import { getClinicas } from "queries/clinicas";
import { getFuncionarios } from "queries/funcionarios";
import { toast } from "react-toastify";
import { GenericType } from "types";
import styled from "styled-components";

export interface AssociatePropsInterface {
  associateItemId: number;
  itemId: number;
}

type Props = {
  values: GenericType[];
  deleteItem: (itemId: number) => Promise<any>;
  name: "clinica" | "funcionario" | "rede";
  associateItem?: ({
    associateItemId,
    itemId,
  }: AssociatePropsInterface) => Promise<any>;
};

const GenericTable: React.FC<Props> = ({
  values,
  name,
  deleteItem,
  associateItem,
}) => {
  const navigate = useNavigate();
  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);
  const [openModalAssociate, setOpenModalAssociate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<GenericType>();
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  //Refazer
  const clinicas = useStore((state) => state.clinicas);
  const funcionarios = useStore((state) => state.funcionarios);
  const updateClinicas = useStore((state) => state.updateClinicas);
  const updateFuncionarios = useStore((state) => state.updateFuncionarios);

  useEffect(() => {
    getClinicas().then((res) => updateClinicas(res));
    getFuncionarios().then((res) => updateFuncionarios(res));
  }, [updateClinicas, updateFuncionarios]);

  const handleDelete = async () => {
    if (!selectedItem) return;

    try {
      await deleteItem(selectedItem.id);
      toast.success(`${capitalizeFirstLetter(name)} excluído(a) com sucesso`);
      handleModalConfirm();
    } catch (err) {
      console.log(err);
    }
  };

  const handleModalConfirm = useCallback(() => {
    setOpenModalConfirm((prev) => !prev);
  }, [setOpenModalConfirm]);

  const handleModalAssociate = useCallback(() => {
    setOpenModalAssociate((prev) => !prev);
  }, [setOpenModalAssociate]);

  const onChangeSearch = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, []);

  const handleAssociateItem = async (associateItemId: number) => {
    if (!associateItem) return;

    try {
      await associateItem({ associateItemId, itemId: selectedItem?.id ?? 0 });
      toast.success(`${capitalizeFirstLetter(name)} associado(a) com sucesso!`);
      handleModalAssociate();
    } catch (err) {
      console.log(err);
    }
  };

  const itemsFiltered = useMemo(
    () =>
      values
        .slice((page - 1) * itemsPerPage, itemsPerPage * page)
        .filter((value) => value.nome.includes(search)),
    [values, itemsPerPage, page, search]
  );

  return (
    <div>
      <ModalConfirm
        isOpen={openModalConfirm}
        name="Deletar Clinica"
        onClose={handleModalConfirm}
        onConfirm={handleDelete}
      />

      <ModalAssociate
        isOpen={openModalAssociate}
        name="Associação"
        onClose={handleModalAssociate}
        onConfirm={handleAssociateItem}
        text={
          name === "clinica"
            ? "Associe um funcionario a uma clinica"
            : "Associe uma clinica a uma rede"
        }
        firstSelectLabel={name === "clinica" ? "Clinica" : "Rede"}
        secondSelectLabel={
          name === "clinica" ? "Selecione o funcionario" : "Selecione a Clinica"
        }
        firstSelectValue={selectedItem}
        secondSelectValue={name === "clinica" ? funcionarios : clinicas}
      />

      <TableHead>
        <ButtonIcon onClick={() => navigate(`/${name}/new`)} icon="plus">
          Adicionar
        </ButtonIcon>
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
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itemsFiltered.map((item, index) => (
            <tr key={`table-${name}-item-${index}`}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{formatPhone(item.fone.toString())}</td>
              <td>
                {item.address}
                <i
                  onClick={() => window.open(addressToUrlMaps(item.address))}
                  className="fa-solid fa-location-dot"
                />
              </td>
              <td>
                {name === "rede" && (
                  <i
                    onClick={() => {
                      handleModalAssociate();
                      setSelectedItem(item);
                    }}
                    className=" fa-solid fa-house-medical"
                  />
                )}

                {name === "clinica" && (
                  <i
                    onClick={() => {
                      handleModalAssociate();
                      setSelectedItem(item);
                    }}
                    className="fa-solid fa-user-plus"
                  />
                )}
                <i
                  onClick={() => navigate(`/${name}/${item.id}/view`)}
                  className="fa-solid fa-eye"
                />
                {name !== "funcionario" && (
                  <i
                    onClick={() => navigate(`/${name}/${item.id}/edit`)}
                    className="fa-solid fa-pen-to-square"
                  />
                )}
                <i
                  onClick={() => {
                    handleModalConfirm();
                    setSelectedItem(item);
                  }}
                  className="fa-solid fa-trash"
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
export default GenericTable;

