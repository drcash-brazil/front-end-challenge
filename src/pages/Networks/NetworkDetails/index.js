import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { PencilSimple, Trash } from "phosphor-react";

// SERVICES
import {
  deleteNetwork,
  getNetworkById,
} from "../../../services/endpoints/networks";

// COMPONENTS
import { Button } from "../../../components/Button";
import { Loading } from "../../../components/Loading";
import { ModalDelete } from "../../../components/ModalDelete";
import { ModalRadix, ModalWrapper } from "../../../components/ModalRadix";
import { ModalAssociateClinic } from "./ModalAssociateClinic";
import { ModalEditNetwork } from "./ModalEditNetwork";

// STYLES
import {
  BoxButton,
  BoxClinics,
  BoxDetails,
  BoxHeaderRight,
  BoxInfo,
  ButtonDelete,
  ButtonEdit,
  ClinicName,
  ClinicsList,
  ContentNetworkDetails,
  HeaderPage,
  HeaderPageClinics,
  Item,
  Title,
  TitleClinics,
  TitleHeader,
  WrapperNetworkDetails,
} from "./styles";

export function NetworkDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const queryKey = useMemo(() => [`network__details__${id}`], [id]);
  const queryClient = useQueryClient();

  const [isOpenModalEditNetwork, setIsOpenModalEditNetwork] = useState(false);
  const [isOpenModalAssociateClinic, setIsOpenModalAssociateClinic] =
    useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const deleteNetworkMutation = useMutation(
    () => {
      const prevData = queryClient.getQueryData("networks");

      queryClient.setQueryData("networks", (old) => {
        const dataFiltered = old.filter((item) => item.id !== id);
        return dataFiltered;
      });

      return { prevData };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData("networks", context.prevData);
      },
    }
  );

  const handleDeleteNetwork = useCallback(async () => {
    const { apiCall } = deleteNetwork();
    try {
      await apiCall({ id: id });
      deleteNetworkMutation.mutate();

      navigate("/");
    } catch (error) {
      console.log("err delete", error); // eslint-disable-line
    }
  }, [id, navigate, deleteNetworkMutation]);

  const handleGetNetworkById = useCallback(async () => {
    const { apiCall } = getNetworkById();

    const { redes } = await apiCall({ id });

    return redes;
  }, [id]);

  const { data, isLoading, error } = useQuery(queryKey, handleGetNetworkById, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return (
    <WrapperNetworkDetails>
      {isLoading && <Loading />}

      {!isLoading && !error && data && (
        <ContentNetworkDetails>
          <HeaderPage>
            <TitleHeader>{data?.nome}</TitleHeader>

            <BoxHeaderRight>
              <ButtonEdit
                type="button"
                onClick={() => setIsOpenModalEditNetwork(true)}
              >
                <PencilSimple />
              </ButtonEdit>
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
            </BoxInfo>

            <BoxClinics>
              <HeaderPageClinics>
                <TitleClinics>Clínicas Associadas</TitleClinics>

                <BoxButton
                  type="button"
                  onClick={() => setIsOpenModalAssociateClinic(true)}
                >
                  <Button>Associar Clínicas</Button>
                </BoxButton>
              </HeaderPageClinics>

              <ClinicsList>
                {data?.clinicas?.map((item) => (
                  <Item key={item.id}>
                    <ClinicName>{item.nome}</ClinicName>
                  </Item>
                ))}
              </ClinicsList>
            </BoxClinics>
          </BoxDetails>
        </ContentNetworkDetails>
      )}

      <ModalRadix open={isOpenModalEditNetwork}>
        <ModalWrapper>
          <ModalEditNetwork
            networkId={id}
            close={() => setIsOpenModalEditNetwork(false)}
            queryKey={queryKey}
            networkData={data}
          />
        </ModalWrapper>
      </ModalRadix>

      <ModalRadix open={isOpenModalAssociateClinic}>
        <ModalWrapper>
          <ModalAssociateClinic
            networkId={id}
            close={() => setIsOpenModalAssociateClinic(false)}
            queryKey={queryKey}
            networkData={data}
          />
        </ModalWrapper>
      </ModalRadix>

      <ModalRadix open={isOpenModalDelete}>
        <ModalWrapper>
          <ModalDelete
            close={() => setIsOpenModalDelete(false)}
            handleDelete={handleDeleteNetwork}
          />
        </ModalWrapper>
      </ModalRadix>
    </WrapperNetworkDetails>
  );
}
