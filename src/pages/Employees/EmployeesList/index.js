import React, { useCallback, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { At, House, IdentificationBadge, Phone, Trash } from "phosphor-react";

// SERVICES
import {
  deleteEmployee,
  getEmployees,
} from "../../../services/endpoints/employees";

// COMPONENTS
import { ModalCreateEmployee } from "./ModalCreateEmployee";
import { ModalDelete } from "../../../components/ModalDelete";
import { Button } from "../../../components/Button";
import { Loading } from "../../../components/Loading";
import { ModalRadix, ModalWrapper } from "../../../components/ModalRadix";
import { Feedback } from "../../../components/Feedback";

// STYLES
import {
  BoxInfo,
  BoxInitialLetter,
  ButtonDelete,
  EmployeeList,
  HeaderContentRight,
  HeaderItem,
  HeaderPage,
  Info,
  Item,
  MoreInfo,
  NetworkName,
  TitlePage,
  WrapperEmployees,
} from "./styles";

export function EmployeesList() {
  const queryClient = useQueryClient();
  const queryKey = useMemo(() => ["employees"], []);

  const [isOpenModalCreateEmployee, setIsOpenModalCreateEmployee] =
    useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState({
    open: false,
    id: null,
  });

  const handleGetEmployees = useCallback(async () => {
    const { apiCall } = getEmployees();

    const { funcionarios } = await apiCall();

    return funcionarios;
  }, []);

  const { data, isLoading, error } = useQuery(queryKey, handleGetEmployees, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const deleteEmployeeMutation = useMutation(
    (id) => {
      const prevData = queryClient.getQueryData("employees");

      queryClient.setQueryData("employees", (old) => {
        const dataFiltered = old.filter((item) => item.id !== id);
        return dataFiltered;
      });

      return { prevData };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData("employees", context.prevData);
      },
    }
  );

  const handleDeleteEmployee = useCallback(async () => {
    const { apiCall } = deleteEmployee();
    try {
      await apiCall({ id: isOpenModalDelete.id });
      deleteEmployeeMutation.mutate(isOpenModalDelete.id);
      setIsOpenModalDelete({
        open: false,
        id: null,
      });
    } catch (error) {
      console.log("err delete", error); // eslint-disable-line
    }
  }, [deleteEmployeeMutation, isOpenModalDelete]);

  return (
    <WrapperEmployees>
      <HeaderPage>
        <TitlePage>Funcionários</TitlePage>

        <HeaderContentRight>
          <Button
            type="button"
            onClick={() => setIsOpenModalCreateEmployee(true)}
          >
            Cadastrar Funcionário
          </Button>
        </HeaderContentRight>
      </HeaderPage>

      {isLoading && <Loading />}

      {!isLoading && !error && !!data.length && (
        <EmployeeList>
          {data.map((item) => (
            <Item key={item.id}>
              <HeaderItem>
                <BoxInitialLetter>{item.nome.substr(0, 1)}</BoxInitialLetter>
                <NetworkName>{item.nome}</NetworkName>

                <ButtonDelete
                  type="button"
                  onClick={() =>
                    setIsOpenModalDelete({
                      open: true,
                      id: item?.id,
                    })
                  }
                >
                  <Trash />
                </ButtonDelete>
              </HeaderItem>

              <MoreInfo>
                <BoxInfo>
                  <At />
                  <Info>{item.email}</Info>
                </BoxInfo>

                <BoxInfo>
                  <Phone />
                  <Info>{item.fone}</Info>
                </BoxInfo>

                <BoxInfo>
                  <IdentificationBadge />
                  <Info>{item.cpf}</Info>
                </BoxInfo>

                <BoxInfo>
                  <House />
                  <Info>{item.address}</Info>
                </BoxInfo>
              </MoreInfo>
            </Item>
          ))}
        </EmployeeList>
      )}

      {!isLoading && !error && !data.length && (
        <Feedback description="Nenhum funcionário encontrada" />
      )}

      <ModalRadix open={isOpenModalCreateEmployee}>
        <ModalWrapper>
          <ModalCreateEmployee
            close={() => setIsOpenModalCreateEmployee(false)}
          />
        </ModalWrapper>
      </ModalRadix>

      <ModalRadix open={isOpenModalDelete.open}>
        <ModalWrapper>
          <ModalDelete
            close={() =>
              setIsOpenModalDelete({
                open: false,
                id: null,
              })
            }
            handleDelete={handleDeleteEmployee}
          />
        </ModalWrapper>
      </ModalRadix>
    </WrapperEmployees>
  );
}
