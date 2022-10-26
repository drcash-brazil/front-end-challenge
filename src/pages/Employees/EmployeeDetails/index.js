import React, { useMemo, useState, useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Trash } from "phosphor-react";

// SERVICES
import {
  deleteClinic,
  getClinicById,
} from "../../../services/endpoints/clinics";

// COMPONENTS
import { Loading } from "../../../components/Loading";
import { ModalDelete } from "../../../components/ModalDelete";
import { ModalRadix, ModalWrapper } from "../../../components/ModalRadix";

// STYLES
import {
  BoxDetails,
  BoxHeaderRight,
  BoxInfo,
  ButtonDelete,
  ContentClinicDetails,
  HeaderPage,
  Title,
  TitleHeader,
  WrapperClinicDetails,
} from "./styles";

export function EmployeesDetails() {
  const navigate = useNavigate();
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const { id } = useParams();
  const queryKey = useMemo(() => [`clinic__details__${id}`], [id]);

  const queryClient = useQueryClient();

  const deleteClinicMutation = useMutation(
    () => {
      const prevData = queryClient.getQueryData("clinics");

      queryClient.setQueryData("clinics", (old) => {
        const dataFiltered = old.filter((item) => item.id !== id);

        return dataFiltered;
      });

      return { prevData };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData("clinics", context.prevData);
      },
    }
  );

  const handleDeleteClinic = useCallback(async () => {
    const { apiCall } = deleteClinic();
    try {
      await apiCall({ id: id });
      deleteClinicMutation.mutate();

      navigate("/clinics");
    } catch (error) {
      console.log("err delete", error); // eslint-disable-line
    }
  }, [id, navigate, deleteClinicMutation]);

  const handleGetClinicById = useCallback(async () => {
    const { apiCall } = getClinicById();

    const { clinicas } = await apiCall({ id });

    return clinicas;
  }, [id]);

  const { data, isLoading, error } = useQuery(queryKey, handleGetClinicById, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return (
    <WrapperClinicDetails>
      {isLoading && <Loading />}

      {!isLoading && !error && data && (
        <ContentClinicDetails>
          <HeaderPage>
            <TitleHeader>{data?.nome}</TitleHeader>

            <BoxHeaderRight>
              <ButtonDelete
                type="button"
                onClick={() => setIsOpenModalDelete(true)}
              >
                <Trash />
              </ButtonDelete>
            </BoxHeaderRight>
          </HeaderPage>

          <BoxDetails>
            <BoxInfo>
              <Title>
                <strong>E-mail:</strong> {data?.email}
              </Title>
              <Title>
                <strong>Telefone:</strong> {data?.fone}
              </Title>
              <Title>
                <strong>Endereço:</strong> {data?.address}
              </Title>
              <Title>
                <strong>CNPJ:</strong> {data?.cnpj}
              </Title>
            </BoxInfo>
          </BoxDetails>
        </ContentClinicDetails>
      )}

      <ModalRadix open={isOpenModalDelete}>
        <ModalWrapper>
          <ModalDelete
            close={() => setIsOpenModalDelete(false)}
            handleDelete={handleDeleteClinic}
          />
        </ModalWrapper>
      </ModalRadix>
    </WrapperClinicDetails>
  );
}
